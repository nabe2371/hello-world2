/**************************************************************************************************************************
** Program name: CS2901 Project scrollBox.js file
** Author: Takahiro Watanabe
** Date: 05/22/18
** Description: This is the JavaScript file to create the scroll box and append to the home page of the Project website 
** Source: <Title> HTML Scroll Box
**         <Author> Quackit
**		   <Date of Retrieval> 05/22/18
**         <Availability> https://www.quackit.com/html/codes/html_scroll_box.cfm
***************************************************************************************************************************/

var scrollBox = document.createElement("div");
var scrollTitle = document.createElement("h4");
var titleText = document.createTextNode("Welcome to Our Pets Website!");
scrollTitle.appendChild(titleText);
scrollBox.appendChild(scrollTitle);

var scrollP1 = document.createElement("p");
var scrollP2 = document.createElement("p");
var scrollP3 = document.createElement("p");
var scrollP4 = document.createElement("p");
var scrollP5 = document.createElement("p");
var scrollP6 = document.createElement("p");
var scrollP7 = document.createElement("p");

var text1 = "Hello!";
var text2 = "In this website, we will introduce my family’s 3 pets – 2 dogs and 1 cat – and let you download to see some photos of those animals.";
var text3 = "Please have a look at our pets' pictures below. Once you find your favorite guy, just click your favorite one's name in the navigation bar at the top. Then we will take you to that animal's special page.";
var text4 = "In each pet's page, you can see the description of these guys, which describes their basic bio information and charagers and favorites :) You can also download to see more photos of these guys!";
var text5 = "Finally, each subpage also has a link that you can click and leads to outside webpages. Those outsides webpages explain how to choose and get a dog or cat then train them."; 
var text6 = "So, if you get interested in owning a dog or cat by visiting this website, you can go to those webpages to get to know how to start getting a new pet.";
var text7 = "Have fun and thank you for visiting!"

var scrollText1 = document.createTextNode(text1);
var scrollText2 = document.createTextNode(text2);
var scrollText3 = document.createTextNode(text3);
var scrollText4 = document.createTextNode(text4);
var scrollText5 = document.createTextNode(text5);
var scrollText6 = document.createTextNode(text6);
var scrollText7 = document.createTextNode(text7);

scrollP1.appendChild(scrollText1);
scrollP2.appendChild(scrollText2);
scrollP3.appendChild(scrollText3);
scrollP4.appendChild(scrollText4);
scrollP5.appendChild(scrollText5);
scrollP6.appendChild(scrollText6);
scrollP7.appendChild(scrollText7);

scrollBox.appendChild(scrollP1);
scrollBox.appendChild(scrollP2);
scrollBox.appendChild(scrollP3);
scrollBox.appendChild(scrollP4);
scrollBox.appendChild(scrollP5);
scrollBox.appendChild(scrollP6);
scrollBox.appendChild(scrollP7);


scrollBox.style.height = "100px";
scrollBox.style.width = "50%";
scrollBox.style.border = "1px solid #ccc";
scrollBox.style.background = "lightgrey";
scrollBox.style.font = "solid";
scrollBox.style.overflow = "auto";
scrollBox.style.margin = "auto";
scrollBox.style.marginTop = "50px";
scrollBox.style.marginBottom = "50px";
scrollBox.style.textAlign = "left";
scrollBox.style.verticalAlign = "middle";
scrollBox.style.alignItems = "center";

document.body.appendChild(scrollBox);