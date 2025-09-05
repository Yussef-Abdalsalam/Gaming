let bgColor = document.getElementById("img2");


function changeBgColorred() {
    bgColor.style.backgroundColor = "red";
}
function changeBgColorgren() {
    bgColor.style.backgroundColor = "#00DA80";
}
function changeBgColorBlo() {
    bgColor.style.backgroundColor = "#1490f5";
}
function changeBgColorYellow() {
    bgColor.style.backgroundColor = "yellow";
}
function changeBgColorBlue() {
    bgColor.style.backgroundColor = "#0a06f5";
}

function Addcart() {
  Swal.fire({
  title: "Add To Cart",
  icon: "success",
  draggable: true
});
}

async function Ordar() {

const { value: formValues } = await Swal.fire({
  title: "ORDER NOW",
  html: `
    <input id="swal-input1" placeholder="Your Name" class="swal2-input">
    <input id="swal-input2" placeholder="Your phone" class="swal2-input">
  `,
  focusConfirm: false,
  preConfirm: () => {
    return [
      document.getElementById("swal-input1").value,
      document.getElementById("swal-input2").value
    ];
  }
});
if (formValues) {
  Swal.fire(JSON.stringify(formValues));
}
}

async function logen() {

const {  } = await Swal.fire({
  title: "Contact",
  html: `
    <input id="swal-input1" placeholder="Your Name" class="swal2-input">
    <input id="swal-input2" placeholder="Your email" class="swal2-input">
    <input id="swal-input3" placeholder="Your phone" class="swal2-input">
  `,
  focusConfirm: false,
  preConfirm: () => {

  Swal.fire({
    icon: "success",
    title: `Welcome ${ document.getElementById("swal-input1").value}`,
  });

  }
});
if (formValues) {
  Swal.fire(JSON.stringify(formValues));
}
}
// --------- Start sound ----------
let audio = new Audio('https://server8.mp3quran.net/afs/012.mp3');
function playSound() {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}

// ---------- End sound ----------

new WOW().init();
