import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, setPersistence, browserLocalPersistence, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";


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
window.signIn = async function (email, password) {
    console.log('Iniciado');
    const auth = getAuth();
    try {
        // Configura a persistência antes de fazer o login
        await setPersistence(auth, browserLocalPersistence);

        // Tenta fazer o login
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log('Usuário logado com sucesso: ', userCredential.user);
        return true; // Retorna true se o login for bem-sucedido
    } catch (error) {
        // Captura erros tanto de persistência quanto de login
        console.error('Erro no login: ', error.code, error.message);
        return false; // Retorna false se ocorrer um erro
    }
}


window.signUp = async function (email, password) {
    const auth = getAuth();
    return createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            var retorno = new Object();
            retorno.success = true;
            retorno.mensagem = "Usuário criado com sucesso";
            console.log('Retorno' + retorno.success + ' ' + retorno.mensagem)
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

window.authStateChanged = function () {
    return new Promise((resolve, reject) => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log('Usuário logado');
                resolve(true);
            } else {
                console.log('Usuário não logado');
                resolve(false);
            }
        });
    });
}

window.signOut = async function () {
    const auth = getAuth();
    try {
        await signOut(auth);
        console.log('Usuário deslogado');
        return true; // Retorna true se o logout for bem-sucedido
    } catch (error) {
        console.log('Erro ao deslogar usuário', error);
        return false; // Retorna false em caso de erro
    }
};




