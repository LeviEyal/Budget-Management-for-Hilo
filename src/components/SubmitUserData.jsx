import firebase from "../Firebase";

export default function SubmitUserData({userData}) {

  function writeUserDataToFirebase(params) {
    const dbRef = firebase.database().ref();
    dbRef.child('users/user1')
        .set(userData);
  }

  return (
    <div>
      <button className="submit-btn" onClick={writeUserDataToFirebase}>Submit</button>
    </div>
  )
}