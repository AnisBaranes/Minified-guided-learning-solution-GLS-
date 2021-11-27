
var index = 0;
var steps;
const horizontal = [0, 0, 250, 128];    
const vertical = [-150, 20, 340, 60];

function createTooltip() {
    var content = steps[index].action.contents['#content'];
    
    $('<div id="tooltipid" class="tooltip"><button class="closeButton">x</button><br>' + content + '\n</div>')
        .appendTo('body');
    $(".tooltip").css({
    		"margin": "8px",
        "padding": "10px",
        "border": "1px solid black",
        "background-color": "black",
        "position": "absolute",
        "color": "white",
        "z-index": 5,
        "border-radius": "5px"
    });

    if (index != 0) $('<button class="prevButton">prev</button></div>').appendTo('#tooltipid');
    if (index != 3) $('<button class="nextButton">next</button></div>').appendTo('#tooltipid');

    $(".prevButton").css({
    		"background-color": "white",
        "border": "none",
        "color": " black",
        "padding": "5px 10px",
        "margin-left": "5px",
        "text-align": "center",
        "text-decoration": "none",
        "display": "inline-block",
        "border-radius": "5px",
        "float": "left"
    });
   
    $(".nextButton").css({
    		"background-color": "white",
        "border": "none",
        "color": " black",
        "padding": "5px 10px",
        "margin-left": "5px",
        "text-align": "center",
        "text-decoration": "none",
        "display": "inline-block",
        "border-radius": "5px",
        "float": "right"});
        
    $(".closeButton").css({
    		"background-color": "white",
        "color": " black",
        "padding": "0px 3px 0px 3px",
        "display": "inline-block",
        "position": "absolute",
        "top": 2,
        "right": 2
    });

    $('.tooltip').on("click", '.prevButton', function() {
        $('div.tooltip').remove();
        index = index > 0 ? index - 1: index;
        createTooltip();
    });

    $('.tooltip').on("click", '.nextButton', function() {
        $('div.tooltip').remove();
        index = index < 3 ? index + 1: index;
        createTooltip();
    });

    $('.tooltip').on("click", '.closeButton', function() {
         $('div.tooltip').remove();
    });
    
    var selector = document.querySelector(steps[index].selector);	
    var docPos = document.getElementById('tooltipid')
    docPos.style.position = "absolute";
    docPos.style.left = selector.getBoundingClientRect().left + window.scrollX + horizontal[index] + 'px';
    docPos.style.top = selector.getBoundingClientRect().top + window.scrollY + vertical[index] + 'px';
}


(function() {
    'use strict';

    var script = document.createElement('script');
    script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
    script.type = 'text/javascript';
    document.getElementsByTagName('head')[0].appendChild(script);

    window.onload = function() {
    
    var url = 'https://guidedlearning.oracle.com/player/latest/api/scenario/get/v_IlPvRLRWObwLnV5sTOaw/5szm2kaj/?callback=__5szm2kaj&refresh=true&env=dev&type=startPanel&vars%5Btype%5D=startPanel&sid=none&_=1582203987867'

        $.ajax({
            type: "GET",
            dataType: "jsonp",
            url: url
        }).done(function(data) {
            steps = data.data.structure.steps;
            createTooltip();
        });
    }

})();
