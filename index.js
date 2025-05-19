const showSideBar = document.querySelector(".showSidebar");
const sidebar = document.querySelector(".sidebar");
const closeBtn = document.querySelector(".closebtn");
const body = document.querySelector("body");
// const allStars = document.querySelectorAll(".star");

document.querySelectorAll(".sidebar li").forEach((link) => {
  link.addEventListener("click", () => {
    sidebar.style.display = "none";
    body.style.position = "relative";
  });
});

showSideBar.addEventListener("click", () => {
  // scrollPosition = window.scrollY;

  sidebar.style.display = "flex";
  // body.style.position = "fixed";
  // body.style.top = `-${scrollPosition}px`;
  // body.style.left = "0";
  // body.style.right = "relative";
  // body.style.overflow = "hidden";
});

closeBtn.addEventListener("click", () => {
  sidebar.style.display = "none";
  // body.style.position = "";
  // body.style.top = "";
  // body.style.left = "";
  // body.style.right = "";
  // body.style.overflow = "";

  // window.scrollTo(0, scrollPosition);
});

// emailjs

(function () {
  emailjs.init({
    publicKey: "vwoUQhE1u56l2hVYB",
  });
})();

window.onload = function () {
  const form = document.getElementById("contact-form");
  const allStars = document.querySelectorAll(".star");
  const ratingInput = document.getElementById("rating-value");
  const submitBtn = document.querySelector(".submit-input");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // these IDs from the previous steps
    emailjs.sendForm("service_se3s4ho", "template_pvmhne1", this).then(
      () => {
        // alert("SUCCESS!");

        // Clear form fields
        form.reset();

        // Reset star rating display
        allStars.forEach((star) => {
          star.innerHTML = "&#9734;"; // empty star
          star.style.color = "white";
        });

        // Change the submit button text to "Done"
        submitBtn.textContent = "Done";
        submitBtn.style.backgroundColor = "green";
        submitBtn.style.color = "white";

        const mytimeOut = setTimeout(() => {
          submitBtn.textContent = "Submit";
          submitBtn.style.backgroundColor = "white";
          submitBtn.style.color = "black";
        }, 2000);
      },
      (error) => {
        console.log("FAILED...", error);
      }
    );
  });
};

// star-rating
// const allStars = document.querySelectorAll("rating-value");

const allStars = document.querySelectorAll(".star");
const ratingInput = document.getElementById("rating-value");

allStars.forEach((star, i) => {
  star.addEventListener("click", function () {
    let current_star_level = i + 1;
    ratingInput.value = current_star_level;

    allStars.forEach((star, j) => {
      if (current_star_level >= j + 1) {
        star.innerHTML = "&#9733";
        star.style.color = "gold";
      } else {
        star.innerHTML = "&#9734";
        star.style.color = "white";
      }
    });
  });
});
