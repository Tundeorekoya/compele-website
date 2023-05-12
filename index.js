var  SideNav = document.getElementById("SideNav")
var  menuBtn = document.getElementById("menuBtn")

SideNav.style.right = "-250px";
menuBtn.onclick = () => {
  if (SideNav.style.right == "-250px"){
    SideNav.style.right  = "0px" 
  }else{
    SideNav.style.right ="-250px"
  }
   
}

var scroll = new SmoothScroll('a[href*="#"]',{
  speed:1000,
  speedAsDuration:true
  
});
