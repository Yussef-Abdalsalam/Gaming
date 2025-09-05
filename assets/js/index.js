
function MORE() {
  window.location.href = `./Products.html`;
}

async function logen() {

  const { } = await Swal.fire({
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
        title: `Welcome ${document.getElementById("swal-input1").value}`,
      });

    }
  });
  if (formValues) {
    Swal.fire(JSON.stringify(formValues));
  }
}

new WOW().init();


let preloader = document.getElementById("preloader");
/*---------- Start Preloader ----------*/
$("body").css("overflow", "hidden");

$(document).ready(() => {
    // انتظار 2 ثانية ثم إخفاء الـ preloader
    setTimeout(() => {
        $("#preloader").fadeOut(1500, () => {
            // بعد اختفاء الـ preloader، إعادة تفعيل الـ scroll
            $("body").css("overflow", "auto");
        });
    }, 1000);
});
// ---------- End Preloader ----------

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




// ---------- Start slider ----------
$('.slider').slick({
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2500,
});


