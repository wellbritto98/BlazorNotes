const functions = require("firebase-functions");
const admin = require("firebase-admin");
const express = require("express");
const bodyParser = require("body-parser");

var serviceAccount = require("./blazor-notes-firebase-adminsdk-y20l2-de04d3d319.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const app = express();

// Middleware para decodificar o token de ID do Firebase
app.use(decodeIDToken);

/**
 * Decodifica o Token JWT do Firebase enviado através do app frontend
 * Disponibiliza os dados do usuário atual (firebase) no objeto de solicitação.
 */
async function decodeIDToken(req, res, next) {
  if (req.headers?.authorization?.startsWith('Bearer ')) {
    const idToken = req.headers.authorization.split('Bearer ')[1];

    try {
      const decodedToken = await admin.auth().verifyIdToken(idToken);
      req.currentUser = decodedToken;
    } catch (err) {
      console.error(err);
    }
  }

  next();
}

// Acesse os dados do usuário do Firebase em suas rotas
app.get('/hello', (req, res) => {
  const user = req.currentUser;

  if (!user) { 
    res.status(403).send('Você deve estar logado!');
  }
});

// Definindo a função do Firebase
exports.api = functions.https.onRequest(app);
