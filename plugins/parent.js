/**
 * Get parent DOM element
 *
 * ToDo:
 * - empty array if not exists
 */
$.prototype.parent = function() {
    return $(this[0].parentNode);
};
