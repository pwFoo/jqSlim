/**
 * Remove current colletion of elements
 */
$.prototype.remove = function() {
  return this.each(function(element) {
    element.parentNode.removeChild(element);
  });
};
