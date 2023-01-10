function validateform() {
  var name = document.myform.fullname.value;
  var password = document.myform.password.value;

  if (fullname == null || fullname == "") {
    alert("Name can't be blank!");
    return false;
  } else if (password.length < 8) {
    alert("Password must be at least 8 characters long.");
    return false;
  }
}
