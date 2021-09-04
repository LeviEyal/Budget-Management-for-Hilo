import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import CategoryNav from "./components/CategoryNav";
import FieldsSelector from "./components/FieldsSelector";
import FieldForm from "./components/FieldForm";
import FieldsCompleted from "./components/FieldsCompleted";
import FieldsRemaining from "./components/FieldsRemaining";
import AddField from "./components/AddField";
import SubmitUserData from "./components/SubmitUserData";
import "./App.css";
import firebase from "./Firebase";

export default function App() {

  /* All states: */
  const [category, setCategory] = useState("");
  const [fields, setFields] = useState([]);
  // const [fields, setFields] = useState([]);
  const [currentField, setCurrentField] = useState("");
  const [userData, setUserData] = useState({"expenses_monthly":{}, "expenses_semester":{}, "income":{}});

  /* fetch all fields once from firebase: */
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
              <div>
                <FieldsSelector fields={fields[category]} setCurrentField={setCurrentField} />
                <FieldsRemaining/>
              </div>
              <FieldForm category={category} currentField={currentField} userData={userData} setUserData={setUserData} />
              <FieldsCompleted />
              <AddField />
              <SubmitUserData userData={userData}/>
            </>
          ) : null
        }
      </div>
      <div>
          <pre>
          {JSON.stringify(userData, null, 2)}
          </pre>
      </div>
    </div>
  );
}
