window.onload = function(e) {
  console.log("window.onload");
  
const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
 
function init() {
  console.log("== init ==");
  
  let bodyEl = document.getElementsByTagName("body");
  console.log("bodyEl;" , bodyEl);
  
  bodyArray[0].addEventListener("keydown", onKeyDownHandler);
  
  let index = 0;
  
  
  function onKeyDownHandler(e) {
    console.log("== onKeyDownHandler ==");
    console.log("e.which:" , e.which);
    
    if (e.which === code[index]) {
      console.log("MATCH");
      index++;
    } else {
      console.log("OOPS!");
    }
      
    }
    
    if (e.which === 37) {
      console.log("37");
       } else if (e.which === 38) {
         console.log("up");
       } else if (e.which === 39) {
         console.log("right");
       } else if (e.which === 40) {
         console.log("down");
       }
    
    
    
    
    
  }
}
init();

}