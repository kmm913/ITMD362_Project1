// jQuery 3.x-style ready event and locally scoped $
jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
});

function validate(){
  var check = document.forms["volunteerForm"]["first_name"].value;
  if(check == "") {
    alert("Please enter your first name."); 
    return false;
  }
  else{
    alert("Thank you! Your form has been submitted.");  
    return true;
  }
}
