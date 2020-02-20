!function () {
  var view = document.querySelector('#topNavBar');
  var controller = {
    view: view,
    init: function () {
      window.addEventListener('scroll', function () {
        if (window.scrollY > 0) {
          view.classList.add('sticky');
        } else {
          view.classList.remove('sticky');
        }
      })

      let lis = view.querySelectorAll("nav.menu > ul > li");
      for (let i = 0; i < lis.length; i++) {
        lis[i].onmouseenter = function (x) {
          x.currentTarget.classList.add('active')
        }
        lis[i].onmouseleave = function (x) {
          x.currentTarget.classList.remove('active')
        }
      }
    }
  }
  controller.init()
}.call()
