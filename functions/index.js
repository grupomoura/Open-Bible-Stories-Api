const functions = require("firebase-functions");

const app = require("express")();
const admin = require("firebase-admin");
admin.initializeApp();

const  db = admin.firestore().collection();

exports.api = functions.https.onRequest(app);


// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
