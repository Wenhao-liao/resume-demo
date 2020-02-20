!function(){
    // 给所有section添加offset类
    let specialTags = document.querySelectorAll('[data-x]');
    for(let i=0;i<specialTags.length;i++){
        specialTags[i].classList.add('offset')
    }
    console.log(specialTags);

    // 一开始执行
    setTimeout(function(){
        findClosestAndRemoveOffset();
    },1100)

    window.addEventListener('scroll',function(){
        findClosestAndRemoveOffset();
    })

    function findClosestAndRemoveOffset(){
        // 找到最近的section
        let specialTags = document.querySelectorAll('[data-x]');
        let minIndex = 0;
        for(let i = 1;i<specialTags.length;i++){
            if(Math.abs(specialTags[i].offsetTop - window.scrollY) < Math.abs(specialTags[minIndex].offsetTop - window.scrollY)){
            minIndex = i;
            }
        }
        // 顶部tab栏高亮
        let id = specialTags[minIndex].id;
        let a = document.querySelector('a[href="#' + id + '"]');
        let li = a.parentNode;
        let brotherAndMe = li.parentNode.children;
        for(let i=0;i<brotherAndMe.length;i++){
            brotherAndMe[i].classList.remove('highLight');
        }
        li.classList.add('highLight');

        // 移除设定好的offset
        specialTags[minIndex].classList.remove("offset");
    }
}.call()
