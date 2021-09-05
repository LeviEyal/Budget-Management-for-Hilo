export default function DataTable({ userData }) {
  return (
    <div className="data-table">
      <div className="column-3">
        <h4>Income</h4>
        {
          Object.keys(userData["income"]).map((key, index) => (
            userData["income"][key].amount ? 
            <div>
              <span className="field-remaining-btn">{key}</span>
              <span className="field-remaining-btn">{userData["income"][key].amount}</span>
            </div> : null
          ))
        }
      </div>
      <div className="column-3">
        <h4>monthly expenses</h4>
        {
          Object.keys(userData["expenses_monthly"]).map((key, index) => (
            userData["expenses_monthly"][key].amount ? 
            <div>
              <span className="field-remaining-btn">{key}</span>
              <span className="field-remaining-btn">{userData["expenses_monthly"][key].amount}</span>
            </div> : null
          ))
        }
      </div>
      <div className="column-3">
        <h4>semester expenses</h4>
        {
          Object.keys(userData["expenses_semester"]).map((key, index) => (
            userData["expenses_semester"][key].amount ? 
            <div>
              <span className="field-remaining-btn">{key}</span>
              <span className="field-remaining-btn">{userData["expenses_semester"][key].amount}</span>
            </div> : null
          ))
        }
      </div>
    </div>
  );
}
