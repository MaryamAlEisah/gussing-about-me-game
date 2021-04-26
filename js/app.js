"use strict";
let userName=prompt("lets starts with your name");
let authorName;
let authorAge;
let authorBornCity;
let authorUnvirsity;
let authorStatus;
let graduationYear;
if(userName.toLowerCase()=="hasan")
{alert("ohh we have the same name !!")
alert("hello "+ userName +" you going to answer next 5 qusetions with yes or no");
authorAge=prompt("Author age was 25");
  if(authorAge.toLowerCase()=="no")
{
    alert('Correct');
   // console.log("Age answered correct")
}
  else if(authorAge.toLowerCase()=="yes")
{
    alert("Wrong");
   // console.log("Age answered wrong")
}

}
else
{
    alert("hello "+ userName +" you going to answer next 5 qusetions with yes or no");
   authorName=prompt("author name was omar");
   if(authorName.toLowerCase()=="no")
{
    alert(' correct');
   // console.log("Name answered correct")
}
else if (authorName.toLowerCase() =="yes")
{
    alert("wrong");
  //  console.log("Name answered wrong")
}

}
authorBornCity=prompt("author born in syria");
if(authorBornCity.toLowerCase()=="yes")
{
    alert("correct")
   // console.log("City of Born answered correct")
}
else if(authorBornCity.toLowerCase()=="no")
{
    alert("Wrong");
   // console.log("City of Born answered Wrong")
}

authorUnvirsity=prompt("author's unviersity was standford university");
if(authorUnvirsity.toLowerCase()=="yes")
{
    alert("wrong")
  //  console.log("Unvirsity answered wrong")
}
else if(authorUnvirsity.toLowerCase()=="no")
{
    alert("correct");
  //  console.log("Unvirsity answered correct")
}

authorStatus=prompt("author is married ");
if(authorStatus.toLowerCase()=="yes")
{
    alert("wrong")
    //console.log("Social status answered wrong")
}
else if(authorStatus.toLowerCase()=="no")
{
    alert("correct");
   // console.log("Social status answered correct")
}

graduationYear=prompt("author graduate in 2015 ");
if(graduationYear.toLowerCase()=="yes")
{
    alert("wrong")
   // console.log("Graduation year answered wrong")
}
else if(graduationYear.toLowerCase()=="no")
{
    alert("correct");
   // console.log("Graduation year answered correct")
}

alert("good job "+userName+" hope we can see you in another game bye!!")




