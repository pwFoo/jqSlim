/**
 * Insert before element
 *
 * @param html Content to insert
 */
$.prototype.before = function(html) {
    return this.each(function(element) {
        element.insertAdjacentHTML('beforebegin', html);
    });
};


/**
 * Insert before element
 *
 * @param html Content to insert
 */
$.prototype.after = function(html) {
    return this.each(function(element) {
        element.insertAdjacentHTML('afterend', html);
    });
};
