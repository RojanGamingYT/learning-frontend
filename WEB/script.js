const tweetButton = document.querySelector('#tweet-button');
const tweetInput = document.querySelector('#tweet-input');
const tweetContainer = document.querySelector('#tweet-container');
const newTweet = document.createElement('div');
const likeButton = document.createElement('button');
const retweetButton = document.createElement('button');


likeButton.classList.add('like-button');
likeButton.innerHTML = 'Like';
retweetButton.classList.add('retweet-button');
retweetButton.innerHTML = 'Retweet';

newTweet.appendChild(likeButton);
newTweet.appendChild(retweetButton);


tweetButton.addEventListener('click', function() {
  if(tweetInput.value){
  const newTweet = document.createElement('div');
  newTweet.classList.add('tweet');
  newTweet.innerHTML = tweetInput.value;
  tweetContainer.appendChild(newTweet);
  tweetInput.value = '';
  }
});

