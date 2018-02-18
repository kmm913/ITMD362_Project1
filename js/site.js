// jQuery 3.x-style ready event and locally scoped $
jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
});

document.getElementById('submit').addEventListener('submit', redirect);

function redirect(event) {
  alert("Thank you! Your form has been submitted.");  
  return true;
}
