import React, { useState, useEffect } from "react";

export default function FieldsSelector({fields, setCurrentField}) {

  function chooseField(e) {
    console.log("choosing filed " + e.target.value);
    setCurrentField(e.target.value);
  }

  return (
    <select className="combo" name="fields" onChange={chooseField}>
      {fields.map((f) => {
        return <option key={f}>{f}</option>;
      })}
    </select>
  );
}
