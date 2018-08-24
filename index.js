window.onload = function(e) {
  console.log("window.onload");
  
const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
 
function init() {
  console.log("== init ==");
  
  let bodyEl = document.getElementsByTagName("body");
  console.log("bodyEl;" , bodyEl);
  
  bodyArray[0].addEventListener("keydown", onKeyDownHandler);
  
  function onKeyDownHandler(e) {
    console.log("== onKeyDownHandler ==");
    console.log("e.which:" , e.which);
    
  }
}
init();

}