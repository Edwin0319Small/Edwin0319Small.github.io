import * as F from './functions.js'
let my_row = [...document.querySelectorAll('.big-container .row')]

const arr_students = [0, '何淑茵', '余柏熙', '吳凱威', '李嘉軒', '卓恆亮', '卓凱晴', '林沁蕾', '林思晴', '張博睿', '梁芷晴','梁芷琳', '梁家臻','梁滔兒', '陳施睿', '陳敏莜', '陳尊毅', '陳遠超', '曾煒迪', '黃奕康', '黃梓恒', '楊晨毅', '葉凱琳','鄒雅汶','雷嘉明', '劉玲', '劉源', '歐陽俊枝', '潘芷蘊', '蔣詩蓓', '黎文威', '戴璵璇', '薛君琳', '謝宇軒', '聶嘉怡','魏鈺灃', '譚凱欣', ]
const arr_gender = [0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 1, 0]
// let vis = new Array(37).fill(false)

const minimum = 1
const maximum = 36
let delate = 50
// var random = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum

let button = document.querySelector('.lottery button')

my_row.forEach((row)=>{
    for(let i = 0; i < 3;i++){  
        row.children[i].addEventListener('click',(e)=>{
            e.currentTarget.classList.toggle('font-red')
        })
    }
})

F.plan3(my_row, arr_students, arr_gender)

let working = false
button.addEventListener('click', ()=>{
    // console.log(button.getAttribute('mode'), typeof button.getAttribute('mode'))
    if(!working){
        async function lucky(){
            working = true
            document.querySelector('.header h1').innerText = "運行中"

            await F.change_color(my_row, button, delate)

            document.querySelector('.header h1').innerText = "運行結束"
            working = false

            if(button.getAttribute('mode') == "1"){
                button.setAttribute('mode', "0")
                F.plan3(my_row, arr_students, arr_gender)
                button.innerText = "開始抽籤"
            }
            else{
                button.setAttribute('mode', "1")
                button.innerText = "重置座位"
            }
        }
        lucky()
    }
})