$(document).ready(function() {

  console.log("DOM has loaded");

  $('#tweetText').on('input', function ()  {

    const inputText = $(this).val().length;
    const charCount = $(this).closest('.tweetForm').find('.counter');
    // console.log($(this).val().length);
    console.log(inputText);

    if (inputText > 140) {
      charCount.text(140 - inputText).addClass('invalid');
    } else {
      charCount.text(140 - inputText).removeClass('invalid');
    }
    
  });
});