
var window1 = Titanium.UI.createWindow({  
    backgroundColor:'#fff'
});

var textF1 = Titanium.UI.createTextField({
    color:'#336699',
    height:35,
    top:50,
    left:70,
    width:50,
    borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
    keyboardType: Ti.UI.KEYBOARD_NUMBER_PAD
});

var textF2 = Titanium.UI.createTextField({
    color:'#336699',
    height:35,
    top:50,
    //left:90,
    width:50,
    borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
     keyboardType: Ti.UI.KEYBOARD_NUMBER_PAD
});

var textF3 = Titanium.UI.createTextField({
    color:'#336699',
    height:35,
    top:50,
    left:200,
    width:50,
    borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
     keyboardType: Ti.UI.KEYBOARD_NUMBER_PAD
});

var button = Titanium.UI.createButton({
   title: 'Click Here',
   top: 100,
   width: 100,
   height: 50
});
var w = 1;
var q = 2;
var z = 3;

//Ti.UI.debug(w+q+z);
// var arr= [0,1,2,3,4,5,6,7,8,9];
// //var input = prompt
// 
 // var sum = 0;
    // for (var i=0; i < arr.length; i++) {
      // sum = sum + arr[i];
    // };
 
   // console.log("the total sum of the array is: " + sum);
	
	
	// button.addEventListener('click',function() {
		// //Ti.UI.debug(textF1.value+textF2.value+textF3.value);
		// parseINT(values(0)) + parseINT(values(0)) + parseINT(values(0));
	// });
	// // textF1.addEventListener('change',function(e){
    // // textF1.value = textF1.value.replace(/[^0-9]+/,"");
	// // // });
// valuesall = function(){
	// values = [textF1.value, textF2.value,textF3.value];
// };

// valsum = function(){
	// var sum =( parseINT(values(0)) + parseINT(values(0)) + parseINT(values(0)) );
// };


window1.open();
window1.add(textF1);
window1.add(textF2);
window1.add(textF3);
window1.add(button);
