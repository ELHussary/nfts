// scroll to top
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    document.getElementById("back_to_top").classList.remove("hidden");
  } else {
    document.getElementById("back_to_top").classList.add("hidden");
  }
}
document.getElementById("back_to_top").onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// navbar menu
document.getElementById("menu").onclick = function () {
  myFunction();
};

function myFunction() {
  document.getElementById("myMenu").classList.toggle("hidden");
}

let faq = document.getElementsByClassName("faq-page");
for (let i = 0; i < faq.length; i++) {
  faq[i].addEventListener("click", function () {
    for (let i = 0; i < faq.length; i++) {
      if (faq[i] != this) {
        faq[i].nextElementSibling.classList.remove("faq");
        faq[i].nextElementSibling.classList.add("hidden");
        faq[i].previousSibling.nextSibling.lastElementChild.classList.remove(
          "rotate-180"
        );
      } else {
        faq[i].nextElementSibling.classList.toggle("faq");
        faq[i].previousSibling.nextSibling.lastElementChild.classList.toggle(
          "rotate-180"
        );
        faq[i].nextElementSibling.classList.toggle("hidden");
      }
    }
  });
}

filterObjects("all");
function filterObjects(c) {
  let x, i;
  x = document.getElementsByClassName("box");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    removeClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) addClass(x[i], "show");
  }
}

function addClass(element, name) {
  let i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

function removeClass(element, name) {
  let i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) > -1) {
      while (arr1.indexOf(arr2[i]) > -1) {
        arr1.splice(arr1.indexOf(arr2[i]), 1);
      }
    }
  }
  element.className = arr1.join(" ");
}

let btns = document.getElementsByClassName("btn");
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
