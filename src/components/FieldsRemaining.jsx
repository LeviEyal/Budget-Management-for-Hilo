export default function FieldsRemaining({
  fields,
  userData,
  currentField,
  setCurrentField,
}) {
  return (
    <span className="right">
      {fields
        .filter(
          (f) =>
            !userData["income"][f] &&
            !userData["expenses_monthly"][f] &&
            !userData["expenses_semester"][f]
        )
        .map((f) => {
          return (
            <button
              key={f}
              className={
                f === currentField
                  ? "current field-remaining-btn"
                  : "field-remaining-btn"
              }
              onClick={() => setCurrentField(f)}
            >
              {f}
            </button>
          );
        })}
    </span>
  );
}
