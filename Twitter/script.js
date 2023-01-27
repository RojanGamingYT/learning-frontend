const tweetButton = document.querySelector('#tweet-button');
const tweetInput = document.querySelector('#tweet-input');
const tweetContainer = document.querySelector('#tweet-container');

tweetButton.addEventListener('click', function() {
  if(tweetInput.value){
  const newTweet = document.createElement('div');
  newTweet.classList.add('tweet');
  newTweet.innerHTML = tweetInput.value;
  tweetContainer.appendChild(newTweet);
  tweetInput.value = '';
  }
});
