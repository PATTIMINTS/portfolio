// $(function() {
//   $("#image-One").click(function() {
//     $("#theDiv-1").toggle("slow");
//     $("#theDiv-2").toggle("slow");
//     $("#theDiv-3").toggle("slow");
//   })})
// document.querySelector(".image-1").addEventListener("click", e => {

// })
const imageOne = document.querySelector('.image-1');
const imageTwo = document.querySelector('.image-2');
const imageThree = document.querySelector('.image-3');
const imageFour = document.querySelector('.image-4');
const imageFive = document.querySelector('.image-5');
const imageSix = document.querySelector('.image-6');
const imageSeven = document.querySelector('.image-7');
const imageEight = document.querySelector('.image-8');
const imageNine = document.querySelector('.image-9');
const imageTen = document.querySelector('.image-10');
const imageEleven = document.querySelector('.image-11');
const imageTwelve = document.querySelector('.image-12');

imageOne.addEventListener('click', e => {
  let hiOne = document.querySelector('.hiOne');
  hiOne.classList.toggle('hidden');
});

imageTwo.addEventListener('click', e => {
  let hiTwo = document.querySelector('.hiTwo');
  hiTwo.classList.toggle('hidden');
});
imageThree.addEventListener('click', e => {
  let hiThree = document.querySelector('.hiThree');
  hiThree.classList.toggle('hidden');
});
imageFour.addEventListener('click', e => {
  let hiFour = document.querySelector('.hiFour');
  hiFour.classList.toggle('hidden');
});
imageFive.addEventListener('click', e => {
  let hiFive = document.querySelector('.hiFive');
  hiFive.classList.toggle('hidden');
});
imageSix.addEventListener('click', e => {
  let hiSix = document.querySelector('.hiSix');
  hiSix.classList.toggle('hidden');
});

imageSeven.addEventListener('click', e => {
  let hiSeven = document.querySelector('.hiSeven');
  hiSeven.classList.toggle('hidden');
});

imageEight.addEventListener('click', e => {
  let hiEight = document.querySelector('.hiEight');
  hiEight.classList.toggle('hidden');
});
imageNine.addEventListener('click', e => {
  let hiNine = document.querySelector('.hiNine');
  hiNine.classList.toggle('hidden');
});
imageTen.addEventListener('click', e => {
  let hiTen = document.querySelector('.hiTen');
  hiTen.classList.toggle('hidden');
});
imageEleven.addEventListener('click', e => {
  let hiEleven = document.querySelector('.hiEleven');
  hiEleven.classList.toggle('hidden');
});
imageTwelve.addEventListener('click', e => {
  let hiTwelve = document.querySelector('.hiTwelve');
  hiTwelve.classList.toggle('hidden');
});
// const display = () => {
//   const hi = document.querySelector(".hi");
//   // Remove current class
//   hi.classList.remove(hi);
// };

// image.addEventListener("click", e => {
//   display();
// });
