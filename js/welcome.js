!function () {
  var view = document.querySelector('#siteWelcome');
  var controller = {
    view: view,
    init: function () {
      // 移除welcome
      setTimeout(function () {
        view.classList.remove('active');
      }, 1000);
    }
  }
  controller.init()
}.call()
