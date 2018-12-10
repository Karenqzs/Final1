let x,y;
let strokeIndex = 0;
let penIndex = 0;
let index = 0;
let prevx, prevy;
let hamburger = null;

function setup() {
  createCanvas (255,255);
  loadJSON('/hamburger', gotHamburger);
}
function draw () {
  if (this.hamburger) {
    let x = this.hamburger[strokeIndex][0][index];
    let y = this.hamburger[strokeIndex][1][index];
    stroke(0);
    strokeWeight(3);
    if (prevx !==  undefined){
    line (prevx, prevy,x,y);
  }
    index++;
    if (index >= this.hamburger[strokeIndex][0].length){
      strokeIndex++;
      prevx = undefined;
      prevy = undefined;
      index = 0;
      if (strokeIndex === this.hamburger.length){
        this.hamburger = undefined;
        strokeIndex = 0;
        loadJSON('/hamburger', gotHamburger);
      }
    } else {
    prevx = x;
    prevy = y;
  }
}

}
function gotHamburger(data) {
  background (250);
  this.hamburger = data.drawing;
  console.log(data);
  //let drawing = data.drawing;
  //console.log(drawing);

  //for (let path of drawing) {
  //  nofill();
//    stroke(0);
//    strokeweight(3);
//    beginShape();
//    for let i = 0; i < path[0].length; i++ {
//      let x = path [0][i];
//      let y = path [1][i];
//      vertex (x,y);
//    }
//    endShape();
//  }
//  loadJSON('/hamburger', gotHamburger);
//
}
