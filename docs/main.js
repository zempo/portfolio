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

function animateCursor(cursorArray) {
    let circle = document.createElement('img');

    for (let i = 0; i < cursorArray.length; i++) {
        circle.setAttribute('src', cursorArray[i]);
        circle.setAttribute('class', 'cursor');

        document.body.appendChild(circle); 
 
        circle.style.transition = 'all 0.2s ease'; 
        circle.style['-webkit-transition'] = 'all 0.2s ease';
        circle.style['-moz-transition'] = 'all 0.2s ease';
        circle.style['-ms-transition'] = 'all 0.2s ease';
        circle.style['-o-transition'] = 'all 0.2s ease';
    }

    setTimeout(animateCursor, 200);
}

document.addEventListener('mousemove', animateCursor(cursorArray));

document.onmousemove = function position(e) {
    let circle = document.querySelector('.cursor');
    circle.style.position = 'absolute';
    circle.style.left = e.clientX + 'px';
    circle.style.right = e.clientX + 'px';
    circle.style.top = e.clientY + 5 + 'px'; 
    circle.style.height = '50px';
    circle.style.width = '50px';

}



 