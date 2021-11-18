import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import CategoryNav from "./components/CategoryNav";
import FieldsSelector from "./components/FieldsSelector";
import FieldForm from "./components/FieldForm";
import FieldsCompleted from "./components/FieldsCompleted";
import AddField from "./components/AddField";
import SubmitUserData from "./components/SubmitUserData";
import DataTable from "./components/DataTable";
import "./App.css";

const serverUrl = process.env.development ? "http://localhost:3000" : "https://hilo-server.herokuapp.com";

export default function App() {
  /* All states: */
  const [category, setCategory] = useState("");
  const [fields, setFields] = useState([]);
  const [currentField, setCurrentField] = useState("");
  const [userData, setUserData] = useState({
    expenses_monthly: {},
    expenses_semester: {},
    income: {},
  });

  useEffect(() => {
    //get from getData endpoint and set fields array from server-side
    axios
      .get(`${serverUrl}/getFields`)
      .then((snapshot) => {
          setFields(snapshot.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <Header />
      <div className="bodyWrapper">
        <CategoryNav category={category} setCategory={setCategory} />
        {fields[category] ? (
          <>
            <div className="temp">
              <FieldsSelector
                fields={fields[category]}
                setCurrentField={setCurrentField}
              />
            </div>
            <br />
            <FieldForm
              category={category}
              currentField={currentField}
              userData={userData}
              setUserData={setUserData}
            />
            <FieldsCompleted
              fields={fields[category]}
              userData={userData}
              setCurrentField={setCurrentField}
            />
            <AddField />
            <SubmitUserData userData={userData} />
          </>
        ) : null}
      </div>
      <DataTable userData={userData} />
    </div>
  );
}
