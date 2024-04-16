const preloader = document.querySelector("[data-preloader]");

window.addEventListener("load", function () {
  preloader.classList.add("loaded");
  document.body.classList.add("loaded");

  this.setTimeout(() => {
    preloader.remove();
  }, 2000)
});

$(document).ready(function () {
  $('.autoplay').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    infinite: true,
    dots: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,

        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});

// toggle select Add-ons
function selectAddOn(card) {
  var icon = card.querySelector('.checkCardWrapper i');
  if (icon.classList.contains('fa-solid')) {
      icon.classList.remove('fa-solid', 'fa-circle-check', 'checked');
      icon.classList.add('fa-regular', 'fa-circle');
  } else {
      icon.classList.remove('fa-regular', 'fa-circle');
      icon.classList.add('fa-solid', 'fa-circle-check', 'checked');
  }
}

function counterMinus () {
  let counter = document.getElementById("counter").value,
    finalVal = document.getElementById("value");
  if(counter > 1) {
    document.getElementById("counter").value = Number(counter) - 1;
    finalVal.innerHTML = `$${(Number(counter) - 1) * 300}`
  }
}

function counterPlus() {
  let counter = document.getElementById("counter").value,
    finalVal = document.getElementById("value");
  document.getElementById("counter").value = Number(counter) + 1
  finalVal.innerHTML = `$${(Number(counter) + 1) * 300}`
}