import React from "react";
import * as firebase from "firebase";

import { render } from "react-dom";
import { Main } from "./main";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcL6ApUDFXgVaTKpoRdpgOqPMQXRYVME0",
  authDomain: "nosotros-crowdfunding.firebaseapp.com",
  databaseURL: "https://nosotros-crowdfunding.firebaseio.com",
  projectId: "nosotros-crowdfunding",
  storageBucket: "nosotros-crowdfunding.appspot.com",
  messagingSenderId: "1064489611938",
  appId: "1:1064489611938:web:8650c7321ebdc83c511dfb",
  measurementId: "G-8YQP6BRXNR"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

render(<Main />, document.getElementById("app"));
