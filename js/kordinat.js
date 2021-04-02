var coord = document.getElementById("bottom_left_part")

 window.onmousemove = function (event) {
    x = event.x; 
    y = event.y;
    coord.innerHTML ="coord_X  : " + x +" | "+  "coord_Y  : " + y ;
}