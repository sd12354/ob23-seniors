
document.addEventListener("load", pageLoad);

function pageLoad(){
  console.log("Page Loaded");
  vote = document.getElementById("vote");
  vote.addEventListener("vote", myFunction);

}
function myFunction() {
  console.log("ran");
}
console.log("connected");