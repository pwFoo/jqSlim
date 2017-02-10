/**
 * Fade out elements
 * Depends on show() plugin!
 *
 * @param duration Animation duration
 */
$.prototype.fadeOut = function(duration) {
    return this.each(function(element) {
        // stop if already hidden
        if (element.dataset._ki_opacity !== []._) return;   // skip if undefined
        // init vars
        var style = element.style, step = 25/(duration || 700);
        // set helper attribute with element opacity
        element.dataset._ki_opacity = style.opacity;
        // get current element opacity
        style.opacity = style.opacity || getComputedStyle(element, null).opacity;

        // fade out and then hide() element
        (function fade() {
            (style.opacity -= step) < 0 ? $(element).hide() : setTimeout(fade, 25);
        })();
    });
}


/**
 * Fade in elements
 * Depends on hide() plugin!
 *
 * @param duration Animation duration
 */
$.prototype.fadeIn = function(duration) {
    return this.each(function(element) {
        // stop if already hidden
        if (element.dataset._ki_opacity === []._) return;   // skip if undefined
        // init vars
        var style = element.style, step = 25/(duration || 700);
        // show element first
        $(element).show();
        // read value and remove helper attribute
        value = element.dataset._ki_opacity || ''
        delete element.dataset._ki_opacity;
        // then fade in by opacity
        (function fade() {
            (style.opacity = parseFloat(style.opacity)+step) > 1 ? style.opacity = value : setTimeout(fade, 25);
        })();
    });
}
