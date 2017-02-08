$.prototype.attr = function(a, b) {
    if (this.length === 0) return false;
    return this.each(function(c) {
      c.setAttribute(a, b);
    });
/*
    return b === []._ ? this[0].getAttribute(a) : this.each(function(c) {
      c.setAttribute(a, b);
  });*/
};

$.prototype.removeAttr = function(a) {
  return this.each(function(b) {
    b.removeAttribute(a);
  });
};

$.prototype.hasAttr = function(a) {
  return this[0].hasAttribute(a);
};
