export default function FieldsRemaining({ fields, userData }) {
  return (
    <span className="column">
      {fields
        .filter(
          (f) =>
            !userData["income"][f] &&
            !userData["expenses_monthly"][f] &&
            !userData["expenses_semester"][f]
        )
        .map((f) => {
          return <button className="field-remaining-btn">{f}</button>;
        })}
    </span>
  );
}
