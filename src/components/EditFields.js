import React, { useState, useEffect } from "react";
import "./EditFields.css";
import FieldForm from "./FieldForm";
import firebase from "../Firebase";

export default function EditFields(param) {
  console.log(param.op);

  const [fields, setfields] = useState([]);

  function getData() {
    const dbRef = firebase.database().ref();
    dbRef
      .child(param.op)
      .get()
      .then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot);
          setfields(snapshot.val());
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  useEffect(() => {
    if(param.op) getData();
  }, [param.op]);

  return (
    <div>
      <select className="combo" name="fields">
        {fields.map((f) => {
          return <option key={f}>{f}</option>;
        })}
      </select>
      <FieldForm />
    </div>
  );
}
