const button = document.getElementById("runaway-btn");
const staticButton = document.getElementById("static-btn");
const myImage = document.getElementById("my-image");
const myDiv = document.getElementById("txt");


const animateMove = (element, prop, pixels) =>
  anime({
    targets: element,
    [prop]: `${pixels}px`,
    easing: "easeOutCirc"
  });

["mouseover", "click"].forEach(function (el) {
  button.addEventListener(el, function (event) {
    const top = getRandomNumber(window.innerHeight - this.offsetHeight);
    const left = getRandomNumber(window.innerWidth - this.offsetWidth);

    animateMove(this, "left", left).play();
    animateMove(this, "top", top).play();
  });
});

const getRandomNumber = (num) => {
  return Math.floor(Math.random() * (num + 1));
};



staticButton.addEventListener("click", () => { 
  // Show the image
  myImage.style.display = "block";
  
  // Hide both buttons
  staticButton.style.display = "none";
  button.style.display = "none";
  txt.style.display = "none";
  

    // Start generating hearts
    setInterval(() => {
      let heart = document.createElement('div');
      heart.className = 'heart';
      heart.innerHTML = '&#10084;';
      heart.style.left = Math.random() * 100 + 'vw';
      heart.style.animationDuration = Math.random() * 3 + 2 + 's';
      heart.style.animationDelay = '0s'; // Start immediately
      document.body.appendChild(heart);
  
      // Remove the heart after it finishes its animation to avoid clutter
      setTimeout(() => {
        heart.remove();
      }, 5000); // Adjust this time based on the maximum animation duration
    }, 50); // Generate a new heart every 200ms
  
    // Hide the static button
    staticButton.style.display = 'none';
  });




