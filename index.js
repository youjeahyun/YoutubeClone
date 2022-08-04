const express  =require('express');
const app = express();
const PORT = 4000;

function handleListening() {
    console.log(`Example app listening on port ${PORT}!`);
}
app.listen(PORT, handleListening);
	
function handleHome(req, res) {
    console.log(req);
    res.send("홈 화면입니다.")
}
app.get("/", handleHome);

/* index.js */
 
function handleProfile(req, res) {
    console.log(req);
    res.send("asdasdsa 화면입니다.")
}   
app.get("/profile", handleProfile);
  