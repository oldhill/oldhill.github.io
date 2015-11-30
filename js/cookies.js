// https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie

console.log('Any cookies yet? ' + document.cookie);

console.log('Setting a cookie...');

document.cookie = 'something=somethingelse';

console.log('OK set one: ' + document.cookie);
