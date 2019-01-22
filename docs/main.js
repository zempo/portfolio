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





function dropDown() {
        $('.dropOpen').on('click', function(e) {
            $('nav').css('margin-right', '2%');
            $('.dropOpen').css('display', 'none');
            $('.dropClose').css('display', 'block');
            $('.menu--expanded').css('display', 'block');
            $('header').css('margin-bottom', '80px');
        });

        $( window ).on('resize', function(e) {
            location.reload();
        });
    
        $('.dropClose').on('click', function(e) {
            $('nav').css('margin-right', '5%');
            $('.menu--expanded').css('display', 'none');
            $('.dropClose').css('display', 'none');
            $('.dropOpen').css('display', 'block');
            $('header').css('margin-bottom', '150px');
            location.reload();
        });

};  
 
$(dropDown);

/*
      <nav role="site navigation">
            <div class="menu menu--icon" role="menu icon"><img src="media/icon2.svg" alt="burger icon for hamburger menu"></div>
            <!-- &#9776; for standard hamburger menu icon-->
            <ul class="menu menu--expanded" role="menu">
                <hr class="rwd rwd--hr">
                <li class="menu__item"><a href="projects.html">Projects</a></li>
                <hr class="rwd rwd--hr">
                <li class="menu__item"><a href="works.html">Other_Works</a></li>
                <hr class="rwd rwd--hr">
                <li class="menu__item"><a href="contact.html">Contact</a></li>
            </ul>
      </nav> 
*/ 


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
        circle.setAttribute('src', cursorArray[count]); 
    } else {
        count = 0;
        circle.setAttribute('src', cursorArray[count]); 
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
    circle.style.height = '70px';
    circle.style.width = '70px';
    circle.style.transition = 'all 0.15s ease';
    circle.style['-webkit-transition'] = 'all 0.15s ease';
    circle.style['-moz-transition'] = 'all 0.15s ease';
    circle.style['-ms-transition'] = 'all 0.15s ease';
    circle.style['-o-transition'] = 'all 0.15s ease'; 

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
  
/*
    transform: scaleX(2.5);
    -webkit-transition: all 0.5s ease;
    -moz-transition:all 0.5s ease;
    -ms-transition:all 0.5s ease;
    -o-transition:all 0.5s ease;
    transition:all 0.5s ease;  

    circle.style.transform = 'scaleX(2) scaleY(2)';
    circle.style['-webkit-transform'] = 'scaleX(2) scaleY(2)';
    circle.style['-moz-transform'] = 'scaleX(2) scaleY(2)';
    circle.style['-ms-transform'] = 'scaleX(2) scaleY(2)';
    circle.style['-o-transform'] = 'scaleX(2) scaleY(2)';
    circle.style.transition = 'all 0.1s ease';
    circle.style['-webkit-transition'] = 'all 0.1s ease';
    circle.style['-moz-transition'] = 'all 0.1s ease';
    circle.style['-ms-transition'] = 'all 0.1s ease'; 
    circle.style['-o-transition'] = 'all 0.1s ease';
*/



 



