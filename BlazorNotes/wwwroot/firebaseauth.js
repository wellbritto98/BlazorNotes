import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";


const firebaseConfig = {
    apiKey: "AIzaSyDdrz5LgykDBpxBsRf9-C59PhJ0w1Weda0",
    authDomain: "blazor-notes.firebaseapp.com",
    projectId: "blazor-notes",
    storageBucket: "blazor-notes.appspot.com",
    messagingSenderId: "990579752301",
    appId: "1:990579752301:web:8123dfd48a074616cbae64",
};

// Inicialização do Firebase
const app = initializeApp(firebaseConfig);

// Função de login
window.signIn = async function(email, password) {
    console.log('Iniciado')
    const auth = getAuth();
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        // Se o login for bem-sucedido, armazena o usuário no localStorage (já está fazendo) e retorna true
        const user = userCredential.user;
        var localStorage = window.localStorage;
        localStorage.setItem('user', JSON.stringify(user));
        return true;
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(`Erro no login: ${errorCode}, ${errorMessage}`);

        return false;
    }
}

window.signUp = async function(email, password) {
    const auth = getAuth();
    return createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            var retorno = new Object();
            retorno.success = true;
            retorno.mensagem = "Usuário criado com sucesso";
            console.log('Retorno' + retorno.success +' '+ retorno.mensagem)
            return retorno;
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(`Erro ao criar usuário: ${errorCode}, ${errorMessage}`);
            var retorno = new Object();
            retorno.success = false;
            retorno.mensagem = errorMessage;
            return retorno;
        });
}