export default function FieldsCompleted({ fields, userData, setCurrentField}) {
  return (
    <div>
      <h3>Fields completed:</h3>
      {
        fields.filter(
          (f) =>
            userData["income"][f] ||
            userData["expenses_monthly"][f] ||
            userData["expenses_semester"][f]
        )
        .map((f) => <button key={f} className="field-completed-btn" onClick={() => setCurrentField(f)}>{f}</button>)
      }
    </div>
  );
}
