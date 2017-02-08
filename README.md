# jqSlim

jqSlim is a super-tiny jQuery-like API JavaScript library (781 bytes minified | 449 bytes gzipped)

### Browser support

[jqSlim](https://github.com/pwFoo/jqSlim/blob/master/jqSlim.js) version is supported by the following browsers: IE9+, Chrome 6+, Safari 5+, Firefox 6+, Opera 11.5+.

## What can I do with jqSlim?

With jqSlim you can do the basic stuff jQuery can, for example:

### DOM Ready?

```javascript
$(function () {
  // this will be executed when the dom is ready!
  alert('Hey the DOM is ready ;)');
});
```
**This was just jqSlim, no jQuery**

### CSS Selectors
Use any CSS selector that exists to get elements from the DOM.

```javascript
$('p:nth-last-of-type(2)');
$('[attribute|=value]');
$('p:not(.note)');
$('p:empty');
```

[See a list of all CSS selectors](https://drafts.csswg.org/selectors-3/#selectors)


### Events
Yes, events with the known `.on()` and `.off()` methods

```html
<button>jqSlim</button>
```
```javascript
$(function () {
  // ok now that the dom is ready i would like to add some events
  var alertMyName = function () {
    alert('My name is ' + this.textContent); // will allert 'jqSlim'
  };

  $('button').on('click', alertMyName);
  // to turn it off just use .off()
  //$('button').off('click', alertMyName);
});
```
You can add any JavaScript event even touch events for mobile, under the hood jqSlim uses addEventListener, so feel free to use any valid [DOM event](https://developer.mozilla.org/en-US/docs/Web/Events).

### .each()
The `each()` method is also included in the core of jqSlim for easy iteration on a DOM collection.

```javascript
$(function () {

  // get all p tags
  $('p').each(function (elem, i) {

    // change color to red
    elem.style.color = 'red';

    // append the index to the text
    elem.textContent += i;
  });
});
```

### Keep the chain!
All jqSlim methods are chainable, just like jQuery.

## Plugins?
Yeah, you can write plugins for jqSlim if you want, fork the project, keep them super super xxs and I promise to merge them into the official repo.

### ki.extend

Check out a lot of already made extensions for ki.js here: [ki.extend.js](https://github.com/james2doyle/ki.extend.js) (thanks to [james2doyle](https://github.com/james2doyle))

### Ajax plugin

The great [ajax module](https://github.com/fdaciuk/ajax) from [fdaciuk](https://github.com/fdaciuk) is converted to [jqSlim ajax plugin](https://github.com/pwFoo/jqSlim-ajax).

### jqSlim plugins

Updated [ki.extend plugins](https://github.com/james2doyle/ki.extend.js) some additional plugins are added to the plugin directory.

* fadeIn() / fadeOut
* closest()

### How to make plugins?
Just add your methods to the prototype of jqSlim and you're done.
For example, let's add a `text()` method for setting or getting the text of an element, in the tiniest way I can think of:

```javascript
// minified is 106 bytes
$.prototype.text = function (a) {
  return a === a + '' ? this.each(function (b) {
    b.textContent = a
  }) : this[0].textContent
};
```

Now use the plugin just like the other methods:
```javascript
$(function () {
  // <p>hello</p>

  // get the text from the p tag
  console.log($('p').text()); // hello

  // set another text
  $('p').text('bye'); // bye
});
```
<hr>
<strong>Create your own plugin and let's make the tiniest JavaScript Library ever!
Remember to write byte-saving code, see this [useful resource for JavaScript byte-saving techniques](https://github.com/jed/140bytes/wiki/Byte-saving-techniques) written by 140byt.es community</strong>
<hr>

## Where can I use jqSlim?

In every cool and modern browser.

## License
See [LICENSE.txt](https://raw.github.com/pwFoo/jqSlim/master/LICENSE.txt)
