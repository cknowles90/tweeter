/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
*/

$(document).ready(function() {

  const tweetData =[ 
    {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  }]

  const renderTweets = function(tweets) {
    // get the tweets container element

    console.log(tweets);
    // loops through tweets

    for (const tweet of tweets) {
      console.log('tweet', tweet)
      // calls createTweetElement for each tweet
      createTweetElement(tweet);
      
      // takes return value and appends it to the tweets container
      // $tweetsContainer.append($tweet);
    }
  };

  const createTweetElement = function (tweetData) {

    const $tweet =  `
      <article class="tweetBox">
        <div class="topBar">
        <div class="leftSide">
          <img class="thumbnailImage" src="${tweetData.user.avatars}">
          <span class="handle" type="text" name="name-tag"><strong>"${tweetData.user.name}"</strong></span>
        </div>
        <article class="tag" type="text">"${tweetData.user.handle}"</article>
        </div>
        <textarea name="tweet" class="messageHere" placeholder="${tweetData.content.text}"></textarea>
        <div class="bottomBar">
          <div class="rightSide">
            <i class="fa-solid fa-retweet" aria-hidden="true"></i>
            <i class="fa-solid fa-flag" aria-hidden="true"></i>
            <i class="fa-solid fa-heart" aria-hidden="true"></i>
          </div>
          <span class="date" name="date-and-icons" type="text">"${tweetData.created_at}"</span>
        </div>
      </article>      
    `;

    $(".tweets-container").append($tweet);
  };


  renderTweets(tweetData);
});

