blink.jquery
============

The blink shows a blinking cursor known from a tty aka terminal (Unix/Linux user should know it) or from the matrix movie.

On mouse enter in selected elements this cursor will be append after it an blink (changing an underscore and background color). The timeout and the color of underscore/background can be given as parameters.

On mouse out from given elements it will be removed.

## Usage

A simple example:

    $('h1,h2,h3').blink();

Usage with parameters:

    $('h1,h2,h3').blink({'timeout': 300, 'color': 'red'});
    
## Parameters

    