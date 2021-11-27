# Minified-guided-learning-solution-GLS-
GLS is a solution that enables step by step guidance on top of any web interface.
I build a guided learning frontend engine written in javascript. Player that will eventually run a guide on google.com. 

***JSONP Json guid*** - The json represents a sample guide that the frontend engine will need to render on the google.com. A guide is a sequence of steps, each step represents a specific tooltip with a specific text on a specific element in the page.

I implemented player.js  - so that upon loading google.com in a browser the sample guide will run and display tooltip on the screen.
The script I wrote can be injected into google using DevTools. 

The Guide URL I used look like this:

![data](https://user-images.githubusercontent.com/34624638/143691178-5eb80571-e3aa-4736-8f22-db065ca92e93.PNG)

The given url im my code returns a JSON tag delivers data directly to a first-party page in JSON format.
We can see that the data contains an array of 5 elements. 
The first element array for example contains 'contents' which I used its contents for presentation in the tooltip.  
Moreover, I could use 'selector' to "find" (or select) the HTML elements I want to style. 

I recommend using this site to see the information returned in a more structured way [jsonformatter](https://jsonformatter.org/json-pretty-print)
and if you want to test the code and view the result in front of you than this site can deliver it [jsfiddle](https://jsfiddle.net/).

***Chrome extension***

![chrome](https://user-images.githubusercontent.com/34624638/143691171-ebbbfb01-0b16-4151-a5b4-039701deb995.PNG)

As you can see in the picture, to add the code as an extension go to the 3 dots -> More tools -> Extensions -> keep to 'Developer mode' on -> Load unpacked ->
load the folder of the code. The folder should contain the Javascript code and Manifest.json (JSON file that tells the browser about your Progressive Web App and how it should behave when installed on the user's desktop or mobile device).

https://user-images.githubusercontent.com/34624638/143691084-13d38415-4920-4ceb-b078-fc5223e2e0d3.mp4


