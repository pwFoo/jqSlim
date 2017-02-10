/**
 * Hide current element
 */
$.prototype.hide = function() {
    return this.each(function(element) {
        if (element.dataset._ki_display === []._) { // is undefined
            // set helper attribute with element style or just null value
            element.dataset._ki_display = element.style.display;
            element.style.display = 'none';
        }
    });
};


/**
 * Show current element
 */
$.prototype.show = function() {
    return this.each(function(element) {
        if (element.dataset._ki_display !== []._) { // is undefined
            // restore initial value or computed default display style
            element.style.display = element.dataset._ki_display || '';
            delete element.dataset._ki_display;
        }
    });
};
