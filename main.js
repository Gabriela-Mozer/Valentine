const yesBtn = document.getElementById("yes-answer");
const noBtn = document.getElementById("no-answer");
const loading = document.getElementById("loading");

const yesMessage = document.getElementById("cool");
const noMessage = document.getElementById("fuck");

let isAnimating = false;

function showYesMessage() {
  yesMessage.innerHTML = "Yay, cool!";
  noMessage.innerHTML = "";
}

function showNoMessage() {
  noMessage.innerHTML = "Go fuck yourself!";
  yesMessage.innerHTML = "";
}

const dots = [];
function showLoadingHearts(callback) {

  if (isAnimating) return;

  loading.style.display = "flex";
  yesMessage.innerHTML = "";
  noMessage.innerHTML = ""; 
  isAnimating = true;

  const dot1 = document.createElement("h2");
  dot1.innerHTML = "💓";
  dot1.classList.add("dot1");
  loading.appendChild(dot1);
  dots.push(dot1);

  const dot2 = document.createElement("h2");
  dot2.innerHTML = "💓";
  dot2.classList.add("dot2");
  loading.appendChild(dot2);
  dots.push(dot2);

  const dot3 = document.createElement("h2");
  dot3.innerHTML = "💓";
  dot3.classList.add("dot3");
  loading.appendChild(dot3);
  dots.push(dot3);

  setTimeout(() => {
    dots.forEach((dot) => {
      dot.style.opacity = 0;
      loading.style.display = "none";
      isAnimating = false;
      dots.forEach((dot) => dot.remove());
      callback();
    });
  }, 1500);
}

