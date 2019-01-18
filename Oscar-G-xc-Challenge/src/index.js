require('../index.html')
require('./sass/main.scss')
import _ from 'lodash';
import style from './sass/main.scss';
import Header from './Header.jpg';
import Footer from './Footer.jpg';
import ImgMod1 from './Mod1.jpg';
import ImgMod2 from './Mod2.jpg';
import ImgMod3 from './Mod3.jpg';

  const HeaderDiv = document.getElementById("Header");
  const FooterDiv = document.getElementById("Footer");
  const Mod1Cont = document.getElementById("drag1");
  const Mod2Cont = document.getElementById("drag2");
  const Mod3Cont = document.getElementById("drag3");

  //Adds Mod Images//
  Mod1Cont.src = ImgMod1;
  Mod2Cont.src = ImgMod2;
  Mod3Cont.src = ImgMod3;

//Adds header & footer images//
  var HeaderImg = new Image();HeaderImg.src = Header;
  var FooterImg = new Image();FooterImg.src = Footer;

  HeaderDiv.appendChild(HeaderImg);
  FooterDiv.appendChild(FooterImg);