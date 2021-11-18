import { useEffect, useRef } from "react";
import axios from "axios";
//server url:
const serverUrl = process.env.development ? "http://localhost:3000" : "https://hilo-server.herokuapp.com";

export default function FieldForm({category, currentField, userData, setUserData}) {

  const descriptionRef = useRef();
  const dateRef = useRef();
  const amountRef = useRef();
  const noteRef = useRef();
  const paymentMethodRef = useRef();
  
  /* Updates the user data when the student is filling the form */
  function writeUserData(e) {
    const temp = userData;
    if (!temp[category][currentField]) temp[category][currentField] = {};
    temp[category][currentField][e.target.id] = e.target.value;
    setUserData(temp)
  }
  
  useEffect(() => { 
    try {
      descriptionRef.current.value = userData[category][currentField].Description;
    } catch (error) {
      descriptionRef.current.value = "";
    }
    try {
      dateRef.current.value = userData[category][currentField].date;
    } catch (error) {
      dateRef.current.value = "";
    }
    try {
      amountRef.current.value = userData[category][currentField].amount;
    } catch (error) {
      amountRef.current.value = 0;
    }
    try {
      noteRef.current.value = userData[category][currentField].note;
    } catch (error) {
      noteRef.current.value = "";
    }
    try {
      paymentMethodRef.current.value = userData[category][currentField].payment_method;
    } catch (error) {
      paymentMethodRef.current.value = "cash";
    }
  }, [category, currentField, userData]);

  function submitData(e) {
    e.preventDefault();
    //post request on postUserData endpoint at server-side
    axios.post(`${serverUrl}/postUserData`, userData)
      .then(res => {
        alert("Data successfully submitted")
      }).catch(err => {
        console.log(err);
      });
  }

  return (
    <div className="field-form">
      <form id="data-form" onSubmit={submitData}>

        <div className="column">
          <label htmlFor="Description">Description</label><br/>
          <input ref={descriptionRef} type="text" id="Description" name="Description" onChange={writeUserData}/><br/><br/>
            
          <label htmlFor="date">* Date</label><br/>
          <input ref={dateRef} type="date" id="date" name="date" onChange={writeUserData} required/><br/><br/>
          
          <label htmlFor="amount">* Amount of Money</label><br/>
          <input ref={amountRef} type="number" id="amount" name="amount" onChange={writeUserData} required /><br/><br/>
          
          <label htmlFor="note">Note</label><br/>
          <input ref={noteRef} type="text" id="note" name="note" onChange={writeUserData}/><br /><br />
        </div>
        
        <div className="column">
          <label htmlFor="payment_method">* Payment Method</label><br/>
          <select ref={paymentMethodRef} id="payment_method" name="payment_method" onChange={writeUserData} required>
            <option key="cash">Cash</option>;
            <option key="credit-card">Credit Card</option>;
          </select>
        </div>

      </form>
    </div>
  );
}