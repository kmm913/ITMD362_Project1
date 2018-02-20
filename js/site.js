// jQuery 3.x-style ready event and locally scoped $
jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
});

document.getElementById("submit").addEventListener("click", validate); 

function validate(event){
  for(i = 0; i < document.getElementsByTagName('input').length; i++){
    if(document.getElementsByTagName('input').item(i).value == "" ||
        (document.getElementsByTagName('input').item(i).type == "checkbox" && document.getElementsByTagName('input').item(i).checked==false)){
      alert("Please enter your " + document.getElementsByTagName('input').item(i).name);
      event.preventDefault();
      return false;
    }
  }
  alert("Thank you! Your form has been submitted.");
  return true; 
}

/*function validate(){
  var check = document.forms["volunteerForm"][0].value;
  if(check == "") {
    alert("Please enter your first name."); 
    return false;
  }
  else{
    alert("Thank you! Your form has been submitted.");  
    return true;
  }
} */
