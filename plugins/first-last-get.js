/**
 * Get first element in collection
 *
 * @return Single DOM element object
 */
$.prototype.first = function() {
    return $(this[0]);
};


/**
 * Get last element in collection
 *
 * @return Single DOM element object
 */
$.prototype.last = function() {
    return $(this[this.length - 1]);
};


/**
 * Get element in collection
 *
 * @param index
 * @return Single DOM element object
 */
$.prototype.get = function(index) {
    return $(this[index]);
};
