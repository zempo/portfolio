// include + test dynamic scrolling feature for projects page

// dynamic color-hover

// dynamic content resizing w/ DOM

// json data + project search query?  

// hover for bio on desktop/tablet
// Display Bio Text on mobile  

// percentage scrolling window for projects .html

// hover/expand solomon zelenko 
 
let html = document.querySelector('html'); 
 
let cursorArray = 
['url(media/cursor/cur1.svg), auto',
'url(media/cursor/cur2.svg), auto',
'url(media/cursor/cur3.svg), auto',
'url(media/cursor/cur4.svg), auto',
'url(media/cursor/cur5.svg), auto',
'url(media/cursor/cur6.svg), auto',
'url(media/cursor/cur7.svg), auto',
'url(media/cursor/cur8.svg), auto',
'url(media/cursor/cur9.svg), auto',
'url(media/cursor/cur10.svg), auto',
'url(media/cursor/cur11.svg), auto',
'url(media/cursor/cur12.svg), auto',
'url(media/cursor/cur13.svg), auto',
'url(media/cursor/cur14.svg), auto',
'url(media/cursor/cur15.svg), auto',
'url(media/cursor/cur16.svg), auto',
'url(media/cursor/cur17.svg), auto'];

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
 