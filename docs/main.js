// include + test dynamic scrolling feature for projects page

// dynamic color-hover

// dynamic content resizing w/ DOM

// json data + project search query?  

// hover for bio on desktop/tablet
// Display Bio Text on mobile  

// percentage scrolling window for projects .html

// hover/expand solomon zelenko 

/*
function animateCursor(event) {
    var circle = document.createElement('img');

    for (i = 0; i < cursorArray.length; i++) {
        circle.setAttribute('src', cursorArray[i]);
        circle.setAttribute('class', 'cursor');

        document.body.appendChild(circle);

        circle.style.transition = 'all 1s ease'; 
        circle.style['-webkit-transition'] = 'all 0.5s ease';
        circle.style['-moz-transition'] = 'all 0.5s ease';
        circle.style['-ms-transition'] = 'all 0.5s ease';
        circle.style['-o-transition'] = 'all 0.5s ease';
    }

 //   circle.style.left = event.clientX + 'px';
//    circle.style.top = event.clientY + 'px';

   // setTimeout(animateCursor, 200);
}

.cursor {
    height: 50px;
    width: 50px;
}

<img class="cursor" src="media/cursor/cur1.svg" alt="" srcset="">

i = 0;
(function cursor() {
    html.style.cursor = cursorArray[i]; 
    i++;
    if(i == cursorArray.length) {
        i = 0;
        // reset to 0
    }
    setTimeout(cursor, 200);
})();  

function displayResults(responseJson) {
  console.log(responseJson);
  //replace the existing image with the new one
  $('.results-img').replaceWith(
    `<img src="${responseJson.message}" class="results-img">`
  )
  //display the results section
  $('.results').removeClass('hidden');
} 
*/

function dropDown() {
        $('.dropOpen').on('click', function(e) {
            $('nav').css('margin-right', '2%');
            $('.dropOpen').css('display', 'none');
            $('.dropClose').css('display', 'block');
            $('.menu--expanded').css('display', 'block');
            $('header').css('margin-bottom', '80px');
        });
    
        $('.dropClose').on('click', function(e) {
            $('nav').css('margin-right', '5%');
            $('.menu--expanded').css('display', 'none');
            $('.dropClose').css('display', 'none');
            $('.dropOpen').css('display', 'block');
            $('header').css('margin-bottom', '150px');
        });
}; 

$(dropDown);


/* Drop-down Menu 

    } else if ($('body').innerWidth() >= 1000) {
        $('menu--expanded').on('resize', function() {
            $('menu--expanded').css('display', 'flex');
            $('menu--expanded').css('margin', '0 5%');
        });
    } 
    
    nav {
        width: auto;
        margin-right: 5%;
    }

        transform: rotate(90deg) scaleX(0.6) scaleY(0.9);
        -webkit-transition: all 0.5s ease;
        -moz-transition:all 0.5s ease;
        -ms-transition:all 0.5s ease;
        -o-transition:all 0.5s ease;
        transition:all 0.5s ease;

media/close.svg 

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

/* Cursor: use jquery to handle 500 event! with created children */

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

let circle = document.createElement('img');
document.body.appendChild(circle);
circle.setAttribute('class', 'cursor');

circle.style.transition = 'all 0.2s ease';
circle.style['-webkit-transition'] = 'all 0.2s ease';
circle.style['-moz-transition'] = 'all 0.2s ease';
circle.style['-ms-transition'] = 'all 0.2s ease';
circle.style['-o-transition'] = 'all 0.2s ease';

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
// setInterval(animateCursor, 200);

// document.addEventListener('mousemove', animateCursor()); 

document.onmousemove = function position(e) {
    let circle = document.querySelector('.cursor'); 
    circle.style.position = 'absolute';
    circle.style.left = e.clientX + 10 + 'px';
    circle.style.right = e.clientX + 10 + 'px';
    circle.style.top = e.clientY + 10 + 'px';
    circle.style.height = '60px';
    circle.style.width = '60px';

    animateCursor(circle);  

} 
 


 



