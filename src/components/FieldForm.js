import React from "react";
import "./FieldForm.css";


export default function FieldForm() {
  return (
    <div className="field-form">
      <form>
        <p>Description</p>
        <input type="text" />
        <p>Date</p>
        <input type="text" />
        <p>Amount of Money</p>
        <input type="text" />
        <p>Note</p>
        <input type="text" />
        <br /><br /><br />
        <br /><br />
        <button className="add-btn">+ Add</button>
        <br />
        <button className="submit-btn">Submit</button>
      </form>
    </div>
  );
}
