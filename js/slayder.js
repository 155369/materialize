var prev_btn = document.getElementById("previous_button");
var next_btn =document.getElementById("next_button");
var nkar = document.getElementById("nkar");

prev_btn.addEventListener("click", prev);
next_btn.addEventListener("click", next);

var images_urls = [
  "https://cdn.pixabay.com/photo/2019/10/19/03/50/bmw-4560531_1280.jpg",
  "https://image.winudf.com/v2/image/Y29tLnVraW5nLnNwb3J0Y2Fyd2FsbHBhcGVyX3NjcmVlbl8yXzE1MjI2MzUzNzZfMDgx/screen-2.jpg?fakeurl=1&type=.jpg",
  "https://c4.wallpaperflare.com/wallpaper/66/220/943/bmw-cars-car-sport-car-wallpaper-thumb.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStH8aBiZfgMWE4K7cMHcdKShvLTAqFu_4mcx8D0WnbEYA-rVx0ynwhFlsly5XTv4Ixido&usqp=CAU",
];


var item = 0;
nkar.src = images_urls[item];
function prev() {
  item--;
  if (item < 0) item = images_urls.length - 1;
  nkar.src = images_urls[item];
}

function next() {
  item++;
  if (item >= images_urls.length) item = 0;
  nkar.src = images_urls[item];
}
