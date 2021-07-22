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

function getData() {
    firebase.database().ref("/").on('value', function(snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            console.log("Room Name - " + Room_names);
            row = "<div class='room_name' id= " + Room_names + " onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
            document.getElementById("output").innerHTML += row;
        });
    });
}
getData();

function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kiwtter_page.html";
}

function addRoom() {
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name"
    });
    localStorage.setItem("room_name", room_name);
    window.location = "kiwtter_page.html";
}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}