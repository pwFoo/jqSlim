/**
 * Trigger event on current colletion of elements
 * modern browsers, IE9+
 *
 * @param type Event type to trigger
 */
$.prototype.trigger = function(type) {
    var event = document.createEvent('HTMLEvents');
    event.initEvent(type, false, true);

    // Trigger element on each element in collection
    this.each(function(element) {
        element.dispatchEvent(event);
    });
};
