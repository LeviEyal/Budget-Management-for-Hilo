import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import CategoryNav from "./components/CategoryNav";
import FieldsSelector from "./components/FieldsSelector";
import FieldForm from "./components/FieldForm";
import FieldsCompleted from "./components/FieldsCompleted";
import AddField from "./components/AddField";
import SubmitUserData from "./components/SubmitUserData";
import "./App.css";
import firebase from "./Firebase";

export default function App() {
  /* All states: */
  const [category, setCategory] = useState("");
  const [fields, setFields] = useState([]);
  const [currentField, setCurrentField] = useState("");
  const [userData, setUserData] = useState({});

  /* fetch all fields once: */
  useEffect(() => {
    const dbRef = firebase.database().ref();
    dbRef
      .get()
      .then((snapshot) => {
        if (snapshot.exists()) {
          setFields(snapshot.val());
        } else console.log("Can't fetch the fields arrays from DB");
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="App">
      <Header />
      <div className="bodyWrapper">
        <CategoryNav category={category} setCategory={setCategory} />
        {
          fields[category] ? (
          <>
            <FieldsSelector fields={fields[category]} setCurrentField={setCurrentField} />
            <FieldForm currentField={currentField} setUserData={setUserData} />
            <FieldsCompleted />
            <AddField />
            <SubmitUserData />
          </>
          ) : null
        }
      </div>
    </div>
  );
}
