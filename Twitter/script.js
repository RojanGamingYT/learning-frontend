const form = document.getElementById("tweet-form");
const input = document.getElementById("tweet-input");
const tweetList = document.getElementById("tweet-list");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const tweet = input.value;
  input.value = "";

  const tweetElement = document.createElement("div");
  tweetElement.innerText = tweet;

  tweetList.appendChild(tweetElement);
});
