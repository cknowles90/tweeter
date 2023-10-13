$(document).ready(function() {

  $('#tweetText').on('input', function ()  {

    const inputText = $(this).val().length;
    const charCount = $(this).siblings(".buttonCount").children(".counter");

    if (inputText > 140) {
      charCount.text(140 - inputText).addClass('invalid');
    } else {
      charCount.text(140 - inputText).removeClass('invalid');
    }
    
  });
});