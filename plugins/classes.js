/*
 * map some classlist functions to the jQuery counterpart
 */
var props = ['addClass', 'removeClass', 'toggleClass'],
maps = ['add', 'remove', 'toggle'];

/**
 * addClass / removeClass / toggleClass
 *
 * @param value Class to handle
 */
props.forEach(function(prop, index) {
    $.prototype[prop] = function(value) {
        return this.each(function(element) {
            element.classList[maps[index]](value);
        });
    };
});

/**
 * Check if element class list contains class
 *
 * @param value Class to check
 */
$.prototype.hasClass = function(value) {
  return this[0].classList.contains(value);
};
