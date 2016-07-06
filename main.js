(function(document) {
  'use strict';

  var app = document.querySelector('#app');
  
})(document);

var toastGroupTemplate = document.querySelector('#toastGroup');
toastGroupTemplate.showToast = function() {
  document.querySelector('#toast').show();
}
