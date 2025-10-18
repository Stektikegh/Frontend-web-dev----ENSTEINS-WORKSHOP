const button = document.querySelector(".green");

const SideBar = document.querySelector(".hidden");


function clicked() {
  if (SideBar.className == "SideBar") {

    SideBar.className = "hidden";

  }
  else {

    SideBar.className = "SideBar";

  }


}


button.onclick = clicked;
