"use strict";
let top10=['godfather','Casino','GoodFellas','django unchained','inception','Irish men',
'the men from uncle','man of steel','dark night rises','shawshank redemption'];
 let i=0;
document.write("<ol>");
 while(i < top10.length)
 {
     document.write("<li>"+top10[i]+"</li>");
     i++;
     console.log(i);
 }
 document.write("</li>");

 let s=0;
 let certificate=['bachelor degree in Internet Technology (zarqa university)','Full stack developer (ASAC)'
,'still free lanced work'];
while( s<certificate.length)
{
 var x = document.createElement("LI");
  var t = document.createTextNode(certificate[s]);
  x.appendChild(t);
  document.getElementById("work-ul").appendChild(x);
  s++;
}
  
 
// for(var i=0 ; i<10 ; i++)
// {
//     document.write("sssss")
// }

//document.getElementById("work-ul").innerHTML=document.write("sssss");
 
 