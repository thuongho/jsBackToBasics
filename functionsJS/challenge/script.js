var socialMedia = {
  facebook : 'http://facebook.com/viewsource',
  twitter: 'http://twitter.com/planetoftheweb',
  flickr: 'http://flickr.com/planetotheweb',
  youtube: 'http://youtube.com/planetoftheweb'
};

// function replaceSocialMedia (className, replaceName) {
//   var all = document.getElementsByTagName('*');

//   for (var i = 0; i < all.length; i++) {
//     if (all[i] === className) {

//     }
//   }
// }

var insertSocialImages = function () {
  var sMedia = document.querySelectorAll('.socialmediaicons'),
    output = '<ul>';

  for (key in arguments[0]) {
    output += '<li><a href="' + arguments[0][key] + '"><img src="images/' + key + '.png" alt="icon of ' + key + '" /></a></li>';
  }

  output += '</ul>';

  for (var i = 0; i < sMedia.length; i++) {
    sMedia[i].innerHTML = output;
  }
} (socialMedia);