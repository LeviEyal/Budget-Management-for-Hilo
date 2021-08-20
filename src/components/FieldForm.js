import React from "react";
import "./FieldForm.css";


export default function FieldForm(props) {

  function setDate(field, value) {
    props.setUserData();
  }

  return (
    <div className="field-form">
      <form>
        <label htmlFor="Description">Description</label><br/>
        <input type="text" id="Description" name="Description"/><br/><br/>
          
        <label htmlFor="date">Date</label><br/>
        <input type="date" id="date" name="date"/><br/><br/>
        
        <label htmlFor="amount">Amount of Money</label><br/>
        <input type="number" id="amount" name="amount"/><br/><br/>
        
        <label htmlFor="note">Note</label><br/>
        <input type="text" id="note" name="note"/><br/><br/>
      </form>        
    </div>
  );
}