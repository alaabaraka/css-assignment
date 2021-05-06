// 
/* 
1. Welcome Message for the User
2. Ask the user whats your book?
3. Keep asking until he only answers with litreture , human resourses , scince .
4. Ask how many heart do you give our website ?
5. show number of hearts based on user input.
*/

alert(' Welcome to my website');

var favouritebook= prompt('what is your favourite book between litreture , human resourses , scince ?');

while (favouritebook !== 'litreture' && favouritebook !== 'human resourses'&& favouritebook !== 'scince') {

  favouritebook = prompt('Please only answer between litreture or human resourses or scince ');
}


if(favouritebook=='litreture'){
  document.write('<img src="https://depositphotos.com/13675192/stock-photo-great-job-post-it-illustration.html" width="80px">');
}else if(favouritebook === 'human resourses'){
  document.write('<img src="https://cdn.eventplanner.net/imgs/xnr9810_how-to-get-people-excited-before-your-event.jpg" width="80px">');
}else if(favouritebook === 'scince'){
  document.write('<img src = "https://www.alamy.com/stock-photo-excelent-sticker-social-media-network-message-badges-design-147643112.html?pv=1&stamp=2&imageid=EA851DDC-5766-4848-962F-70A083887EE7&p=147480&n=0&orientation=0&pn=1&searchtype=0&IsFromSearch=1&srch=foo%3dbar%26st%3d0%26pn%3d1%26ps%3d100%26sortby%3d2%26resultview%3dsortbyPopular%26npgs%3d0%26qt%3dexcelent%2520concept%26qt_raw%3dexcelent%2520concept%26lic%3d3%26mr%3d0%26pr%3d0%26ot%3d0%26creative%3d%26ag%3d0%26hc%3d0%26pc%3d%26blackwhite%3d%26cutout%3d%26tbar%3d1%26et%3d0x000000000000000000000%26vp%3d0%26loc%3d0%26imgt%3d0%26dtfr%3d%26dtto%3d%26size%3d0xFF%26archive%3d1%26groupid%3d%26pseudoid%3d%26a%3d%26cdid%3d%26cdsrt%3d%26name%3d%26qn%3d%26apalib%3d%26apalic%3d%26lightbox%3d%26gname%3d%26gtype%3d%26xstx%3d0%26simid%3d%26saveQry%3d%26editorial%3d1%26nu%3d%26t%3d%26edoptin%3d%26customgeoip%3d%26cap%3d1%26cbstore%3d1%26vd%3d0%26lb%3d%26fi%3d2%26edrf%3d%26ispremium%3d1%26flip%3d0%26pl%3d" width="80px">');}
else{
  document.write('<h3> please only write litreture , human resourses , scince  next time</h3>');
}


var hearts = prompt('How do you rate our Website 1-5?');

if (hearts > 5) {
  hearts = 5;
}
for (var i = 0; i < hearts; i++) {
console.log (i)
  document.write('<img src="https://qtxasset.com/styles/breakpoint_xl_880px_w/s3/fiercebiotech/1607691764/connor-wells-534089-unsplash.jpg/connor-wells-534089-unsplash.jpg?IxnhKzf6LZYze4g.sUsGbEiQZd5tCaJN&itok=gmQPxIfy" width="80px">');
}

