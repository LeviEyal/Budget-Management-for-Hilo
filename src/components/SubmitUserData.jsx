import firebase from "../Firebase";

export default function SubmitUserData({userData}) {

  function writeUserDataToFirebase(params) {
    const dbRef = firebase.database().ref();
    dbRef.child('users/user1')
        .set(userData).then(() => alert("Data successfully submitted")).catch(reason => alert(reason));
  }

  return (
    <div>
      <button form="data-form" type="submit" className="submit-btn">Submit</button>
    </div>
  )
}