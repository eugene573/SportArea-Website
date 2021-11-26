function validateForm()
{
  var x = document.forms["ContactUs"]["name"].value;
  if (x == "")
  {
    alert ("Name must be filled out.");
    return false;
  }
  var x = document.forms["ContactUs"]["email"].value;
  if (x == "")
  {                       
   alert ("Email must be filled out.");
   return false;
  }
  var x = document.forms["ContactUs"]["message"].value;
  if (x =="")
  {
      alert ("Message must be filled out.");
      return false;
  }
     alert ("Thank you! We have received your message. We will reply to your message as soon as possible.");
     return true;
}

$('.carousel').carousel({
  interval: 900,
})