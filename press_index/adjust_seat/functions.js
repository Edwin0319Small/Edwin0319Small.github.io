function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

function two_one_sit(my_row, arr_students, arr_gender, minimum = 1, maximum = 36){
    let arr_assemble = []
    let vis = new Array(37).fill(false)
    let random = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum
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
    console.log(arr_assemble)
}

async function change_color(my_row, button, delate){
    async function change_color_inside(row, delate){
        for(let i = 0; i < 3; i++){
            await sleep(delate)
            if(button.getAttribute('mode') == "0"){
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
    await change_color_outside(delate)
}

export{
    sleep, two_one_sit, change_color
}