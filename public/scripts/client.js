$(document).ready(function() {

  const renderTweets = function(tweets) {
    // clear exisiting tweets in the container to AVOID DUPLICATES
    $(".tweets-container").empty();
    
    // reverse the tweets order so NEWEST is on top
    // tweets.reverse(); 
    
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
        <div name="tweet" class="messageHere">${escape(tweetData.content.text)}</div>
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

    $(".tweets-container").prepend($tweet);
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
      cache: false,
      success: function(tweets) {
        console.log('Tweet sent successfully:', tweets);
        renderTweets(tweets);
      },
      error: function(error) {x
        console.error('Tweet could not be sent at this time:', error);
      }
    });
  }
  // form submission using jQuery
  $(`form`).on('submit', function (event) {
    event.preventDefault();

    $("#errorMessage").empty();
    $("#errorMessage").hide();
    $(".counter").text(140);

    const tweetText = $("#tweetText").val().trim();

    if (!tweetText) {
      $("#errorMessage").append('<i class="fa-solid fa-triangle-exclamation"></i>  You cannot post an empty tweet').show();
    } else if (tweetText.length > 140) {
      $("#errorMessage").append('Oops, your tweet cannot exceed 140 characters  <i class="fa-solid fa-triangle-exclamation"></i>').show();
    } else {

      $.ajax({
        type: "POST",
        url: '/tweets',
        data: $(this).serialize(), 
        success: function() {
          $(".counter").text(140);
          $("#tweetText").val("");
          loadTweets();
        },
        error: function(error) {
          console.error('Tweet failed to send:', error);
        }
      });
    }
    $("#tweetText").on('input', function() {
      $("#errorMessage").empty().hide();
    })
  }); 

  loadTweets();
});

