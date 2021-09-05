
export default function FieldForm({category, currentField, userData, setUserData}) {
  
  /* Updates the user data when the student is filling the form */
  function writeUserData(e) {
    console.log(e);
    const temp = userData;
    if (!temp[category][currentField]) temp[category][currentField] = {};
    temp[category][currentField][e.target.id] = e.target.value;
    console.log("temp: ", temp);
    setUserData(temp)
  }

  return (
    <div className="field-form">
      <form>

        <div className="column">
          <label htmlFor="Description">Description</label><br/>
          <input type="text" id="Description" name="Description" onChange={writeUserData}/><br/><br/>
            
          <label htmlFor="date">Date</label><br/>
          <input type="date" id="date" name="date" onChange={writeUserData} /><br/><br/>
          
          <label htmlFor="amount">Amount of Money</label><br/>
          <input type="number" id="amount" name="amount" onChange={writeUserData} /><br/><br/>
          
          <label htmlFor="note">*Note</label><br/>
          <input type="text" id="note" name="note" onChange={writeUserData} /><br /><br />
        </div>
        
        <div className="column">
          <label htmlFor="payment_method">Payment Method</label><br/>
          <select id="payment_method" name="payment_method" onChange={writeUserData}>
            <option key="cash">Cash</option>;
            <option key="credit-card">Credit Card</option>;
          </select>
        </div>

      </form>
    </div>
  );
}