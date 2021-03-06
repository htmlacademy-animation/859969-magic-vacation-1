// modules
import mobileHeight from "./modules/mobile-height-adjust.js";
import slider from "./modules/slider.js";
import menu from "./modules/menu.js";
import intro from "./modules/intro.js";
import footer from "./modules/footer.js";
import chat from "./modules/chat.js";
import result from "./modules/result.js";
import form from "./modules/form.js";
import social from "./modules/social.js";
import FullPageScroll from "./modules/full-page-scroll";
import onload from "./modules/onload";

// init modules
mobileHeight();
slider();
intro();
menu();
footer();
chat();
result();
form();
social();
onload();

const fullPageScroll = new FullPageScroll();
fullPageScroll.init();
