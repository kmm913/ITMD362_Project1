// jQuery 3.x-style ready event and locally scoped $
jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
});

//event listener to handle submit confirmation
document.getElementById('submit').addEventListener('submit', redirect);

function redirect(event) {
  alert("Thank you! Your form has been submitted.");  
  return true;
}
