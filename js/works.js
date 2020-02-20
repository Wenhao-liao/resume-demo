!function () {
    var view = document.querySelector('#siteWorks');
    var controller = {
        view: null,
        init: function (view) {
            this.view = view;
            this.bindEvents();
        },
        bindEvents:function(){
            this.clickPortfolio('#portfolio1','bar state-1');
            this.clickPortfolio('#portfolio2','bar state-2');
            this.clickPortfolio('#portfolio3','bar state-3');
        },
        clickPortfolio:function(portfolio,classNameStr){
            view.querySelector(portfolio).onclick = function () {
                portfolioBar.className = classNameStr;
            }
        },
    }
    controller.init(view)
}.call()

