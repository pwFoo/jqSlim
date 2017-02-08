/**
 * Check single element matches against selector
 * modern browsers, IE9+
 *
 * @param selector to check against the current element
 * @return boolean
 *
 */
$.prototype.is = function(selector) {
    element = this[0];
    return (
        element.matches ||
        element.matchesSelector ||
        element.msMatchesSelector ||
        element.webkitMatchesSelector
    ).call(element, selector);
};
