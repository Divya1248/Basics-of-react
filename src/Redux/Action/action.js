import firebase from "../../firebase"



export let AddUser = () => {
    return async dispatch => {
        let data= await firebase.auth().createUserWithEmailAndPassword();
        dispatch ({
            type: "Adduser",
            payload: data,
        })
    }
}