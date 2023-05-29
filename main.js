"use strict";

let menu = document.getElementById("menu");
let wrapper = document.getElementById("wrapper");
let path = menu.querySelector("path");
let menu_buttons = document.querySelectorAll(".buttons");

let pWidth = wrapper.clientWidth;
let pHeight = wrapper.clientHeight;
//Breiten der Buttons:
let btnWidth = pWidth * .1;
//Anzahl Abstände zwischen Buttons untereinander und Buttons zwischen Rand:
let spaces = 5;
//Brite der Abstände zwischen den Buttons:
let spaceWidth = menu_buttons[1].getBoundingClientRect().left - menu_buttons[0].getBoundingClientRect().right;

let firstClimb = (menu_buttons[0].getBoundingClientRect().left - wrapper.getBoundingClientRect().left) - (btnWidth / 2);
let secondClimb = (menu_buttons[1].getBoundingClientRect().left - wrapper.getBoundingClientRect().left) - (btnWidth / 2);
let thirdClimb = (menu_buttons[2].getBoundingClientRect().left - wrapper.getBoundingClientRect().left) - (btnWidth / 2);
let fourthClimb = (menu_buttons[3].getBoundingClientRect().left - wrapper.getBoundingClientRect().left) - (btnWidth / 2);

//Werte für den Path:
let topPad = pHeight / 10;
let quart = topPad / 4;
let btnHalf = btnWidth / 2;
console.clear();
console.log("Buttonbreite:", btnWidth);
console.log("Wrapperbreite:", pWidth);
console.log("Wrapperhöhe:", pHeight);
console.log("topPad:", topPad);
console.log("spaceWidth:", spaceWidth);
console.log("btnHalf:", btnHalf);

//-----------------------StartPunkt     Erstes Hochgehen            Erste Kurve-Helper          Zweiter Kurve Helper                 Endpunkt Esrte Kurve
path.setAttribute("d", `M 10 ${topPad}
                        L ${secondClimb} ${topPad}
                        C ${secondClimb + btnHalf * .25} ${topPad}
                          ${secondClimb + btnHalf * .5} ${topPad * .75}
                          ${secondClimb + btnHalf * .5} ${topPad * .5}
                          
                        C ${(secondClimb + btnHalf * .5)} ${(topPad * .25) + 1}
                          ${secondClimb + btnHalf * .75} 0
                          ${secondClimb + btnHalf} 0
                          
                        l ${btnWidth} 0
                        
                        c ${btnHalf * .25} 0
                          ${btnHalf * .5} ${topPad * .25}
                          ${btnHalf * .5} ${topPad * .5}
                          
                        c 0  ${topPad * .25}
                          ${btnHalf * .25} ${topPad * .5}
                          ${btnHalf * .5} ${topPad * .5}
                          
                        L ${pWidth - 10} ${topPad}
                        
                        c 5 0
                          10 5
                          10 10
                        
                        l 0 ${pHeight - topPad - 20}
                        
                        c 0 5
                          -5 10
                          -10 10
                          
                        L 10 ${pHeight}
                        
                        c -5 0
                          -10 -5
                          -10 -10
                          
                        L 0 ${topPad + 10}
                        
                        c 0 -5
                          5 -10
                          10 -10`);




                          
// path.setAttribute("d", `M 10 ${topPad}
// L ${firstClimb} ${topPad}
// C ${firstClimb + btnHalf * .25} ${topPad}
//   ${firstClimb + btnHalf * .5} ${topPad * .75}
//   ${firstClimb + btnHalf * .5} ${topPad * .5}
  
// C ${(firstClimb + btnHalf * .5)} ${(topPad * .25) + 1}
//   ${firstClimb + btnHalf * .75} 0
//   ${firstClimb + btnHalf} 0
  
// l ${btnWidth} 0

// c ${btnHalf * .25} 0
//   ${btnHalf * .5} ${topPad * .25}
//   ${btnHalf * .5} ${topPad * .5}
  
// c 0  ${topPad * .25}
//   ${btnHalf * .25} ${topPad * .5}
//   ${btnHalf * .5} ${topPad * .5}
  
// L ${pWidth - 10} ${topPad}

// c 5 0
//   10 5
//   10 10

// l 0 ${pHeight - topPad - 20}

// c 0 5
//   -5 10
//   -10 10
  
// L 10 ${pHeight}

// c -5 0
//   -10 -5
//   -10 -10
  
// L 0 ${topPad + 10}

// c 0 -5
//   5 -10
//   10 -10`);