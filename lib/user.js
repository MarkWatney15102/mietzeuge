import { auth } from './firebase.config';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

const register = event => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;
    const password2 = event.target.password2.value;

    if (password === password2) {

        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
    }
}

const login = event => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;

        return user.getIdToken();
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    });
}

const logout = () => {
    signOut(auth).then(() => {
        console.log("success");
    }).catch((error) => {
        console.log(error);
    });
}
export { register, login, logout };