let my_row = [...document.querySelectorAll('.my-row')]

const arr_students = [0, '何淑茵', '余柏熙', '吳凱威', '李嘉軒', '卓恆亮', '卓凱晴', '林沁蕾', '林思晴', '張博睿', '梁芷晴','梁芷琳', '梁家臻','梁滔兒', '陳施睿', '陳敏莜', '陳尊毅', '陳遠超', '曾煒迪', '黃奕康', '黃梓恒', '楊晨毅', '葉凱琳','鄒雅汶','雷嘉明', '劉玲', '劉源', '歐陽俊枝', '潘芷蘊', '蔣詩蓓', '黎文威', '戴璵璇', '薛君琳', '謝宇軒', '聶嘉怡','魏鈺灃', '譚凱欣', ]
const arr_gender = [0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 1, 0]
let vis = new Array(37).fill(false)
// console.log(vis)
// console.log(arr_students.length)
const minimum = 1
const maximum = 36
var random = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum
const button = document.querySelector('button')

function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

let arr_assemble = []
my_row.forEach((row)=>{
    // console.log(row)
    /*
    // 男一齊 女一齊
    for(let i = 0; i < 3;i++){
        while(vis[random]){
            random = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum
        }
        if(i == 0) gender = arr_gender[random]
        while(vis[random] || arr_gender[random]!= gender){
            random = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum
        }
        row.children[i].innerHTML = arr_students[random]
        // console.log(row.children[i])
        vis[random] = true
        row.children[i].addEventListener('click',(e)=>{
            e.currentTarget.classList.toggle('my-hidden')
        })
    }
    */

    for(let i = 0; i < 3;i++){  
        row.children[i].addEventListener('click',(e)=>{
            e.currentTarget.classList.toggle('font-red')
        })
    }
})

for(let k = 1; k <= my_row.length; k++){
    let mod
    if(k <= 9){
        for(let i = 0; i < 3; i++){
            while(vis[random]){
                random = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum
            }
            if(i == 0){
                mod = Math.floor(Math.random() * 2)
                arr_assemble.push([])
            }
            if(mod == 0){
                if(i <= 1){
                    while(vis[random] || arr_gender[random] == 0){
                        random = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum
                    }
                }
                else{
                    while(vis[random] || arr_gender[random] == 1){
                        random = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum
                    }
                }
            }
            else if(mod == 1){
                if(i == 0){
                    while(vis[random] || arr_gender[random] == 1){
                        random = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum
                    }
                }
                else{
                    while(vis[random] || arr_gender[random] == 0){
                        random = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum
                    }
                }
            }
            vis[random] = true
            arr_assemble[k - 1].push(arr_students[random])
        }
    }
    else{
        for(let i = 0; i < 3; i++){
            while(vis[random]){
                random = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum
            }
            if(i == 0){
                mod = Math.floor(Math.random() * 2)
                arr_assemble.push([])
            }
            if(mod == 0){
                if(i <= 1){
                    while(vis[random] || arr_gender[random] == 1){
                        random = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum
                    }
                }
                else{
                    while(vis[random] || arr_gender[random] == 0){
                        random = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum
                    }
                }
            }
            else if(mod == 1){
                if(i == 0){
                    while(vis[random] || arr_gender[random] == 0){
                        random = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum
                    }
                }
                else{
                    while(vis[random] || arr_gender[random] == 1){
                        random = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum
                    }
                }
            }
            vis[random] = true
            arr_assemble[k - 1].push(arr_students[random])
        }
    }
}
console.log(arr_assemble)

for(let i = 0; i < 3; i++){
    my_row[0].children[i].innerHTML = arr_assemble[0][i]
}
for(let i = 0; i < 3; i++){
    my_row[5].children[i].innerHTML = arr_assemble[1][i]
}
for(let i = 0; i < 3; i++){
    my_row[6].children[i].innerHTML = arr_assemble[2][i]
}
for(let i = 0; i < 3; i++){
    my_row[11].children[i].innerHTML = arr_assemble[3][i]
}
let kk = 4
for(let k = 0; k < 12; k++){
    if(k == 0 || k == 5 || k == 6 || k == 11) continue
    for(let i = 0; i < 3; i++){
        my_row[k].children[i].innerHTML = arr_assemble[kk][i]
        // console.log(arr_assemble[kk][i], kk, i)
        // console.log(my_row[k])
    }
    kk++
}

async function change_color_inside(row, delate){
    for(let i = 0; i < 3; i++){
        await sleep(delate)
        if(button.getAttribute('mode') == "1"){
            row.children[i].classList.add('font-red')
        }
        else{
            row.children[i].classList.remove('font-red')
        }
    }
}

async function change_color_outside(delate){
    for(let row = 0; row < my_row.length; row++){
        await change_color_inside(my_row[row], delate)
        await sleep(delate)
    }
}
button.addEventListener('click', ()=>{
    console.log(button.getAttribute('mode'), typeof button.getAttribute('mode'))
    change_color_outside(50)
    if(button.getAttribute('mode') == "0"){
        button.setAttribute('mode', "1")
    }
    else{
        button.setAttribute('mode', "0")
    }
})

