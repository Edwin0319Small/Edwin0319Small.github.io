let my_row = [...document.querySelectorAll('.my-row')]

const arr_students = [0, '何淑茵', '余柏熙', '吳凱威', '李嘉軒', '卓恆亮', '卓凱晴', '林沁蕾', '林思晴', '張博睿', '梁芷晴','梁芷琳', '梁家臻','梁滔兒', '陳施睿', '陳敏莜', '陳尊毅', '陳遠超', '曾煒迪', '黃奕康', '黃梓恒', '楊晨毅', '葉凱琳','鄒雅汶','雷嘉明', '劉玲', '劉源', '歐陽俊枝', '潘芷蘊', '蔣詩蓓', '黎文威', '戴璵璇', '薛君琳', '謝宇軒', '聶嘉怡','魏鈺灃', '譚凱欣', ]
let vis = new Array(37).fill(false)
// console.log(vis)
// console.log(arr_students.length)
const minimum = 1
const maximum = 36
var random = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum
my_row.forEach((row)=>{
    // console.log(row)
    for(let i = 0; i < 3;i++){
        random = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum
        while(vis[random]){
            random = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum
        }
        row.children[i].innerHTML = arr_students[random]
        // console.log(row.children[i])
        vis[random] = true
        row.children[i].addEventListener('click',(e)=>{
            e.currentTarget.classList.toggle('my-hidden')
        })
    }
})

const button = document.querySelector('button')
button.addEventListener('click', ()=>{
    document.body.classList.toggle('my-gray')
})
