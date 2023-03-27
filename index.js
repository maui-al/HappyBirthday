document.querySelector("#msg").addEventListener("click", function(){
    document.querySelector(".container-1").classList.add("active");
    document.querySelector(".container-2").classList.remove("active");
    document.querySelector(".container-3").classList.remove("active");
});
document.querySelector("#rpic").addEventListener("click", function(){
    document.querySelector(".container-2").classList.add("active");
    document.querySelector(".container-1").classList.remove("active");
});
document.querySelector("#vid").addEventListener("click", function(){
    document.querySelector(".container-3").classList.add("active");
    document.querySelector(".container-1").classList.remove("active");
    document.querySelector(".container-2").classList.remove("active");
});