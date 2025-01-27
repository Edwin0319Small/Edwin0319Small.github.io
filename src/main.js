


// move to start section
let intro_btn = document.querySelector('.simple-introduction  button')
intro_btn.addEventListener('click', () => {
    var el = document.querySelector(".section-two");
    el.scrollIntoView({
        block: "start",
        behavior: "smooth"
    })
})
intro_btn.addEventListener('mousedown', () => {
    intro_btn.style.boxShadow = "0 0 0";
})
intro_btn.addEventListener('mouseup', () => {
    intro_btn.style.boxShadow = "0px 4px 2px rgba(0, 0, 0, 0.2)";
})



// set the websites imgs
import {AllWebsiteList} from "./components/creat_website_all.js"
let all_website_list = [
    {
        name: "my first practical project",
        imgsFolderName: "first_practical_project",
        url: "./press_index/first_practical_project/",
        imgsNumber: 5
    },
    {
        name: "my interview website",
        imgsFolderName: "my_interview_website",
        url: "./press_index/my_interview_website/",
        imgsNumber: 3
    },
    {
        name: "module A",
        imgsFolderName: "module_A",
        url: "./press_index/04_module_a/",
        imgsNumber: 4
    },
    {
        name: "module B",
        imgsFolderName: "module_B",
        url: "./press_index/04_module_b/",
        imgsNumber: 2
    },
    {
        name: "chinese idiom practice",
        imgsFolderName: "chinese_idiom_practice",
        url: "./press_index/Chinese_idiom_practice/",
        imgsNumber: 3
    },
    {
        name: "school milk",
        imgsFolderName: "school_milk",
        url: "./press_index/school_milk/",
        imgsNumber: 3
    },
    {
        name: "adjust seat",
        imgsFolderName: "adjust_seat",
        url: "./press_index/adjust_seat/",
        imgsNumber: 2
    },
    
    
]
AllWebsiteList.init(all_website_list)
/*
// let websites_name = [
//     "module_A",
//     "module_B",
//     "chinese_idiom_practice",
//     "school_milk"
// ]

// let websites = document.querySelectorAll('.page-container')
// // forEach每个元素执行一次提供的回调函数，所以currentIndex互不影響
// websites.forEach((page, wi) => {
//     let website = page.querySelector('.website-container')
//     let cards = website.querySelector(".website-container-cards")
//     let imgs = website.querySelectorAll('.website-container-cards-card')
//     let left_arrow = website.querySelector('.website-container-left-arrow')
//     let right_arrow = website.querySelector('.website-container-right-arrow')
//     let current_index = 0
//     left_arrow.addEventListener('click', () => {
//         if (current_index > 0) {
//             right_arrow.classList.remove('narrow-invalid')
//             current_index--
//             console.log(current_index)
//             cards.style.transform = `translateX(-${current_index * 100}%)`
//         }
//         if (current_index == 0) {
//             if (!left_arrow.classList.contains('narrow-invalid')) {
//                 left_arrow.classList.add('narrow-invalid')
//             }
//         }
//     })
//     right_arrow.addEventListener('click', () => {
//         if (current_index < imgs.length - 1) {
//             left_arrow.classList.remove('narrow-invalid')
//             current_index++
//             console.log(current_index)
//             cards.style.transform = `translateX(-${current_index * 100}%)`
//         }
//         if (current_index == imgs.length - 1) {
//             if (!right_arrow.classList.contains('narrow-invalid')) {
//                 right_arrow.classList.add('narrow-invalid')
//             }
//         }
//     })
//     imgs.forEach((img, index) => {
//         img.style.backgroundImage = `url("./src/imgs/${websites_name[wi]}_imgs/${websites_name[wi]}_${index + 1}.png")`
//         img.style.backgroundRepeat = "no-repeat"
//         img.style.backgroundPosition = "center"
//         img.style.backgroundSize = "cover"
//     })
// })
*/

// crosswise scroll
gsap.registerPlugin(ScrollTrigger)
let allWidth = 0
gsap.utils.toArray('.page-container').forEach((page, index) => {
    allWidth += page.getBoundingClientRect().width
})
gsap.to('.section-two', {
    x: -allWidth + document.querySelector('.section-two').clientWidth,
    ease: 'none',
    scrollTrigger: {
        trigger: '.section-two',
        pin: true,
        scrub: 1,
        start: 'top top',
        end:`+=${allWidth - document.querySelector('.section-two').clientWidth}px`,
    }
})
