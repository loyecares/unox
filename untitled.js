



  //testimony courasel

  // let slideIndex = 1;
  // showSlides(slideIndex);

  // function plusSlides(n) {
  //   showSlides(slideIndex += n);
  // }

  // function currentSlide(n) {
  //   showSlides(slideIndex = n);
  // }

  // function showSlides(n) {
  //   let i;
  //   let slides = document.getElementsByClassName("mySlides");

  //   if (n > slides.length) { slideIndex = 1 }
  //   if (n < 1) { slideIndex = slides.length }
  //   for (i = 0; i < slides.length; i++) {
  //     slides[i].style.display = "none";
  //   }

  //   slides[slideIndex - 1].style.display = "block";
  //   dots[slideIndex - 1].className += " active";
  // }


join
p   img


padding: 50px 25px;
// gsap
gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".smooth-scroll"),
  smooth: true,
  lerp: 0.08
})

locoScroll.on("scroll", ScrollTrigger.update);
ScrollTrigger.scrollerProxy(".smooth-scroll", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  },
  pinType: document.querySelector(".smooth-scroll").style.transform ? "transform" : "fixed"
});
const vw = coef => window.innerWidth * (coef / 100);
const vh = coef => window.innerHeight * (coef / 100);

const heroScroller = gsap.timeline({
  paused: true,
  scrollTrigger: {
    trigger: ".hero-header.h-1",
    scroller: ".smooth-scroll",
    pin: ".pin-wrapper",
    start: "top 10%",
    end: `${vh(100)}`
  }
});
heroScroller.to(".hero-header.h-1", {
  scale: 2,
  y: vh(50),
  xPercent: 150
}, ".heroScroller")
// .to('hero-header.h-2', {
//   scale: 2,
//   y: vh(150),
//   xPercent: 150
// }, "heroScroll")

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();



  // trash

< !--onclick="plusSlides(1)" -- >
// if(sliderIndex === 0) sliderIndex = slideArray.length;
// sliderIndex



if (counter === (slideArray.length - 1)) sliderIndex = 0;
if (counter < (slideArray.length - 1)) sliderIndex++;
if (counter === 0(slideArray.length - 1)) sliderIndex;

onclick = "plusSlides(-1)"


y: 50,
  duration: 2,
    stagger: { // wrap advanced options in an object
  each: 0.1,
    from: "top",
      ease: "power2.inOut",
        repeat: -1 // Repeats immediately, not waiting for the other staggered animations to finish
}




@charset "UTF-8";
@import url("https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;1,700&display=swap");

* {
  margin: 0px;
  padding: 0px;
  box- sizing: border - box;
font - family: "Plus Jakarta Sans", sans - serif;
box - sizing: border - box;
}

body {
  overflow - x: hidden;
}

a {
  text - decoration: none;
}

.hero {
  padding: 15px 120px 0px 120px;
  background - color: #EEF0F1;
  width: 100 %;
  height: 100vh;
  overflow: hidden;
}

.hero - wrapper {
  position: relative;
}

nav {
  box - sizing: border - box;
  /* Auto layout */
  display: flex;
  flex - direction: row;
  align - items: center;
  padding: 10px 10px 10px 59px;
  height: 70px;
  background: rgba(255, 255, 255, 0.8);
  border: 0.5px solid #EEF0F1;
  -webkit - backdrop - filter: blur(10px);
  backdrop - filter: blur(10px);
  border - radius: 66px;
}

nav.logo img {
  height: 24px;
}

.links {
  margin - left: 40px;
}

.links ul li {
  list - style - type: none;
  display: inline;
  margin - left: 20px;
}

.links ul li a {
  text - decoration: none;
  font - family: "Plus Jakarta Sans";
  font - style: normal;
  font - weight: 400;
  font - size: 16px;
  color: #020007;
}

.card - button {
  position: absolute;
  right: 10px;
  top: 5px;
  padding: 20px 26px;
  width: 154px;
  color: #FAFAFA;
  height: 57px;
  background: #020007;
  border - radius: 44px;
  text - align: center;
}

.card - button a {
  color: #FAFAFA;
}

.hero - context {
  margin: auto;
  margin - top: 9 %;
  width: 55 %;
}

.text h1 {
  font - family: "Plus Jakarta Sans";
  font - style: normal;
  font - weight: 700;
  font - size: 60px;
  text - align: center;
  letter - spacing: -0.01em;
  color: #020007;
  line - height: 70px;
}

.text p {
  width: 65 %;
  font - family: "Plus Jakarta Sans";
  font - style: normal;
  margin: auto;
  font - weight: 400;
  font - size: 14px;
  text - align: center;
  color: rgba(2, 0, 7, 0.7);
  margin - top: 25px;
  margin - bottom: 30px;
}

.email - list {
  position: relative;
  width: 416px;
  height: 60px;
  margin: auto;
  margin - bottom: 40px;
}

.email - list input {
  position: relative;
  width: 416px;
  height: 60px;
  padding: 15px 30px;
  background: #FFFFFF;
  border: 1px solid rgba(39, 38, 37, 0.05);
  border - radius: 53px;
}

.email - list button {
  position: absolute;
  padding: 11px 16px;
  width: 134px;
  height: 50px;
  color: #EEF0F1;
  background: #020007;
  border - radius: 44px;
  top: 5px;
  right: 5px;
  box - sizing: border - box;
}

.hero - phone {
  width: 50 %;
  margin: auto;
  overflow - y: hidden;
  height: 21vh;
}

.hero - phone img {
  display: block;
  width: 90 %;
  margin: auto;
}

.hero - img - left - 1 {
  position: absolute;
  top: 23 %;
  left: -120px;
}

.hero - img - left - 1 img {
  width: 100 %;
  height: 200px;
}

.hero - img - left - 2 {
  position: absolute;
  left: -120px;
  top: 65 %;
}

.hero - img - left - 2 img {
  width: 80 %;
  height: 220px;
}

.hero - img - right - 1 {
  position: absolute;
  right: -115px;
  top: 20 %;
}

.hero - img - right - 1 img {
  width: 100 %;
  height: 230px;
}

.hero - img - right - 2 {
  position: absolute;
  right: -165px;
  top: 50 %;
}

.hero - img - right - 2 img {
  width: 80 %;
  height: 310px;
}

/* engagement section*/
.engagement - section {
  background - color: #E4E2E9;
  padding: 8 % 16 %;
}

.es - text {
  width: 80 %;
  margin: auto;
}

.es - text h1 {
  font - family: "Plus Jakarta Sans";
  font - style: normal;
  font - weight: 600;
  font - size: 30px;
  text - align: center;
  letter - spacing: -0.015em;
  color: #010007;
}

.tt - card - wrapper {
  display: flex;
  justify - content: center;
  flex - direction: row;
  flex - wrap: wrap;
  gap: 30px;
  margin - top: 70px;
}

.tc - img img {
  width: 50 %;
  margin - bottom: 35px;
  transition: transform 1s;
}

.tap - card {
  width: 400px;
  height: 469px;
  background: #7F4AF0;
  border - radius: 20px;
  padding: 60px 40px;
}

.tap - card:hover img {
  transform: scale(1.1);
}

.tap - card: hover.tc - link a {
  color: black;
  background - color: #fff;
  color: black;
  display: inline - block;
  padding: 2px 12px 5px 12px;
  border - radius: 28px;
}

.tc - heading h6 {
  font - family: "Plus Jakarta Sans";
  font - style: normal;
  font - weight: 800;
  font - size: 20px;
  letter - spacing: -0.015em;
  color: #FFFFFF;
}

.tc - text p {
  margin - top: 20px;
  font - family: "Plus Jakarta Sans";
  font - style: normal;
  font - size: 14px;
  letter - spacing: -0.015em;
  color: #FFFFFF;
  margin - bottom: 20px;
}

.tc - link a {
  font - family: "SF Pro Display";
  text - decoration: none;
  font - style: normal;
  font - weight: 400;
  font - size: 14px;
  color: #FFFFFF;
  transition: 1s;
  display: inline - block;
}

.tc - link a span {
  letter - spacing: -3px;
}

.track - card {
  width: 400px;
  height: 469px;
  background: #405477;
  border - radius: 20px;
  padding: 60px 40px;
  position: relative;
  overflow: hidden;
  transition: transform 1s;
}

.track - card:hover img {
  transform: scale(1.1);
}

.track - card: hover.tc - link a {
  color: black;
  background - color: #fff;
  color: black;
  display: inline - block;
  padding: 2px 12px 5px 12px;
  border - radius: 28px;
}

/*.card-hover:hover {
  -ms-transform: scale(1.1); 
  -webkit-transform: scale(1.1); 
  transform: scale(1.1); 
}*/
.track - img {
  overflow: hidden;
}

.track - img img {
  width: 70 %;
  height: 80 %;
  position: absolute;
  top: 120px;
  transition: transform 1s;
  right: -10px;
  overflow: hidden;
}

.admin - card {
  width: 830px;
  margin: auto;
  margin - top: 20px;
  padding - left: 35px;
  height: 369px;
  display: flex;
  flex - direction: row;
  flex - wrap: wrap;
  background: #EFF0F9;
  border - radius: 20px;
}

.admin - pretext p {
  font - family: "Plus Jakarta Sans";
  font - style: normal;
  font - weight: 500;
  font - size: 12px;
  line - height: 30px;
  letter - spacing: 0.615em;
  text - transform: uppercase;
  color: #020007;
  margin - top: 80px;
}

.admin - content {
  width: 50 %;
}

.admin - heading h3 {
  font - family: "Plus Jakarta Sans";
  font - style: normal;
  font - weight: 800;
  font - size: 22px;
  width: 80 %;
  letter - spacing: -0.015em;
  color: #020007;
}

.admin - text p {
  margin - top: 20px;
  margin - bottom: 25px;
  font - family: "Plus Jakarta Sans";
  font - style: normal;
  font - weight: 500;
  font - size: 16px;
  letter - spacing: -0.015em;
  color: #020007;
}

.admin - img {
  width: 50 %;
  height: inherit;
}

.admin - img img {
  -o - object - fit: contain;
  object - fit: contain;
  height: inherit;
}

.join - section {
  padding: 130px 0px;
  background - color: #f5f5f7;
}

.join - heading {
  text - align: center;
  width: 50 %;
  margin: auto;
  margin - bottom: 70px;
}

.join - heading h3 {
  font - family: "Plus Jakarta Sans";
  font - style: normal;
  font - weight: 800;
  font - size: 30px;
  text - align: center;
  letter - spacing: -0.015em;
}

.join - heading h3 span {
  color: #7F4AF0;
}

.join - photos {
  width: 100 %;
  display: flex;
  flex - direction: row;
  gap: 20px;
  overflow - x: auto;
}

.join {
  width: 25 %;
  height: 260px;
}

.join - 1 {
  /*margin-left: -80px;*/
}

.join - 1 img {
  border - radius: 21px;
}

.join - 2 img {
  border - radius: 21px;
}

.join - 3 img {
  border - radius: 65px;
}

.join - 4 img {
  border - radius: 22px;
}

.join - 5 img {
  border - radius: 41 %;
}

.join - 6 img {
  border - radius: 40px;
}

.join - 6 {
  margin - right: -120px;
}

.join img {
  width: 100 %;
  height: inherit;
  -o - object - fit: cover;
  object - fit: cover;
  -o - object - position: top;
  object - position: top;
}

.get - unox {
  padding: 100px 200px;
  background - color: black;
}

.unox - content {
  display: flex;
  gap: 20px;
}

.unox - left {
  width: 50 %;
}

.ul - heading h1 {
  font - family: "Plus Jakarta Sans";
  font - style: normal;
  font - weight: 700;
  font - size: 100px;
  line - height: 110px;
  letter - spacing: -0.015em;
  color: #FFFFFF;
}

.ul - heading h1 span {
  opacity: 0.6;
}

.unox - right {
  width: 50 %;
}

.unox - right img {
  width: 80 %;
  height: 90 %;
  -o - object - fit: contain;
  object - fit: contain;
}

.unox - content - 2 {
  display: flex;
  gap: 20px;
  align - items: flex - end;
}

.uc - content {
  width: 50 %;
  margin - top: -70px;
}

.uc - content a {
  padding: 10px 20px;
  display: inline - block;
  border: 1.32px solid #FFFFFF;
  border - radius: 98px;
  color: #fff;
}

.uc - content h6 {
  font - family: "Plus Jakarta Sans";
  font - style: normal;
  font - weight: 600;
  font - size: 30px;
  letter - spacing: -0.015em;
  color: #7F4AF0;
  margin - top: 20px;
}

.uc - content p {
  font - family: "Plus Jakarta Sans";
  font - style: normal;
  font - weight: 400;
  font - size: 22px;
  letter - spacing: -0.015em;
  margin - top: 10px;
  color: #FFFFFF;
}

.uc - 2 - button a {
  padding: 15px 30px;
  color: black;
  background: #FFFFFF;
  border - radius: 44px;
  display: inline - block;
  margin - left: 120px;
}

.testimony - section {
  background - color: #f5f5f7;
  padding: 120px 50px;
  position: relative;
}

.testimony - wrapper {
  display: flex;
  gap: 45px;
  width: 60 %;
  margin: auto;
  align - items: center;
}

.mySlides {
  display: none;
}

/* Fading animation */
.fade {
  animation - name: fade;
  animation - duration: 2s;
}

@keyframes fade {
  from {
    opacity: 0.2;
  }

  to {
    opacity: 1;
  }
}

.ts - img {
  width: 35 %;
}

.ts - img img {
  width: 280px;
  height: 300px;
  -o - object - fit: cover;
  object - fit: cover;
  border - radius: 40px;
}

.ts - text {
  width: 50 %;
}

.ts - text h3 {
  font - family: "Plus Jakarta Sans";
  font - style: normal;
  font - weight: 800;
  font - size: 32px;
  letter - spacing: -0.015em;
  margin - bottom: 20px;
}

.ts - text p {
  font - family: "Plus Jakarta Sans";
  font - style: normal;
  font - weight: 550;
  font - size: 15px;
  letter - spacing: -0.005em;
  color: #815CF3;
}

.ts - arrow - 1 img {
  position: absolute;
  left: 10 %;
  top: 46 %;
  width: 40px;
}

.ts - arrow - 2 img {
  position: absolute;
  right: 15 %;
  top: 46 %;
  width: 40px;
}

.recycle - section {
  background - color: #f3f0f5;
  padding: 120px 50px;
}

.rs - heading h3 {
  text - align: center;
  font - family: "Plus Jakarta Sans";
  font - style: normal;
  width: 50 %;
  margin: auto;
  margin - bottom: 30px;
  font - weight: 1000;
  font - size: 30px;
  text - align: center;
  letter - spacing: -0.015em;
  color: #491860;
}

.rs - card {
  display: flex;
  gap: 45px;
  width: 60 %;
  height: 350px;
  margin: auto;
  align - items: flex - end;
  padding: 20px;
  background: #491860;
  position: relative;
  border - radius: 40px;
  color: #fff;
  overflow: hidden;
}

.rs - text {
  width: 50 %;
}

.rs - text h6 {
  font - family: "Plus Jakarta Sans";
  font - style: normal;
  font - weight: 550;
  font - size: 20px;
  letter - spacing: -0.015em;
  color: #FFFFFF;
  margin - bottom: 20px;
}

.rs - text p {
  font - family: "Plus Jakarta Sans";
  font - style: normal;
  font - size: 14px;
  letter - spacing: -0.025em;
  color: #FFFFFF;
}

.rs - text a {
  display: inline - block;
  margin - top: 50px;
  color: white;
  margin - bottom: 25px;
}

.rs - img img {
  position: absolute;
  bottom: 0px;
  right: 40px;
  width: 33 %;
}

footer {
  padding: 90px 100px;
  background: #020007;
}

.footer - heading h3 {
  width: 700px;
  margin: auto;
  font - family: "Plus Jakarta Sans";
  font - style: normal;
  font - weight: 700;
  font - size: 70px;
  text - align: center;
  letter - spacing: -0.04em;
  background: linear - gradient(95.67deg, #F4D8D9 4.51 %, #FC979D 38.77 %, #B4B9F3 92.22 %), linear - gradient(94.41deg, #4A3C2D 4.32 %, #272625 54.61 %, #443524 96.08 %);
  -webkit - background - clip: text;
  -webkit - text - fill - color: transparent;
  background - clip: text;
  text - fill - color: transparent;
}

.footer - card {
  width: 90 %;
  height: 443px;
  margin: auto;
  border - radius: 40px;
  padding: 40px 60px;
  background: rgba(255, 255, 255, 0.07);
}

.fc - links - wrapper {
  display: flex;
  justify - content: space - between;
}

.fc - link h6 {
  font - family: "Plus Jakarta Sans";
  font - style: normal;
  font - weight: 700;
  font - size: 18px;
  line - height: 80px;
  color: #FFFFFF;
}

.fc - link a {
  font - family: "Plus Jakarta Sans";
  font - style: normal;
  font - weight: 400;
  font - size: 14px;
  display: block;
  text - decoration: none;
  color: rgba(255, 255, 255, 0.7);
  line - height: 40px;
  cursor: pointer;
}

.fc - logos {
  display: flex;
  justify - content: space - between;
  align - items: center;
  margin - top: 50px;
}

.fc - logo img {
  width: 80 %;
}

.fc - social {
  display: flex;
  justify - content: space - between;
}

.fc - social img {
  width: 25 %;
}

/*FAQ*/
.accordion {
  background - color: white;
  color: #000;
  cursor: pointer;
  padding: 18px 25px;
  width: 100 %;
  border: none;
  text - align: left;
  outline: none;
  font - size: 15px;
  transition: 0.4s;
  border - radius: 20px;
}

.active, .accordion:hover {
  background - color: #fff;
}

.faq - panel button.accordion {
  display: flex;
  justify - content: space - between;
  align - items: center;
}

.faq - panel {
  background: #fff;
  border - radius: 50px;
}

.faq - panel.panel p {
  padding - bottom: 40px;
}

.accordion:after {
  content: "🢓";
  color: #000;
  font - weight: bold;
  float: right;
  margin - left: 5px;
  display: none;
}

.active:after {
  content: "🢑";
}

.panel {
  padding: 0px 25px;
  background - color: white;
  max - height: 0;
  overflow: hidden;
  transition: max - height 0.2s ease - out;
  margin - bottom: 20px;
  border - radius: 20px;
}

.faq - section {
  padding: 130px 50px;
  background - color: #f5f5f7;
}

.faq - section h3 {
  text - align: center;
  font - family: "Plus Jakarta Sans";
  font - style: normal;
  font - weight: 800;
  font - size: 30px;
  margin - bottom: 40px;
  text - align: center;
  letter - spacing: -0.015em;
}

.faq - wrap {
  width: 60 %;
  margin: auto;
}

/*team page css*/
.team - hero {
  padding: 15px 120px 0px 120px;
  background - color: #EEF0F1;
  width: 100 %;
  height: 140vh;
  overflow - y: hidden;
}

.team - context {
  margin - top: 6 %;
}

.team - text {
  width: 80 %;
}

.team - text h1 {
  font - family: "Plus Jakarta Sans";
  font - style: normal;
  font - weight: 700;
  font - size: 70px;
  letter - spacing: -0.01em;
  color: #020007;
  line - height: 70px;
}

.team - text p {
  width: 70 %;
  font - family: "Plus Jakarta Sans";
  font - style: normal;
  font - weight: 450;
  line - height: 20px;
  font - size: 15px;
  color: #020007;
  margin - top: 30px;
  margin - bottom: 10px;
}

.team - images {
  display: flex;
}

.team - images.ti - content {
  width: 50 %;
  padding - top: 40px;
}

.team - images.ti - content.ti - text {
  margin - top: 125px;
}

.team - images.ti - content.ti - text h3 {
  font - family: "Plus Jakarta Sans";
  font - style: normal;
  font - weight: 600;
  font - size: 40px;
  letter - spacing: -0.015em;
  color: #2F293D;
  width: 70 %;
  margin - bottom: 30px;
}

.team - images.ti - image {
  width: 50 %;
  position: relative;
}

.team - images.ti - image.unox - card {
  width: 70 %;
  position: absolute;
  top: 0px;
  right: 0px;
}

.team - images.ti - image.unox - phone {
  position: absolute;
  width: 50 %;
  top: 120px;
  right: 50px;
}

.team - email - list {
  position: relative;
  width: 516px;
  height: 60px;
  margin - bottom: 40px;
}

.team - email - list input {
  position: relative;
  width: 516px;
  height: 60px;
  padding: 15px 30px;
  background: #FFFFFF;
  border: 1px solid rgba(39, 38, 37, 0.05);
  border - radius: 53px;
}

.team - email - list button {
  position: absolute;
  padding: 11px 16px;
  width: 200px;
  height: 50px;
  color: #EEF0F1;
  background: #020007;
  border - radius: 44px;
  top: 5px;
  right: 5px;
  box - sizing: border - box;
}

.team - monitor - wrap {
  padding: 140px 120px 70px 120px;
  background: #E4E2E9;
  width: 100 %;
  overflow - y: hidden;
}

.team - monitor - wrap h3 {
  font - family: "Plus Jakarta Sans";
  font - style: normal;
  font - weight: 600;
  font - size: 40px;
  letter - spacing: -0.015em;
  color: #020007;
  width: 80 %;
  margin - bottom: 30px;
  padding - left: 30px;
}

.team - monitor - wrap.team - monitor {
  width: 100 %;
  height: 550px;
  background: #2F293D;
  border - radius: 40px;
  padding: 90px 120px 0px 120px;
}

.team - monitor - wrap.team - monitor img {
  width: 100 %;
}

.team - monitor - wrap.tm - highlights {
  display: flex;
  justify - content: space - between;
  padding: 0px 20px;
  margin - top: 50px;
}

.team - monitor - wrap.tm - highlights.tm - highlight {
  display: flex;
  gap: 20px;
}

.team - monitor - wrap.tm - highlights.tm - highlight.tmh - box {
  width: 60px;
  height: 50px;
  background: #F5F5F7;
  border - radius: 10px;
}

.team - monitor - wrap.tm - highlights.tm - highlight.tmh - text h6 {
  font - family: "Plus Jakarta Sans";
  font - style: normal;
  font - weight: 700;
  font - size: 22px;
  letter - spacing: -0.015em;
  color: #2C293D;
  margin - bottom: 10px;
}

.team - monitor - wrap.tm - highlights.tm - highlight.tmh - text p {
  font - family: "Plus Jakarta Sans";
  font - style: normal;
  font - size: 16px;
  letter - spacing: -0.015em;
  color: #2C293D;
}

/*pricing page*/
.pricing - hero - context {
  padding: 0px 100px 50px 100px;
  display: flex;
}

.pricing - hero - context.phc - text {
  width: 50 %;
  padding - top: 20px;
}

.pricing - hero - context.phc - text h3 {
  font - family: "Plus Jakarta Sans";
  font - style: normal;
  font - weight: 700;
  font - size: 50px;
  letter - spacing: -0.04em;
  color: #010007;
  padding - top: 100px;
}

.pricing - hero - context.phc - image {
  width: 50 %;
}

.pricing - hero - context.phc - image img {
  width: 100 %;
}

.price - card - section {
  padding: 50px 220px;
}

.price - card - section.pcs - wrap {
  display: flex;
  justify - content: space - between;
  margin - bottom: 30px;
}

.price - card - section.pcs - wrap.pcs {
  width: 30 %;
  padding: 20px 30px;
  background: #E2E2E9;
  border - radius: 28px;
  position: relative;
}

.price - card - section.pcs - wrap.pcs h6 {
  font - family: "Plus Jakarta Sans";
  font - style: normal;
  font - weight: 700;
  font - size: 19px;
  letter - spacing: -0.015em;
  color: #2C293D;
}

.price - card - section.pcs - wrap.pcs.psc - button {
  margin - top: 20px;
  display: inline - block;
  padding: 7px 15px;
  background: #7F4AF0;
  border - radius: 39px;
  cursor: pointer;
  color: #FFFFFF;
}

.price - card - section.pcs - wrap.pcs - 1 {
  font - family: "Plus Jakarta Sans";
  font - style: normal;
  font - weight: 700;
  font - size: 40px;
  letter - spacing: -0.015em;
  color: #020007;
}

.price - card - section.pcs - wrap.pcs - 2 {
  height: 130px;
}

.price - card - section.pcs - wrap.pcs - 3 {
  height: 130px;
}

.price - card - section.pcs - wrap.psc - card - 1 {
  height: 300px;
}

.price - card - section.pcs - wrap.psc - card - 1 h5 {
  font - family: "Plus Jakarta Sans";
  font - style: normal;
  font - weight: 600;
  font - size: 22px;
  letter - spacing: -0.015em;
  color: #2C293D;
}

.price - card - section.pcs - wrap.psc - card - 1 h6 {
  font - family: "Plus Jakarta Sans";
  font - style: normal;
  font - weight: 700;
  font - size: 15px;
  letter - spacing: -0.015em;
  color: #2C293D;
  margin - top: 30px;
}

.price - card - section.pcs - wrap.psc - card - 1 p {
  font - family: "Plus Jakarta Sans";
  font - style: normal;
  font - size: 12px;
  letter - spacing: -0.015em;
  color: #2C293D;
  margin - top: 10px;
  width: 90 %;
}

.price - card - section.pcs - wrap.psc - card - 2 {
  height: 300px;
}

.price - card - section.pcs - wrap.psc - card - 3 {
  height: 300px;
}

.price - card - section.pcs - wrap.psc - card - 4 {
  height: 460px;
}

.price - card - section.pcs - wrap.psc - card - 4 h5 {
  font - family: "Plus Jakarta Sans";
  font - style: normal;
  font - weight: 600;
  font - size: 22px;
  letter - spacing: -0.015em;
  color: #2C293D;
}

.price - card - section.pcs - wrap.psc - card - 4 h6 {
  font - family: "Plus Jakarta Sans";
  font - style: normal;
  font - weight: 700;
  font - size: 15px;
  letter - spacing: -0.015em;
  color: #2C293D;
  margin - top: 30px;
}

.price - card - section.pcs - wrap.psc - card - 4 p {
  font - family: "Plus Jakarta Sans";
  font - style: normal;
  font - size: 12px;
  letter - spacing: -0.015em;
  color: #2C293D;
  margin - top: 10px;
  width: 90 %;
}

.price - card - section.pcs - wrap.psc - card - 5 {
  height: 460px;
}

.price - card - section.pcs - wrap.psc - card - 6 {
  height: 460px;
}

.price - card - section.pcs - wrap.amt - mark - 1 {
  position: absolute;
  top: 200px;
  left: 47 %;
}

.price - card - section.pcs - wrap.amt - mark - 2 {
  position: absolute;
  top: 300px;
  left: 47 %;
}

.price - card - section.pcs - wrap.amt - text - wrap {
  position: absolute;
  top: 200px;
  left: 28 %;
}

.price - card - section.pcs - wrap.amt - text - wrap.amt - text {
  text - align: center;
  font - family: "Plus Jakarta Sans";
  font - style: normal;
  font - weight: 600;
  font - size: 30px;
  letter - spacing: -0.015em;
  color: #2C293D;
}

.price - card - section.pcs - wrap.amt - 3 {
  position: absolute;
  top: 380px;
  left: 42 %;
}

.price - card - section.pcs - wrap.amt - 4 {
  position: absolute;
  top: 380px;
  left: 42 %;
}

.price - card - section.pcs - wrap.psc - line {
  width: 127 %;
  border - bottom: 1px solid rgba(44, 41, 61, 0.1);
  margin - left: -13 %;
  padding - top: 10px;
}

.price - card - section.pcs - wrap.psc - card - amount {
  display: flex;
  gap: 10px;
  justify - content: center;
  align - items: center;
  text - align: center;
}

.price - card - section.pcs - wrap.psc - card - amount p {
  font - size: 11px;
  letter - spacing: -0.015em;
  color: #2C293D;
  opacity: 0.7;
}

.price - card - section.pcs - wrap.amt - 1 {
  position: absolute;
  top: 100px;
  left: 35 %;
}

.price - card - section.pcs - wrap.amt - 2 {
  position: absolute;
  top: 200px;
  left: 35 %;
}

.price - card - section.pcs - wrap.amt - cancel {
  position: absolute;
  top: 100px;
  left: 47 %;
}

/* about page*/
.about - hero {
  padding: 15px 120px 30px 120px;
  background - color: #EEF0F1;
  width: 100 %;
  height: -moz - fit - content;
  height: fit - content;
}

.about - context {
  margin - top: 70px;
  margin - bottom: 50px;
}

.about - context.about - text h1 {
  width: 92 %;
  font - family: "Plus Jakarta Sans";
  font - style: normal;
  font - weight: 700;
  font - size: 75px;
  letter - spacing: -0.04em;
  color: #010007;
}

.about - context.about - text p {
  margin - top: 30px;
  width: 60 %;
  font - family: "Plus Jakarta Sans";
  font - style: normal;
  font - weight: 400;
  font - size: 16px;
  color: #020007;
}

.team - story - wrap {
  padding: 50px 120px 50px 120px;
  background - color: #EEF0F1;
  width: 100 %;
  height: -moz - fit - content;
  height: fit - content;
}

.story - text - 1 h3 {
  font - family: "Plus Jakarta Sans";
  font - style: normal;
  font - weight: 700;
  font - size: 30px;
  width: 50 %;
  letter - spacing: -0.015em;
  margin - bottom: 40px;
  color: #020007;
}

.story - text - 1 p {
  font - family: "Plus Jakarta Sans";
  font - style: normal;
  font - weight: 400;
  font - size: 16px;
  color: #020007;
  width: 90 %;
}

.story - text - 2 {
  margin - top: 40px;
}

.story - text - 2 h6 {
  font - family: "Plus Jakarta Sans";
  font - style: normal;
  font - weight: 600;
  font - size: 17px;
  width: 50 %;
  letter - spacing: -0.015em;
  margin - bottom: 10px;
  color: #020007;
}

.story - text - 2 p {
  font - family: "Plus Jakarta Sans";
  font - style: normal;
  font - weight: 400;
  font - size: 16px;
  color: #020007;
  width: 90 %;
}

.unox - founder - wrap {
  margin - top: 40px;
  height: -moz - fit - content;
  height: fit - content;
}

.unox - founder - wrap.uf - heading h3 {
  font - family: "Plus Jakarta Sans";
  font - style: normal;
  font - weight: 700;
  font - size: 30px;
  width: 50 %;
  letter - spacing: -0.015em;
  margin - bottom: 40px;
  color: #020007;
}

.unox - founder {
  width: 90 %;
  display: flex;
  justify - content: space - between;
  height: 440px;
}

.unox - founder.join h6 {
  font - family: "Plus Jakarta Sans";
  font - style: normal;
  font - weight: 600;
  font - size: 25px;
  margin - top: 20px;
  letter - spacing: -0.015em;
  color: #020007;
}

.unox - founder.join.uf - role {
  font - style: normal;
  font - weight: 400;
  font - size: 12px;
  color: rgba(39, 38, 37, 0.7);
  margin: 10px 0px;
}

.unox - founder.join p {
  font - family: "Plus Jakarta Sans";
  font - style: normal;
  font - weight: 400;
  font - size: 12px;
  color: #020007;
}

/*faq*/
.faq - hero {
  padding: 15px 120px 0px 120px;
  background - color: #EEF0F1;
  width: 100 %;
  height: -moz - fit - content;
  height: fit - content;
}

.faq - hero - context {
  padding: 70px 0px;
}

.faq - hero - context.fhc - text {
  width: 60 %;
  margin: auto;
}

.faq - hero - context.fhc - text h3 {
  font - family: "Plus Jakarta Sans";
  font - style: normal;
  font - weight: 700;
  font - size: 50px;
  letter - spacing: -0.04em;
  text - align: center;
  margin - bottom: 30px;
  color: #010007;
}

.faq - hero - context.fhc - text.fhc - input {
  width: 100 %;
  height: 60px;
  position: relative;
}

.faq - hero - context.fhc - text input {
  padding: 19px 54px;
  outline: none;
  width: 100 %;
  height: 50px;
  border: 1px solid #e8e7e8;
  background: #E8E7E8;
  border - radius: 163px;
}

.faq - hero - context.fhc - text img {
  position: absolute;
  left: 20px;
  top: 15px;
  width: 20px;
  height: 20px;
}

.article - card - wrap {
  display: flex;
  justify - content: space - between;
  padding: 20px 40px;
  gap: 30px;
}

.article - card {
  box - shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 25 %;
  border - radius: 20px;
}

.article - card:hover {
  box - shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

img {
  border - radius: 20px 20px 0 0;
}

.ac - container {
  padding: 15px;
}

.ac - container h4 {
  margin - bottom: 10px;
}

.ac - container p {
  font - size: 12px;
  font - weight: 500px;
  font - family: "Plus Jakarta Sans";
  font - style: normal;
  font - weight: 400;
  letter - spacing: -0.015em;
  color: #020007;
}

.ac - container.article - no {
  margin - top: 15px;
  font - size: 10px;
  font - family: "Plus Jakarta Sans";
  font - style: normal;
  font - weight: 400;
  letter - spacing: -0.015em;
  color: rgba(0, 0, 0, 0.6);
}

.faq - filter - button {
  display: flex;
  width: 40 %;
  margin: auto;
  justify - content: center;
  gap: 40px;
  margin - bottom: 30px;
}

.faq - filter - button.faq - tag {
  padding: 10px 17px;
  letter - spacing: -0.015em;
  font - size: 18px;
  color: rgba(44, 41, 61, 0.6);
  cursor: pointer;
  border - radius: 20px;
}

.faq - filter - button.faq - tag.active - 2 {
  background: #7F4AF0;
  color: white;
}

.faq - wrap - 2 {
  width: 60 %;
  margin: auto;
  display: none;
}

.show {
  display: block;
}

/*# sourceMappingURL=style.css.map */


/* new styling */

.join {
  position: relative;
}

.join p {
  display: none;
}

.join:hover p {
  display: block;
  position: absolute;
  bottom: 30px;
  left: 10px;
  z - index: 10;
  background: #fff;
  border - radius: 50px;
  padding: 6px 20px;
  font - size: 13px;
}

.uc - content - carousel - 2,
.uc - content - carousel - 3 {
  display: none;
}

.uc - content - carousel - 1 {
  display: block;
}


@media screen and(max - width: 720px) {
  nav.links ul {
    display: none;
  }

  .hero - context {
    width: 100 %;
  }

  .hero - img {
    display: none;
  }

  .hero {
    padding: unset;
  }

  .engagement - section {
    padding: 8 % 4 %;
  }

  /* admin-card */
  .admin - card {
    flex - direction: column;
    width: 100 %;
    height: max - content;
    position: relative;
    /* display: block; */
  }

  .admin - img img {
    /* position: absolute; */
    width: 100 %;
    height: 100 %;
    border - radius: 0px;
  }

  .admin - content,
  .admin - img {
    width: 100 %;
  }

  /* .join-heading */
  .join - heading {
    width: 100 %;
  }

  .join {
    width: 290.5px;
    height: 325.74px;
  }

  /* .get-unox */
  .get - unox {
    padding: 50px 25px;
  }

  .ul - heading h1 {
    font - size: 64px;
    line - height: 62.4px;
    letter - spacing: -1.5 %;
    margin - bottom: 32px;
  }

  .unox - content - 2 {
    flex - direction: column;
    align - items: unset;
  }

  .unox - right {
    width: 100 %;
  }

  .unox - right img {
    width: 100 %;
    height: 358.64px;
    object - fit: cover;
    margin - bottom: 29px;
  }

  .uc - content {
    margin - top: unset;
  }

  .uc - content h6 {
    margin - top: 0px;
    margin - bottom: 12px;
  }

  .uc - content a {
    margin - bottom: 32px;
  }

  .uc - content p {
    margin - bottom: 30px;
    margin - top: 0px;
  }

  .uc - content,
  .unox - left {
    width: 100 %;
  }

  .uc - 2 - button a {
    margin - left: 0px;
    margin - bottom: 0px;
  }

  .unox - content {
    flex - direction: column;
  }

  /* .testimony-section */
  .testimony - section {
    padding: 50px 25px;
  }

  .testimony - wrapper {
    flex - direction: column;
    width: 100 %;
  }

  .ts - img {
    width: 75 %;
  }

  .ts - text {
    width: 100 %;
  }

  .ts - img img {
    width: 100 %;
    height: 300px;
    border - radius: 40px;
  }

  .ts - text {
    text - align: center;
  }

  .ts - text h3 {
    font - size: 28px;
    font - weight: 600;
  }

  .ts - arrow - 1 img {
    left: 2 %;
    top: 30 %;
    width: 28px;
  }

  .ts - arrow - 2 img {
    right: 2 %;
    top: 30 %;
    width: 28px;
  }

  /* .recycle-section */
  /* padding: 120px 50px; */
  .recycle - section {
    padding: 50px 25px;
  }

  .rs - card,
  .rs - heading h3,
  .rs - text {
    width: 100 %;
  }

  .rs - img img {
    position: relative;
    right: unset;
    left: unset;
    width: 60 %;
    margin: 0px auto;
    display: block;
  }

  .rs - card {
    flex - direction: column;
    align - items: unset;
    height: max - content;
    padding - bottom: 0px;
  }

  .rs - text p {
    font - size: 16px;
    line - height: 22.56px;
  }

  .rs - text p b {
    font - weight: 400;
  }

  /* .faq-section */
  .faq - section {
    padding: 50px 25px;
  }

  .faq - wrap {
    width: 100 %;
  }

  .accordion:after {
    display: none;
  }

  /* footer */
  .email - list {
    width: 100 %;
  }

  .footer - heading h3 {
    width: 100 %;
    font - size: 30px;
  }

  .email - list input {
    width: 100 %;
  }

  .footer - card {
    width: 100 %;
    padding: unset;
    height: max - content;
  }

  .fc - links - wrapper {
    flex - direction: column;
  }

  footer.footer - card {
    padding: 70px 30px;
    padding - bottom: 60px;
  }

  footer {
    padding: 50px 25px;
  }

  .footer - heading h3 {
    font - size: 45px;
    line - height: 58.08px;
  }

  .fc - logos {
    flex - direction: column - reverse;
    align - items: unset;
    row - gap: 40px;
  }

  .fc - logo img {
    width: 30 %;
  }

  .fc - social img {
    width: 15 %;
  }

  .fc - social {
    justify - content: unset;
    grid - gap: 18px;
  }

}


/*  */
.unox - prop {
  display: flex;
  align - items: flex - end;
  position: relative;
  min - height: 100vh;
  background: #f5f5f7;
  position: relative;
}

.unox - prop.unox - prop - contain {
  padding: 0px 100px;
  padding - bottom: 0px;
  height: max - content;
}

.unox - prop - grid {
  display: grid;
  height: max - content;
  grid - template - columns: 1fr 3fr 1fr;
  align - items: center;
  z - index: 10;
  position: relative;
}

.unox - prop - grid p {
  width: 100 %;
  font - size: 14px;
}

.hero - phon {
  width: 40 %;
  margin: 0 % auto;
  display: block;
}

.unox - prop - grid.unox - prop - image {
  height: 20rem;
  overflow: hidden;
  object - fit: cover;
  object - position: top;
  width: 100 %;
  display: block;
}

.absolute - box {
  position: absolute;
  left: 50 %;
  top: 10 %;
  transform: translate(-50 %, -50 %);
  padding: 20px 40px;
  color: #fff;
  background: purple;
}

.centralize - content {
  /* margin: 0px auto;
  display: block;
  width: 60%;
  text-align: center; */
  top: 50 %;
  left: 50 %;
  transform: translate(-50 %, -50 %);
  z - index: 50;
  position: absolute;
}

.centralize - content h2 {
  width: 60 %;
  display: block;
  margin: 0 % auto;
  font - size: 30px;
  font - weight: 800;
  letter - spacing: .05px;
  margin - bottom: 40px;
}

.centralize - content img {
  width: 50 %;
  margin: 0px auto;
  display: block;
}

.engagement - section {
  z - index: 15;
  position: relative;
}