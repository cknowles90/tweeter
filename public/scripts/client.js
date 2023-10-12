/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
*/

$(document).ready(function() {

  // const tweetData =[ 
  //   {
  //   // "user": {
  //   //   "name": "Newton",
  //   //   "avatars": "https://i.imgur.com/73hZDYK.png",
  //   //   "handle": "@SirIsaac"
  //   // },
  //   // "content": {
  //   //   "text": "If I have seen further it is by standing on the shoulders of giants"
  //   // },
  //   // "created_at": 1461116232227
  // }]

  const renderTweets = function(tweets) {
    // reverse the tweets order so NEWEST is on top
    tweets.reverse(); 
    
    // loops through tweets
    for (let tweet of tweets) {

      // calls createTweetElement for each tweet
      createTweetElement(tweet);
      
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
        <textarea name="tweet" class="messageHere" placeholder="${escape(tweetData.content.text)}"></textarea>
        <div class="bottomBar">
          <div class="rightSide">
            <i class="fa-solid fa-retweet" aria-hidden="true"></i>
            <i class="fa-solid fa-flag" aria-hidden="true"></i>
            <i class="fa-solid fa-heart" aria-hidden="true"></i>
          </div>
          <span class="date" name="date-and-icons" type="text">"${timeago.format(tweetData.created_at)}"</span>
        </div>
      </article>      
    `;

    $(".tweets-container").append($tweet);
  }; // End of createTweetElement & renderTweets functions

  const escape = function (str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };


  // jQuery //
  // load the tweets from the server to the client side 
  function loadTweets () { 
    $.ajax({
      type: "GET",
      url: '/tweets',
      dataType: 'json',
      success: function(tweets) {
        console.log('Tweet sent successfully:', tweets);
        renderTweets(tweets);
      },
      error: function(error) {x
        console.error('Tweet could not be sent at this time:', error);
      }
    });
  }

  function showErrorMessage (message) {
    const errorMessage = $('.errorMessage');
    errorMessage.text(message); 
  }

  function hideErrorMessage () {
    const errorMessage = $('.errorMessage');
  }

  // form submission using jQuery
  $(`form`).on('submit', function (event) {
    event.preventDefault();

    hideErrorMessage();

    if (!$("#tweetText").val()) {
      showErrorMessage("Cannot send Empty Tweets...");
    } else if ($("#tweetText").val().length > 140) {
      showErrorMessage("Tweet's too long, no one will read it...");
    } else {

      $.ajax({
        type: "POST",
        url: '/tweets',
        data: $(this).serialize(), 
        success: function() {
          $("#tweetText").val("");
          loadTweets();
        },
        error: function(error) {
          console.error('Tweet could not be sent at this time:', error);
        }
      });
    }
  }); 





  loadTweets();
});

