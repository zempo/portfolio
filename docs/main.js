// include + test dynamic scrolling feature for projects page

// dynamic color-hover

// dynamic content resizing w/ DOM

// json data + project search query?  

// hover for bio on desktop/tablet
// Display Bio Text on mobile  

// percentage scrolling window for projects .html

// hover/expand solomon zelenko 

// include slider for cursor speed?
// slider to change amount of color variation 
// include enable/disable cursor add-on
// enable disable cursor 
// simply hide/unhide class 
// make hideable sidebar 
let cursorArray = ['media/cursor/cur1.svg',
'media/cursor/cur2.svg',
'media/cursor/cur3.svg',
'media/cursor/cur4.svg',
'media/cursor/cur5.svg',
'media/cursor/cur6.svg',
'media/cursor/cur7.svg',
'media/cursor/cur8.svg',
'media/cursor/cur9.svg',
'media/cursor/cur10.svg',
'media/cursor/cur11.svg',
'media/cursor/cur12.svg',
'media/cursor/cur13.svg',
'media/cursor/cur14.svg',
'media/cursor/cur15.svg',
'media/cursor/cur16.svg',
'media/cursor/cur17.svg'];  
// array of animation frames
 
let circle = document.createElement('img');
// initialize & append image in DOM
document.body.appendChild(circle);
circle.setAttribute('class', 'cursor');
circle.style.position = 'absolute';
// set attribute for easier reference
// and set image position to absolute 

function animateCursor(circle) { 

    let current = circle.getAttribute('src');

    let count = cursorArray.indexOf(current); 

    if (count < 16) {
        count++;

        setTimeout(function() {
            circle.setAttribute('src', cursorArray[count]);
        }, 200);
    } else {
        count = 0;

        setTimeout(function() {
            circle.setAttribute('src', cursorArray[count]);
        }, 200);
    } 
}  
// define current .circle image source
// index/store the array position of the image source
// increment the index to iterate through each 
// frame in the cursorArray. While less than the array length - 1
// Reset the count to 0.

document.onmousemove = function position(e) {
    let circle = document.querySelector('.cursor'); 
    circle.style.left = e.pageX - 30 + 'px';
    circle.style.top = e.pageY + 5 + 'px';
    circle.style.height = '65px';
    circle.style.width = '65px';
    circle.style.transition = 'all 0.06s ease';
    circle.style['-webkit-transition'] = 'all 0.06s ease';
    circle.style['-moz-transition'] = 'all 0.06s ease';
    circle.style['-ms-transition'] = 'all 0.06s ease';
    circle.style['-o-transition'] = 'all 0.06s ease'; 
   // include all vendor prefixes 
   // you can customize the animation transitions
   // make transition length `0.${speedSlider}`

    animateCursor(circle);  
 
} 
// as the mouse moves, passing this event through position function
// locally redefine the circle variable
// position the image relative to the location of the cursor movement event
// call the animate circle function
// pass the locally redefined circle variable through the function 
let a = document.querySelector('a'); 
a.onmouseover = function position2(e) {
    let circle = document.querySelector('.cursor');
    circle.style.transform = 'scaleX(0) scaleY(0)';
    circle.style['-webkit-transform'] = 'scaleX(0) scaleY(0)';
    circle.style['-moz-transform'] = 'scaleX(0) scaleY(0)';
    circle.style['-ms-transform'] = 'scaleX(0) scaleY(0)';
    circle.style['-o-transform'] = 'scaleX(0) scaleY(0)';
    circle.style.transition = 'transform 0.3s ease';
    circle.style['-webkit-transition'] = '-webkit-transform 0.3s ease';
    circle.style['-moz-transition'] = '-moz-transform 0.3s ease';
    circle.style['-ms-transition'] = '-ms-transform 0.3s ease'; 
    circle.style['-o-transition'] = '-o-transform 0.3s ease';
}
a.onmouseout = function position3(e) {
    let circle = document.querySelector('.cursor');
    circle.style.transform = 'scaleX(1) scaleY(1)';
    circle.style['-webkit-transform'] = 'scaleX(1) scaleY(1)';
    circle.style['-moz-transform'] = 'scaleX(1) scaleY(1)';
    circle.style['-ms-transform'] = 'scaleX(1) scaleY(1)';
    circle.style['-o-transform'] = 'scaleX(1) scaleY(1)';
    circle.style.transition = 'transform 0.3s ease';
    circle.style['-webkit-transition'] = '-webkit-transform 0.3s ease';
    circle.style['-moz-transition'] = '-moz-transform 0.3s ease';
    circle.style['-ms-transition'] = '-ms-transform 0.3s ease'; 
    circle.style['-o-transition'] = '-o-transform 0.3s ease';

}  
let menu = document.querySelector('.menu--expanded'); 
menu.onmouseover = function position4(e) {
    let circle = document.querySelector('.cursor');
    circle.style.transform = 'scaleX(0) scaleY(0)';
    circle.style['-webkit-transform'] = 'scaleX(0) scaleY(0)';
    circle.style['-moz-transform'] = 'scaleX(0) scaleY(0)';
    circle.style['-ms-transform'] = 'scaleX(0) scaleY(0)';
    circle.style['-o-transform'] = 'scaleX(0) scaleY(0)';
    circle.style.transition = 'transform 0.5s ease';
    circle.style['-webkit-transition'] = '-webkit-transform 0.5s ease';
    circle.style['-moz-transition'] = '-moz-transform 0.5s ease';
    circle.style['-ms-transition'] = '-ms-transform 0.5s ease'; 
    circle.style['-o-transition'] = '-o-transform 0.5s ease';
} 
menu.onmouseout = function position5(e) {
    let circle = document.querySelector('.cursor');
    circle.style.transform = 'scaleX(1) scaleY(1)';
    circle.style['-webkit-transform'] = 'scaleX(1) scaleY(1)';
    circle.style['-moz-transform'] = 'scaleX(1) scaleY(1)';
    circle.style['-ms-transform'] = 'scaleX(1) scaleY(1)';
    circle.style['-o-transform'] = 'scaleX(1) scaleY(1)';
    circle.style.transition = 'transform 0.5s ease';
    circle.style['-webkit-transition'] = '-webkit-transform 0.5s ease';
    circle.style['-moz-transition'] = '-moz-transform 0.5s ease';
    circle.style['-ms-transition'] = '-ms-transform 0.5s ease'; 
    circle.style['-o-transition'] = '-o-transform 0.5s ease';
} 
