import { auth, providerGoogle } from "./firebase";
// UIHandler
import { MessageHandler } from "./../UIHandler/uiHandler";

export const signInWithEmailAndPassword = (email, password) => {
  auth
    .signInWithEmailAndPassword(email, password)
    .then((res) => {
      if (res.user.emailVerified)
        console.log("[Email and Password]", "Signed in");
      else verifyEmail();
    })
    .catch((error) => MessageHandler.showMessage(error.message));
};

export const signInWithGoogle = (email, password) => {
  auth
    .signInWithPopup(providerGoogle)
    .then((res) => MessageHandler.showMessage("[Google], Signed in"))
    .catch((err) => MessageHandler.showMessage(err.message));
};

export const signUpWithEmailAndPassword = (email, password) => {
  auth
    .createUserWithEmailAndPassword(email, password)
    .then((res) => {
      verifyEmail();
    })
    .catch((error) => MessageHandler.showMessage(error.message));
};

export const onStateChanged = (callback) => {
  auth.onAuthStateChanged((user) => {
    if (user) {
      //if Email is not verified
      if (!user.emailVerified) signOut();
      else {
        console.log("[AUTH]", "User is currently logged in");
        callback(user);
      }
    } else {
      console.log("[AUTH]", "User is currently logged out");
      callback(null);
    }
  });
};

function verifyEmail() {
  let currentUser = auth.currentUser;
  currentUser
    .sendEmailVerification()
    .then(() => {
      MessageHandler.showMessage(
        "Verfication email sent to the provided email"
      );
    })
    .catch((error) => MessageHandler.showMessage(error.errorMessage));
}

export function signOut() {
  let currentUser = auth.currentUser;
  auth
    .signOut()
    .then(() => {
      MessageHandler.showMessage(
        `[Sign out] ${currentUser.email} is signed out`
      );
    })
    .catch((error) => console.log(error));
}

export function resetPassword(email) {
  auth
    .sendPasswordResetEmail(email)
    .then(function () {
      MessageHandler.showMessage(
        "Password reset instructions sent to the provided email."
      );
    })
    .catch(function (error) {
      MessageHandler.showMessage(error.message);
    });
}
