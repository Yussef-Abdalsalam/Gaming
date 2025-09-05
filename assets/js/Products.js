let bgImmg = document.getElementById("bg-immgg");
let cards = document.getElementById("cards");
let Header = document.getElementById("Header");


function updateCart1() {
    Swal.fire({
  title: "Core controller",
  text: "$59.99",
  imageUrl:  './assets/imgs/b1.png',
  imageWidth: 400,
  imageHeight: 200,
  imageAlt: "Custom image"
});

}
function updateCart2() {
    Swal.fire({
  title: "Titan controller",
  text: "$59.99",
  imageUrl:  './assets/imgs/p1.png',
  imageWidth: 400,
  imageHeight: 200,
  imageAlt: "Custom image"
});

}
function updateCart3() {
    Swal.fire({
  title: "Tactical Controller",
  text: "$59.99",
  imageUrl:  './assets/imgs/p2.png',
  imageWidth: 400,
  imageHeight: 200,
  imageAlt: "Custom image"
});

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
