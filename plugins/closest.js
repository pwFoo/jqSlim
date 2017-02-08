/**
 * Closest single ancestors element matches selector
 * http://clubmate.fi/jquerys-closest-function-and-pure-javascript-alternatives/
 *
 * @param selector Searched for matches
 *
 * ToDo:
 * - jQuery can handle collections too!
 */
$.prototype.closest = function(selector) {
    element = this[0];  // single element
    //return this.each(function(element) {
        //console.log("MATCH: " + $(element).is(selector));
        return ($(element).is(selector) ? element : $(element.parentNode).closest(selector));
    //});
};
