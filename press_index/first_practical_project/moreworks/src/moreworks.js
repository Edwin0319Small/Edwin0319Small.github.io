import {cursorInit} from "../../src/components/cursorEffect.js"
import pageInit from '../../src/components/pageInit.js'
cursorInit()
pageInit()

gsap.registerPlugin(ScrollTrigger)

const section = gsap.utils.toArray('.block')
let allWidth = 0
section.forEach(item => {
  allWidth += item.getBoundingClientRect().width
})

const scrollContentTrigger = gsap.to('.scroll-content', {
    // offsetWidth 包邊框
    // clientWidth 不包邊框
    x: -allWidth + document.querySelector('.scroll-content').offsetWidth,
    ease: 'none',
    scrollTrigger: {
        trigger: '.scroll-content',
        pin: true,
        scrub: 1,
        // Beyond the start, default start is trigger start
        end: `+=${allWidth - document.querySelector('.scroll-content').offsetWidth}`,
        onLeave: () => {
            console.log('leave')
            document.body.classList.add('black')
        },
        onEnterBack: ()=>{
            console.log('enter back')
            document.body.classList.remove('black')
        }
    }
})


const fontTrigger = gsap.to('.font-graphy', {
    x: -500,
    dease: 'none',
    // 只能純對象
    scrollTrigger: {
        trigger: '.scroll-content',
        scrub: 1,
        // 文字box移到屏幕右1/3開始
        start: document.querySelector('.project-cards-block').getBoundingClientRect().width - innerWidth / 3,
        end: `+=${innerWidth}`
    }
})

// 未改變視窗前也要判斷是不手機
if(innerWidth < 500){
    scrollContentTrigger.scrollTrigger.disable()
    fontTrigger.scrollTrigger.disable()
    console.log('小螢幕')
}
if('ontouchstart' in document.documentElement === true){
    console.log('touch device')
    document.querySelector('canvas').classList.add('display-none')
    document.querySelector('.mousePoint').classList.add('display-none')
}
// 當視窗大小改變時
window.addEventListener('resize', ()=>{
    if(innerWidth < 500){
        scrollContentTrigger.scrollTrigger.disable()
        fontTrigger.scrollTrigger.disable()
        console.log('小螢幕')
    }
    else{
        scrollContentTrigger.scrollTrigger.enable()
        fontTrigger.scrollTrigger.enable()
        console.log('大螢幕')
    }

    if('ontouchstart' in document.documentElement === true){
        console.log('touch device')
        document.querySelector('canvas').classList.add('display-none')
        document.querySelector('.mousePoint').classList.add('display-none')
    }
    else{
        console.log('pc device')
        document.querySelector('canvas').classList.remove('display-none')
        document.querySelector('.mousePoint').classList.remove('display-none')
    }
})