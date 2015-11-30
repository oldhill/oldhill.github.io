// https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie


$(document).on('ready', function() {

  allCookies = document.cookie;

  if (allCookies === '') {
    $('hi').append('Welcome for the first time!');
    document.cookie = 'something=somethingelse';
  } else {
    $('hi').append('Welcome back!');
  }

})
