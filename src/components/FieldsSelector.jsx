import { useEffect } from "react";

export default function FieldsSelector({fields, setCurrentField}) {

  useEffect(() => {
    if (fields[0]) setCurrentField(fields[0]);
  }, [fields, setCurrentField])

  function chooseField(e) {
    console.log("choosing field ", e.target.value);
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
