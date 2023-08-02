const searchInput = document.querySelector(".search-games");
const searchButton = document.querySelector(".search-button");

let params = "";
const callParams = () => {
  params = searchInput.values;

  fetch("https://api.rawg.io/api/games?key=b27d52583c6a40f2aa45da9f3b763430")
    .then((response) => response.json())
    .then((response) => params)
    .catch((err) => console.error(err));
  console.log(params, "here");
  searchInput = "";
};

searchButton.addEventListener("click", callParams());

// const wrapper = document.querySelector(".wrapper");
// const loginLink = document.querySelector(".login-link");
// const registerLink = document.querySelector(".register-link");

// registerLink.addEventListener("click", () => {
//   wrapper.classList.add("active");
// });
// loginLink.addEventListener("click", () => {
//   wrapper.classList.remove("active");
// });

// const option = {
//   method: "GET",
//   headers: {
//     key: "b27d52583c6a40f2aa45da9f3b763430",
//   },
// };
