import React, { useState, useEffect } from "react";
import "./EditFields.css";
import firebase from "../../Firebase";

export default function EditFields() {
  const [fields, setfields] = useState([]);

  function getData() {
    const dbRef = firebase.database().ref();
    dbRef
      .child("monthy_expenses_fields")
      .get()
      .then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val());
          setfields(snapshot.val());
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <select className="combo" name="fields">
        {fields.map(f => {
          return(<option key={f}>{f}</option>)
        })}
      </select>
    </div>
  );
}
