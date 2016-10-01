function validateform(){
var passw=  /^[A-Za-z]\w{7,14}$/;
var name=document.myform.name.value;
var pass=document.myform.password.value;
if(name==null || name=""){
alert("Name can't be blank");
return false;
}else if(pass=null || pass==""){
alert("password cannnot be enmpty");
return false;
}
else if(pass.length<6 && !pass.match(passw)){
alert("password cannot be less than 6 chars");
return false;
}
}

