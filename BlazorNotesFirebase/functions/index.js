const functions = require("firebase-functions");
const admin = require("firebase-admin");
import { initializeApp } from "firebase/app";
var serviceAccount = require("./blazor-notes-firebase-adminsdk-y20l2-de04d3d319.json");

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdrz5LgykDBpxBsRf9-C59PhJ0w1Weda0",
  authDomain: "blazor-notes.firebaseapp.com",
  projectId: "blazor-notes",
  storageBucket: "blazor-notes.appspot.com",
  messagingSenderId: "990579752301",
  appId: "1:990579752301:web:8123dfd48a074616cbae64",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

exports.register = functions.https.onRequest((req, res) => {
  var email = req.body.email;
  var password = req.body.password;

  admin
    .auth()
    .createUser({
      email: email,
      password: password,
    })
    .then((userRecord) => {
      // User is created
      console.log("Successfully created new user:", userRecord.uid);
      res.status(200).send({
        success: true,
        message: `Successfully created new user: ${userRecord.uid}`,
      });
    })
    .catch((error) => {
      // User creation failed
      console.error("Error creating new user:", error);
      res.status(400).send({ error: "Error creating new user" });
    });
});
