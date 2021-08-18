import React from "react";
import "./EditFields.css";
// import { FirebaseDatabaseProvider } from "@react-firebase/database";

export default function EditFields() {
  return (
    // <FirebaseDatabaseProvider>
      <div>
        <select className="combo" name="fields">
          <option value="volvo">Volvo</option>
        </select>
      </div>
    // </FirebaseDatabaseProvider>
  );
}
