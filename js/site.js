// jQuery 3.x-style ready event and locally scoped $
jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
});


//add event listener to submit button
document.getElementById("submit").addEventListener("click", confirmSubmission); 

function confirmSubmission(event){
  alert("Thank you! Your form has been submitted."); 
}

/*
//function for event listener
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
} */