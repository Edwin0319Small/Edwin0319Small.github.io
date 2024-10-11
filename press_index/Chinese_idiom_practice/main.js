fetch('./file.json') // Replace with the actual URL of your hosted JSON file
    .then(response => response.json())
    .then(data => {
        // console.log(data)
        var topic = document.querySelector('.topic')
        var choice_arr = [...document.querySelectorAll('.choice > div')]
        var bt_right = document.querySelector('#next')
        var ans_count = document.querySelector('.topic_choice > span')
        var init = document.querySelector('.init')
        var vis_arr = Array(405).fill(0)
        var minimum = 0
        var maximum = 0
        var count = 0
        var random_topic
        var ans
        var f = (e)=>{
            e.currentTarget.classList.add('wrong')
            choice_arr[ans].classList.add('correct')
            e.currentTarget.children[2].style.visibility = 'visible'
        }
        topic.children[0].innerText = '0.'
        topic.children[1].innerText = "輸入題目後，按下一題"
        ans_count.innerText = "0/0"
        bt_right.style.visibility = "hidden"
        init.children[2].addEventListener('click', ()=>{
            if(init.children[0].value >= 1 && init.children[0].value <= 106) minimum = parseInt(init.children[0].value)
            if(init.children[1].value >= 1 && init.children[1].value <= 106) maximum = parseInt(init.children[1].value)
            if(minimum == 0 || maximum == 0 || maximum - minimum + 1 < 4){
                init.children[3].innerText += "請重輸"
            }
            else{
                init.style.visibility = "hidden"
                bt_right.style.visibility = "visible"
            }
        })
        bt_right.addEventListener('click', ()=>{
            // console.log(minimum, maximum, typeof(minimum), typeof(maximum))
            if(count < (maximum - minimum + 1)){
                random_topic = Math.floor(Math.random() * (maximum - minimum + 1) + minimum)
                while(vis_arr[random_topic]){
                    random_topic = Math.floor(Math.random() * (maximum - minimum + 1) + minimum)
                    // console.log(random_topic)
                }
                choice_arr.forEach((item)=>{
                    item.classList.remove('correct')
                    item.classList.remove('wrong')
                    item.children[2].style.visibility = "hidden"
                    item.removeEventListener('click', f)
                })
                count++
                if(count == (maximum - minimum + 1)) bt_right.style.visibility = "hidden"
                ans_count.innerText = count.toString() + '/' + (maximum - minimum + 1)
                var temp = random_topic
                vis_arr[temp] = 1
                topic.children[0].innerText = count + '.'
                topic.children[1].innerText = data[temp][0]
                // console.log(topic.children[1].innerText = data[temp][0])
                var random_choice = Math.floor(Math.random() * 4)
                choice_arr[random_choice].children[1].innerText = data[temp][1]
                choice_arr[random_choice].children[2].innerText = data[temp][0]
                ans = random_choice
                console.log(random_choice, ans)
                var count_choice = 1
                var choice_vis = [0, 0, 0, 0, 0]
                var topic_vis = {}
                for(let i = minimum; i <= maximum; i++) topic_vis[data[i][1]] = 0
                topic_vis[data[temp][1]] = 1
                choice_vis[random_choice] = 1
                // console.log(topic_vis)
                while(count_choice < 4){
                    while(choice_vis[random_choice]){
                        random_choice = Math.floor(Math.random() * 4)
                        // console.log("choice")
                    }
                    random_topic = Math.floor(Math.random() * (maximum - minimum + 1) + minimum)
                    // console.log(topic_vis[data[random_topic][1]])
                    while(topic_vis[data[random_topic][1]]){
                        random_topic = Math.floor(Math.random() * (maximum - minimum + 1) + minimum)
                        // console.log("topic")
                    }
                    choice_vis[random_choice] = 1
                    topic_vis[data[random_topic][1]] = 1
                    count_choice++
                    choice_arr[random_choice].children[1].innerText = data[random_topic][1]
                    choice_arr[random_choice].children[2].innerText = data[random_topic][0]
                }
                choice_arr.forEach((item)=>{
                    item.addEventListener('click', f)
                })
            }
        })

    })
    .catch(error => console.error('Error fetching JSON:', error));


// var topic = document.querySelector('.topic')
// var choice_arr = [...document.querySelectorAll('.choice > div')]
// var bt_left = document.querySelector('#last')
// var bt_right = document.querySelector('#next')

// var minimum = 1
// var maximum = 4
// var count = 1

// var random_topic = Math.floor(Math.random() * (maximum - minimum + 1) + minimum)
// console.log(random_topic)
// topic.children[1].innerText = 
