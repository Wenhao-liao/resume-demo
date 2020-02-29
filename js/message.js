!function(){
    var  view = document.querySelector('section.message');
    var  model = {
        init:function(){
            AV.init({
                appId: "Rrkvlxd3lDt6lzQ3076uHPvD-gzGzoHsz",
                appKey: "rJRw76zmAdJf9lvMG5MkgY2l",
                serverURLs: "https://rrkvlxd3.lc-cn-n1-shared.com"
            });
        },
        // 获取数据
        fetch:function(){
            var query  = new AV.Query('Message');
            return query.find()      // 返回获取的数据去做相关的操作
        },
        // 创建数据
        save:function(name,content){
             // 创建或者获取Message表
             var Message = AV.Object.extend('Message');
             // 在表中创建一行数据
             var Message = new Message();
             // 数据内容是 content, 保存
             Message.set('name', name);
             Message.set('content', content);
             // 如果保存成功，则运行 alert('保存成功')
             return Message.save()
        }
    }
    var  controller = {
        view:null,
        model:null,
        init:function(view,model){
            this.view = view;
            this.model = model;
            this.messageList = view.querySelector('#messageList');
            this.form = view.querySelector('#postMessage');
            this.initAV();
            this.loadMessage();
            this.bindEvents();
        },
        initAV:function(){
            var { Query,User } = AV;
            this.model.init()
        },
        loadMessage:function(){
            this.model.fetch()
            .then(function (Messages) {
                let array = Messages.map((item) => {
                    return item.attributes
                })
                array.forEach((item => {
                    let li = document.createElement('li');
                    li.innerText = `${item.name} : ${item.content}`;
                    this.messageList.append(li)
                }))
                console.log(array)
                },function(error){
                    // 异常处理
                
            });
        },
        bindEvents:function(){
            let myForm = this.form;
            myForm.addEventListener('submit',(e) => {
                e.preventDefault();
                let name = myForm.querySelector('input[name=name]').value;
                let content = myForm.querySelector('input[name=content]').value;
                console.log(this.model)
                this.model.save(name,content)
                .then(function (Message) {
                    // window.location.reload()
                    let li = document.createElement('li');
                    li.innerText = `${Message.attributes.name} : ${Message.attributes.content}`;
                    messageList.append(li)
                    console.log('保存成功')
                })
            })
        }   
    }
    controller.init(view,model)
}()
