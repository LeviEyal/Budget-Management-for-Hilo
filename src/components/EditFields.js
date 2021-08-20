import React, { useState, useEffect } from "react";
import "./EditFields.css";
import FieldForm from "./FieldForm";
import firebase from "../Firebase";

export default function EditFields(props) {

  const [fields, setfields] = useState([]);
  const [userData, setUserData] = useState({});

  function getData() {
    const dbRef = firebase.database().ref();
    dbRef
      .child(props.category)
      .get()
      .then((snapshot) => {
        if (snapshot.exists()) {
          setfields(snapshot.val());
          console.log(snapshot.val());
        } else {
          console.log("Can't fatch the fields array from DB");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  useEffect(() => {
    if(props.category) getData();
  }, [props.category]);

  return (
    <div>
      <select className="combo" name="fields">
        {fields.map((f) => {
          return <option key={f}>{f}</option>;
        })}
      </select>
      <FieldForm userData={userData} setUserData={setUserData} />
      
      <button className="add-btn">+ Add</button>
      <br />
      <button className="submit-btn">Submit</button>
    </div>
  );
}
