!function () {
    var view = document.querySelector('#topNavBar');
    var controller = {
        view: null,
        aTags:null,
        init: function (view) {
            this.view = view;
            this.aTags = view.querySelectorAll("nav.menu > ul li > a");
            this.initAnimation();
            this.bindEvents();
        },
        initAnimation:function(){
             //缓动动画
             function animate(time) {
                requestAnimationFrame(animate);
                TWEEN.update(time);
            }
            requestAnimationFrame(animate);
        },
        bindEvents:function(){
            let aTags = this.aTags;
            console.log(aTags);
            for (let i = 0; i < aTags.length; i++) {
                aTags[i].onclick = function (x) {
                    console.log(x.currentTarget);
                    x.preventDefault();
                    let a = x.currentTarget;
                    let href = a.getAttribute('href');
                    let element = document.querySelector(href);
                    scrollToElement(element);
                }
            }
        },
        scrollToElement:function(element){
            let top = element.offsetTop;
            let currentTop = window.scrollY;
            let targetTop = top - 80;
            var coords = { y: currentTop };
            let s = targetTop - currentTop;
            let t = Math.abs((s / 100) * 300);
            if (t > 500) { t = 500 };           // 做了一些处理
            var tween = new TWEEN.Tween(coords)
                .to({ y: targetTop }, t)
                .easing(TWEEN.Easing.Quadratic.Out)
                .onUpdate(function () {
                    window.scrollTo(0, coords.y)
                })
                .start();
        },
    }
    controller.init(view)
}.call()
