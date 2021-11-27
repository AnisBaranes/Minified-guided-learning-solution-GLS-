var url = 'https://guidedlearning.oracle.com/player/latest/api/scenario/get/v_IlPvRLRWObwLnV5sTOaw/5szm2kaj/?callback=__5szm2kaj&refresh=true&env=dev&type=startPanel&vars%5Btype%5D=startPanel&sid=none&_=1582203987867'
var index = 0;
const steps = [{
                "selector": ".lnXdpd", 
                "content": "<p>Welcome to <em><strong>Google</strong></em>!</p>\n",
                "cLeft": 0,
                "cTop": -150
            },
            {
                "selector": "a.gb_f",
                "content": "<p>Click <strong>Images</strong> to go to images section</p>\n",
                "cLeft": 0,
                "cTop": 20
            },
            {
                "selector": "div.LX3sZb",
                "content": "<p>Enter a search query here and click ENTER!</p>\n",
                "cLeft": 250,
                "cTop": 340
            },
            {
                "selector": "div.FPdoLc.lJ9FBc",
                "content": "<p>Click here to <b>search</b></p>\n",
                "cLeft": 128,
                "cTop": 60
            }
        ];

function createTooltip() {

     $('<div id="tooltipid" class="tooltip"><button class="closeButton">x</button><br>' + steps[index].content + '\n</div>')
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
	
	let selector = document.querySelector(steps[index].selector);	
	var d = document.getElementById('tooltipid')
    d.style.position = "absolute";
    d.style.left = selector.getBoundingClientRect().left + window.scrollX + steps[index].cLeft + 'px';
    d.style.top = selector.getBoundingClientRect().top + window.scrollY + steps[index].cTop + 'px';
	
}

function loadJquery() {
    if (window.jQuery) {  
        var sc = document.createElement("script");
        sc.src = url;
        document.body.appendChild(sc);
    }
    else 
        window.setTimeout("loadJquery();", 100);   
}

(function() {

    'use strict';

    var script = document.createElement('script');
    script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
    script.type = 'text/javascript';
    document.getElementsByTagName('head')[0].appendChild(script);
	loadJquery();

    window.onload = function() {

/*
        $.ajax({
            type: "GET",
            dataType: "jsonp",
            url: url
        }).done(function(data) {
         console.log("dataTest");
            console.log(data);
        });
*/       
       createTooltip();
    }

})();