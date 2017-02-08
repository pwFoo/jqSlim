/**
 * Insert element
 * Maybe replacement for append / prepend
 *
 * @param insertElement new element
 * @param position optional, prepend (0), append (null) or insert before position reference element
 */
/*
$.prototype.insert = function(insertElement, position) {
    return this.each(function(element) {
        position = (position === 0 ? element.firstChild : (!position ? null : position[0]));
        console.log(position);
        element.insertBefore(insertElement, position);
    });
};
*/


/**
 * Append an element to the current one
 *
 * @param appendElement element to append
 */
$.prototype.append = function(appendElement) {
    //return this.insert (appendElement, null);
    return this.each(function(element) {
        element.appendChild(appendElement);
    });
};


/**
 * Prepend / insert element to current one
 *
 * @param insertElement element to prepend or insert before position
 * @param position optional, element will be inserted before reference
 */
$.prototype.prepend = function(insertElement) {
    //return this.insert (appendElement, 0);
    return this.each(function(element) {
        element.insertBefore(insertElement, element.firstChild);
    });
};
