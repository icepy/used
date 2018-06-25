'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = parseUrlToLocation;
var urlReg = /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/;
var blanks = '       ';
var fields = ['url', 'scheme', 'slash', 'host', 'port', 'path', 'query', 'hash'];

function parseUrlToLocation(url, parseQueryString) {
  var result = urlReg.exec(url);
  var obj = Object.create(null);
  fields.forEach(function (field, i) {
    obj[field] = result[i];
  });
  if (typeof parseQueryString === 'string') {
    return obj[parseQueryString];
  }
  return obj;
}
//# sourceMappingURL=parseUrlToLocation.js.map