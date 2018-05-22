# typeWrite
A simple JavaScript typewriter effect on text

# Description
A simple JavaScript plugin that adds typewriter effect(with blinking caret) to text provided as attributes to an element.

# Requirements
Works on any JavaScript supported browser

# Installation

Download the JS file and link  to your html page.
``` html
<script src="directory/typewrite.js"></script>
```

# Usage
In your html file, add text to the element you want to put the text as array via <span style='background:yellow;'>data-set</span> attribute. make sure you have set the <span style='background:yellow;'>data-period</span> attribute as well and the **class** as <span style='background:yellow;'>typewrite</span>
  
``` html
<h2 class="typewrite" data-period='100' data-set='["Some text here.", "Another text here."]', data-loop = 'false' data-delay='3000'>
</h2>
```

**NOTE:** data-delay and data-loop are optional. **data-delay** takes string of milliseconds of time you want the text to change to another if you have more than one block of text. **data-loop** takes either 'true' or 'false, it specifies if the text should keep changing indefinitely or not. **data-period** specifies the time it will take each text to be typed. Meanwhile **data-set** takes the texts to be typed.
