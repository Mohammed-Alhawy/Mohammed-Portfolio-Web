const header=document.getElementsByTagName("header")[0]

function scrollHeader() {
  if (window.scrollY>= 100) {
    header.classList.add("scroll-header")
  }else{
    header.classList.remove("scroll-header")
  }
}

window.addEventListener("scroll" ,scrollHeader)
