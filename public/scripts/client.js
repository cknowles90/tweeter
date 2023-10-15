$(document).ready(function() {

// function to render the tweets in the feed
  const renderTweets = function(tweets) {
    // clear exisiting tweets in the container to avoid DUPLICATEs printing
    $(".tweets-container").empty();   
    // loops through tweets and calls createTweetElement for each tweet
    for (let tweet of tweets) {
      // calls createTweetElement for each tweet
      createTweetElement(tweet);
    }
  };

  // function to create the HTML elements for a single tweet
  const createTweetElement = function (tweetData) {
    // using tweetData; the HTML for the tweet is constructed here
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
    // prepend the tweet to the tweets-container so the newest tweet appears at the top
    $(".tweets-container").prepend($tweet);
  }; 

  // function to 'escape' HTML characters to avoid XSS
  const escape = function (str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  // function to loadTweets from the server to the client side   // jQuery //
  function loadTweets () { 
    $.ajax({
      type: "GET",
      url: '/tweets',
      dataType: 'json',
      cache: false, // disables caching, ensuring the request is made to the server - doesn't rely on a cached response
      success: function(tweets) {
        console.log('Tweet sent successfully:', tweets);
        renderTweets(tweets); // renderTweet function is called, passing the tweets data to be displayed to the user
      },
      error: function(error) {
        // displays an error message to console explaining that the request failed
        console.error('Tweet could not be sent at this time:', error);
      }
    });
  }

  // form submission function    // jQuery //
  $(`form`).on('submit', function (event) {
    // prevents the default behaviour of form submission - page reloading - allows the use of AJAX instead
    event.preventDefault();

    $("#errorMessage").empty(); // clears the errorMessage container until a new error is received
    $("#errorMessage").hide(); // hides the errorMessage container until a new error is received
    $(".counter").text(140); // resets the counter to 140 after a tweet is submitted

    const tweetText = $("#tweetText").val().trim(); 
    // retrieves the value of #tweetText and removes and trailing/leading white spaces to avoid empty 'space only' tweets from being sent like below

    if (!tweetText) {
      // prevent empty tweets from being submitted - displays an error message explaining the errorType
      $("#errorMessage").append('<i class="fa-solid fa-triangle-exclamation"></i>  You cannot post an empty tweet').show();
    } else if (tweetText.length > 140) {
      // prevent tweets exceeding the allowable character limit from being submitted - displays an error message explaining the errorType
      $("#errorMessage").append('Oops, your tweet cannot exceed 140 characters  <i class="fa-solid fa-triangle-exclamation"></i>').show();
    } else {
      // if successful - submit the tweet to the server
      $.ajax({
        type: "POST",
        url: '/tweets',
        data: $(this).serialize(), 
        success: function() {
          $(".counter").text(140); // after the tweet is submitted - reset the counter to 140
          $("#tweetText").val(""); // after the tweet is submitted - clear the text from the form
          loadTweets(); // after the tweet is submitted - load the tweets again, displaying the new one
        },
        error: function(error) {
          // if unsuccessful - displays an error message explaining the errorType
          console.error('Tweet failed to send:', error);
        }
      });
    }

    // function to hide the displayed errorMessage when user starts to type
    $("#tweetText").on('input', function() {
      $("#errorMessage").empty().hide();
    })
  }); 

  loadTweets(); // load the tweets when the page is first/initially loaded
});

