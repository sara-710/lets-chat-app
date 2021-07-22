var firebaseConfig = {
    apiKey: "AIzaSyAfPUVwYyyhqv47B_QtfxMSQdeI9E2hqdA",
    authDomain: "kwitter-7dfb0.firebaseapp.com",
    databaseURL: "https://kwitter-7dfb0-default-rtdb.firebaseio.com",
    projectId: "kwitter-7dfb0",
    storageBucket: "kwitter-7dfb0.appspot.com",
    messagingSenderId: "174576414336",
    appId: "1:174576414336:web:9acfa6fc824160a93b4065",
    measurementId: "G-WDGL32LZBH"
};

firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name: user_name,
        like: 0,
        message: msg
    });
    document.getElementById("msg").value = "";
}

function getData() {
    firebase.database().ref("/" + room_name).on('value', function(snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) {
            childKey = childSnapshot.key;
            childData = childSnapshot.val();
            if (childKey != "purpose") {
                firebase_message_id = childKey;
                message_data = childData;
                console.log(firebase_message_id);
                console.log(message_data);
            }
        });
    });
}
getData();

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location.replace("index.html");
}