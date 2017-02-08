/*!
 * jqSlim - jQuery-like API super-tinyJavaScript library
 * A ki.js fork (Copyright (c) 2015 Denis Ciccale (@tdecs))
 * Copyright (c) 2017
 * Released under MIT license
 */
!function (document, array, prototype, element) {

    /*
     * init function (internal use)
     * selector = selector, dom element or function
     */
    function jqSlim(selector) {
        // debugging info
        //console.log("[init] selector: " + selector);
        array.push.apply(this, selector && selector.nodeType ? [selector] : '' + selector === selector ? query(selector) : element);
    }

    /*
     * improved query function
     * http://ryanmorr.com/abstract-away-the-performance-faults-of-queryselectorall/
     * selector = a css selector to get an array of elements
     */
    function query(selector) {
        // debugging info
        //console.log("[query] selector: " + selector);

        // Redirect simple selectors to the more performant function
        if (/^(#?[\w-]+|\.[\w-.]+)$/.test(selector)) {
            switch (selector.charAt(0)) {
                case '#':
                    // debugging info
                    //console.log("[query] --> case: getElementById");

                    // Handle ID-based selectors
                    return [document.getElementById(selector.substr(1))];
                case '.':
                    // debugging info
                    //console.log("[query] --> case: getElementsByClassName");

                    // Handle class-based selectors
                    // Query by multiple classes by converting the selector
                    // string into single spaced class names
                    var classes = selector.substr(1).replace(/\./g, ' ');
                    return [].slice.call(document.getElementsByClassName(classes));
                default:
                    // debugging info
                    //console.log("[query] --> case: getElementsByTagName");

                    // Handle tag-based selectors
                    return [].slice.call(document.getElementsByTagName(selector));
            }
        }

        // debugging info
        //console.log("[query] --> case: querySelectorAll");

        // Default to `querySelectorAll`
        return [].slice.call(document.querySelectorAll(selector));
    }

    /*
     * $ main function
     * selector = css selector, dom object, or function
     * http://www.dustindiaz.com/smallest-domready-ever
     * returns instance or executes function on ready
     */
    $ = function (selector) {
        // debugging info
        //console.log("[main$] selector: " + selector);

        // ToDo: Verify if "/c/" should be replaced with renamed variable "/array/" !?!?!?
        return /^f/.test(typeof selector) ? /c/.test(document.readyState) ? selector() : $(document).on('DOMContentLoaded', selector) : new jqSlim(selector);
    }

    // set jqSlim prototype
    $[prototype] = jqSlim[prototype] = $.fn = jqSlim.fn = {

        // default length
        length: 0,

        /*
        * on method
        * eventType = string event type i.e 'click'
        * eventFunction = function
        * return this
        */
        on: function (eventType, eventFunction) {
            return this.each(function (array) {
                array.addEventListener(eventType, eventFunction);
            });
        },

        /*
        * off method
        * eventType = string event type i.e 'click'
        * eventFunction = function
        * return this
        */
        off: function (eventType, eventFunction) {
            return this.each(function (array) {
                array.removeEventListener(eventType, eventFunction);
            });
        },

        /*
        * each method
        * use native forEach to iterate collection
        * callbackFunction = the function to call on each iteration
        * callbackFunctionThisValue = the this value for that function
        */
        each: function (callbackFunction, callbackFunctionThisValue) {
            array.forEach.call(this, callbackFunction, callbackFunctionThisValue);
            return this;
        },

        // for some reason is needed to get an array-like
        // representation instead of an object
        splice: array.splice,
    }

}( document, [], 'prototype');
