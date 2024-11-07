let logo=document.getElementsByClassName("logo-img")

let open=false;
logo[0].addEventListener("click",()=>{
    if(!open){
      document.querySelector(" .nav-ele").classList.add("nav-ele-responsive")
     open=!open
    }
    else{
        document.querySelector(" .nav-ele").classList.remove("nav-ele-responsive")
        open=!open 
    }

})