const Storename = document.getElementById("name");
const resetname = document.getElementById("reset_name");
let display_name = null;

Storename.addEventListener("input", function () {
  if (Storename.value.length > 0) {
    resetname.style.display = "inline";
  }
  else{
    resetname.style.display = "none";
  }
});

resetname.addEventListener("click", () =>{
    if (Storename.value.length > 0){
        Storename.value = ""
        resetname.style.display = "none";
    }
    else if(document.getElementById("output").innerHTML.length > 0){
        document.getElementById("output").textContent = ""
        resetname.style.display = "none";
    }
})

function submit() {
  if (Storename.value != "") {
    display_name = Storename.value;
    document.getElementById(
      "output"
    ).textContent = `Your Name is: ${display_name}`;
    console.log(`Your Name is: ${display_name}`);
    Storename.value = "";
  }
}
