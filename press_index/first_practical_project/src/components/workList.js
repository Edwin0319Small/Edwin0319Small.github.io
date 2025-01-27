
export default class WorkList{

    constructor(data){
        this.listData = data
        this.targetElement = document.querySelector('.works-container')
    }

    createWorkDom(workData){
        const htmlText = `
        <div class="one-work">
            <div class="one-work-text-box">
                <a class="one-work-title" href=${workData.targetUrl}/>${workData.title}</a>
                <span class="move-text">${workData.subTitle}</span>
            </div>
            <div class="circle-img">
                <img src="${workData.imgUrl}" alt="">
            </div>
        </div>
        `
        return htmlText
    }

    append(html){
        this.targetElement.insertAdjacentHTML('beforeend', html)
    }
    listInit(){
        this.listData.forEach((work)=>{
            const html = this.createWorkDom(work)
            this.append(html)
        })
    }

    static init(data){
        // 靜態方法裏的this指向class本身
        // 指向类本身，而不是类的实例。这样可以在不依赖于特定实例的情况下，对类进行一些全局的配置或初始化。
        
        // 无需实例化即可调 WorkList.init()
        //  you can call the init method directly on the WorkList class without creating an instance of it.
        if(this.createList instanceof WorkList){
            console.log("已經創建過了")
        }
        else{
            this.createList = new this(data)
            this.createList.listInit()
        }
    }

    //单例模式的实现
    static createList = null
}