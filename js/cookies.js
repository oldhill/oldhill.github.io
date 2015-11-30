// https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie


$(document).on('ready', function() {

  if (document.cookie === '') {
    $('body').append('Welcome for the first time!');
    document.cookie = 'something=somethingelse; secure=True; max-age=300';
  } else {
    $('body').append('Welcome back!');
  }

})
