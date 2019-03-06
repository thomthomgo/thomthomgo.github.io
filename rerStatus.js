goog.require('goog.dom');
goog.require('goog.dom.TagName');

function getRerStatus() {
  var newHeader = goog.dom.createDom(goog.dom.TagName.H3, {'style': 'background-color:#EEE'},
    'Non !');
  goog.dom.appendChild(document.body, newHeader);
}