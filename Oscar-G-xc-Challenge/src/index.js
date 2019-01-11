import _ from 'lodash';
import Header from './Header.jpg';
import Footer from './Footer.jpg';
import ImgMod1 from './Mod1.jpg';
import ImgMod2 from './Mod2.jpg';
import ImgMod3 from './Mod3.jpg';

  var ModOne = document.getElementById("Content-one");
  var ModTwo = document.getElementById("Content-two");
  var ModThree = document.getElementById("Content-three");
  var HeaderDiv = document.getElementById("Header");
  var FooterDiv = document.getElementById("Footer");
  var Mod1Div = document.getElementById("Mod1");
  var Mod2Div = document.getElementById("Mod2");
  var Mod3Div = document.getElementById("Mod3");

  //Change titles to update on page//
  var TitleOne = 'Introduction to Habitat';
  var TitleTwo = 'Modules';
  var TitleThree = 'Getting Started';

  //Change content to update on page//
  var ContentOne = 'Sitecore Habitat is a range of sites demonstrating the capabilities of the Sitecore Experience Platform.</p><p>The solution is built on the Sitecore Helix guidelines, which focuses on increasing productivity and quality in Sitecore projects.';

  var ContentTwo = 'The Habitat example implementation has a range of modules which covers the basics of a Sitecore website.';

  var ContentThree = 'Sitecore Helix a defined methodology with conventions and practises - Habitat is an example implementation available for your understanding.';

  var ButtonText = 'Read More';

  ModOne.innerHTML += '<h3>'+TitleOne+'</h3><p>'+ContentOne+'</p><a href="#" track="" class="btn">'+ButtonText+'</a>';
  
  ModTwo.innerHTML += '<h3>'+TitleTwo+'</h3><p>'+ContentTwo+'</p><a href="#" track="" class="btn">'+ButtonText+'</a>';
  
  ModThree.innerHTML += '<h3>'+TitleThree+'</h3><p>'+ContentThree+'</p><a href="#" track="" class="btn">'+ButtonText+'</a>';

  //Adds Mod Images//
  var Mod1Img = new Image();
  Mod1Img.src = ImgMod1;
  var Mod2Img = new Image();
  Mod2Img.src = ImgMod2;
  var Mod3Img = new Image();
  Mod3Img.src = ImgMod3;

  Mod1Div.appendChild(Mod1Img).className = "sortable";
  Mod2Div.appendChild(Mod2Img).className = "sortable";
  Mod3Div.appendChild(Mod3Img).className = "sortable";

  //Adds header & footer images//
  var HeaderImg = new Image();
  HeaderImg.src = Header;
  var FooterImg = new Image();
  FooterImg.src = Footer;

  HeaderDiv.appendChild(HeaderImg).className = "container-mod header-mod";
  FooterDiv.appendChild(FooterImg).className = "container-mod footer-mod";

 //Sorts Image on drag and drop//
  $( "#ImgContent" ).sortable();$( "#ImgContent" ).disableSelection();

//Moves three mod content under each image while on mobile.
var resizeTimer;
function adjustContent(){
    if($(window).width() <= 576) {
        console.log('window is small now');
        $("#Content-one").detach().appendTo('#Mod1');
        $("#Content-two").detach().appendTo('#Mod2');
        $("#Content-three").detach().appendTo('#Mod3');
        };
    }
    $(document).ready(function(){
        adjustContent();
    });
    
    $( window ).resize(function(e) {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            adjustContent();
    },250);
    });