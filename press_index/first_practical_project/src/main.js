import {cursorInit} from './components/cursorEffect.js'
import WorkList from './components/workList.js'
import pageInit from './components/pageInit.js'

pageInit()

const worksData = [
    {
      title: 'Recongroup',
      subTitle: 'Corporate Design / Webdesign & Development',
      imgUrl: './src/imgs/recon.jpg',
      targetUrl: "#"
    },
    {
      title: 'Glassland',
      subTitle: 'Webdesign & Development',
      imgUrl: './src/imgs/glassland-screen-2.gif',
      targetUrl: "#"
    },
    {
      title: 'PEFC',
      subTitle: 'Graphic Design / Animations / SM',
      imgUrl: './src/imgs/pefc-sujet.jpg',
      targetUrl: "#"
    },
    {
      title: 'Biosphere Lab Lungau',
      subTitle: 'Corporate Design / Webdesign & Development / Social Media / Newsletter',
      imgUrl: './src/imgs/biosphere-lab-box.jpg',
      targetUrl: "#"
    },
    {
      title: 'ZIID',
      subTitle: 'Corporate Design / Webdesign / Graphic Design / Newsletter ',
      imgUrl: './src/imgs/ziid-flyer-2.jpg',
      targetUrl: "#"
    },
    {
      title: 'Hotel Gambswirt',
      subTitle: 'Webdesign / Social Media / Photography',
      imgUrl: './src/imgs/gambswirt-screen-2.jpg',
      targetUrl: "#"
    },
    {
      title: 'More works',
      subTitle: 'More works & photography',
      imgUrl: './src/imgs/HBM-3.jpg',
    // 這裏的相對路徑是index.html, 和index.html同一層的moreworks folder
      targetUrl: "./moreworks"
    }
]
  

console.log(cursorInit)
cursorInit()

WorkList.init(worksData)


// console.log(gsap)
gsap.set('.circle-img', {
    opacity: 0,
    scale: 0,
    // 設置基本偏移量，為了居中
    xPercent: -50,
    yPercent: -50
})

const workElement = $('.one-work')
workElement.hover(function(e){
    // this 指的是當前滑鼠所在的元素
    // console.log(this, e.currentTarget)
    const circle = this.querySelector('.circle-img')
    gsap.to(circle, {
        x: e.offsetX,
        y: e.offsetY,
        scale: 1,
        opacity: 1,
        duration: 0.2
    })
}, function(e){
    const circle = e.currentTarget.querySelector('.circle-img')
    gsap.to(circle, {
        scale: 0,
        opacity: 0,
        duration: 0.2
    })
})

workElement.mousemove((e)=>{
    gsap.to('.circle-img', {
        x: e.offsetX,
        y: e.offsetY
    })
})

// 底部文字小圖標點擊修改
$('.footer-info-right').click(function(){
    $(this).toggleClass('ticked')
})

/* 切換主題 */
$('.info-header-nav-badge-switch label').click(function(e){
    // console.log(e.target)
    // 點擊時會連input也會觸發
    if(!e.target.classList.contains('fakeCheckBox')){
        $('body').toggleClass('fugu')
        $('.info-header-nav-badge-switch-text > span').each(function(i, dom){
            // console.log(dom.style.visibility, i, dom)
            if(dom.style.visibility == 'visible'){
                dom.style.visibility = 'hidden'
            }
            else{
                dom.style.visibility = 'visible'
            }
        })
    }
})



// // 測試
// const title = document.querySelector('.info-header-text-detail')
// // 把title轉成對象輸出
// console.dir(title)
// // 觸控屏上觸發
// if('ontouchstart' in document.documentElement === true){
//     title.addEventListener('touchstart',()=>{
//         console.log('touchstart')
//     })
// }
// else{
//     title.addEventListener('click', ()=>{
//         console.log('click')
//     })
// }
// // 或者合兩為一
// title.addEventListener('pointerdown', ()=>{
//   console.log('down')
// })


window.addEventListener('resize', () => {
  // 觸控屏不顯示canvas
  if('ontouchstart' in document.documentElement === true){
    document.querySelector('canvas').classList.add('display-none')
    document.querySelector('.mousePoint').classList.add('display-none')
    document.querySelectorAll('.circle-img').forEach(circle => {
        circle.classList.add('display-none')
    })
  }
  else{
    document.querySelector('canvas').classList.remove('display-none')
    document.querySelector('.mousePoint').classList.remove('display-none')
    document.querySelectorAll('.circle-img').forEach(circle => {
        circle.classList.remove('display-none')
    })
  }
})