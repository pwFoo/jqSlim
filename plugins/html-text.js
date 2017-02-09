/**
 * Get / set text content
 *
 * @param text Optional value to set
 */
$.prototype.text = function(text) {
    return text === []._ ? this[0].textContent : this.each(function(element) {
        element.textContent = text;
    });
};


/**
 * Get / set html content
 *
 * @param html Optional value to set 
 */
$.prototype.html = function(html) {
    return html === []._ ? this[0].innerHTML : this.each(function(element) {
        element.innerHTML = html;
    });
};
