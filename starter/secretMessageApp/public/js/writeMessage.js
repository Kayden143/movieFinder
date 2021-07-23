const messagesRef = firebase.database().ref();
const inputPass = document.querySelector("#passcode");
const inputText = document.querySelector("#message");

const submitMessage = (userName, userGenre, userDesc) => {
    messagesRef.push({
        name: userName,
        genre: userGenre,
        description: userDesc
    });
}

document.querySelector("#sendMsg").addEventListener("click", (e)=>{
    let name = document.querySelector("#movieName").value;
    let genre = document.querySelector("#passcode").value;
    let description = document.querySelector("#message").value;
    //console.log(message + " " + passcode);

    submitMessage(name, genre, description);

    document.querySelector("#movieName").value = "";
    document.querySelector("#passcode").value = "";
    document.querySelector("#message").value = "";
});

/*
messagesRef.push({
    message: "This was made with JS",
    passcode:"JS"
});
*/
