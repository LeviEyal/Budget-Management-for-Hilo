
export default function FieldsCompleted({ fields, userData }) {
  return (
    <div>
      <h3>Fields completed:</h3>
      {fields
        .filter(
          (f) =>
            userData["income"][f] ||
            userData["expenses_monthly"][f] ||
            userData["expenses_semester"][f]
        )
        .map((f) => {
          return <button className="field-completed-btn">{f}</button>;
        })}
    </div>
  )
}