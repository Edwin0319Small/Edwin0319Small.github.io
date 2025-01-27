class AllWebsiteList{

    constructor(data){
        this.webList = data
        this.container = document.querySelector('.multiple-websites')
    }

    createHTML(web){
        let html = document.createElement('div')
        html.innerHTML = `
        <div class="page-container">
            <div class="website-container">
                <div class="website-container-cards">
                
                </div>
                <img class="website-container-left-arrow narrow-invalid" src="./src/imgs/left-chevron.png" alt="">
                <img class="website-container-right-arrow" src="./src/imgs/right-chevron.png" alt="">
                <a class="website-container-name" href="${web.url}">
                    ${web.name}
                </a>
            </div>
        </div>
        `
        for(let i = 0; i < web.imgsNumber; i++){
            let website_container = html.querySelector('.website-container-cards')
            website_container.insertAdjacentHTML('beforeend', `<div class="website-container-cards-card"></div>`)
        }
        
        this.sliderInit(html, web)
        // 纯文本，还不能加event
        let htmlText = html.innerHTML
        return htmlText
    }

    sliderInit(html, web){
        let imgs = html.querySelectorAll('.website-container-cards-card')
        imgs.forEach((img, index) => {
            img.style.backgroundImage = `url("./src/imgs/websites_imgs/${web.imgsFolderName}_imgs/${web.imgsFolderName}_${index + 1}.png")`
            img.style.backgroundRepeat = "no-repeat"
            img.style.backgroundPosition = "center"
            img.style.backgroundSize = "cover"
        })
    }

    arrowEvent(){
        let webs = this.container.querySelectorAll(".page-container")
        webs.forEach((html)=>{
            let imgs = html.querySelectorAll('.website-container-cards-card')
            let cards = html.querySelector(".website-container-cards")
            let left_arrow = html.querySelector('.website-container-left-arrow')
            let right_arrow = html.querySelector('.website-container-right-arrow')
            let current_index = 0
            left_arrow.addEventListener('click', () => {
                if (current_index > 0) {
                    right_arrow.classList.remove('narrow-invalid')
                    current_index--
                    cards.style.transform = `translateX(-${current_index * 100}%)`
                }
                if (current_index == 0) {
                    if (!left_arrow.classList.contains('narrow-invalid')) {
                        left_arrow.classList.add('narrow-invalid')
                    }
                }
            })
            right_arrow.addEventListener('click', (e) => {
                if (current_index < imgs.length - 1) {
                    left_arrow.classList.remove('narrow-invalid')
                    current_index++
                    cards.style.transform = `translateX(-${current_index * 100}%)`
                }
                if (current_index == imgs.length - 1) {
                    if (!right_arrow.classList.contains('narrow-invalid')) {
                        right_arrow.classList.add('narrow-invalid')
                    }
                }
            })
        })
    }

    append(html){
        // this.container.appendChild(html)
        this.container.insertAdjacentHTML('beforeend', html)
    }

    listInit(){
        this.webList.forEach((web)=>{
            const html = this.createHTML(web)
            this.append(html)
            this.arrowEvent()
        })
    }

    static init(data){
        if(this.createList instanceof AllWebsiteList){
            console.log("已經創建過了")
        }
        else{
            this.createList = new this(data)
            this.createList.listInit()
        }
    }

    static createList = null

}


export{AllWebsiteList}