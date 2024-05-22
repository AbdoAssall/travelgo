var alartCopy = document.querySelectorAll(".alart")
// console.log(alartCopy)
alartCopy.forEach(function(copy){
    copy.addEventListener("click",function(){
        alert("The text has been copied")
    })
    
})