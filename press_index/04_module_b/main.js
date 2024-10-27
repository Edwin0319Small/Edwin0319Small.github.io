
let city = 'Macao';
    let labels = [...document.querySelectorAll("#settion label")]
    labels[1].style.color = "white"
    let pages = [...document.querySelectorAll(".page")]
    labels[0].classList.add("active-label")
    pages[0].classList.add("active-page")
    labels.forEach(label => {
        label.addEventListener("click", () => {
            labels.forEach(label => {
                label.classList.remove("active-label")
                label.style.color = "white"
            })
            pages.forEach(page => {
                page.classList.remove("active-page")
            })
            label.classList.add("active-label")
            let page = document.querySelector(`#page-${label.getAttribute("for")}`)
            page.classList.add("active-page")
            label.style.color = "black"
        })
    })


    function selectLocation(selected) {
        city = selected.innerText;
        document.querySelector('.country-name').innerHTML = city
        
        console.log(selected.innerText)
        const items = document.querySelectorAll('.location-item');
        items.forEach(item => {
            item.classList.remove('selected');
        });
        selected.classList.add('selected');
       

        let respond = fetch(`https://dev.makzan.net/module_b_api.php/weather.json?city=${city}`)
    respond.then(response => response.json())
   .then(data => {
        console.log(data)


        let cards = document.querySelectorAll('.card');

        data.forEach((item, index) => {
            console.log(item)
            cards[index].querySelector('.date').innerText = item.date;
            cards[index].querySelector('.weather_image img').outerHTML = `<img src="img/${item.status}.svg" atl=${item.status} style="width: 60vw; height: 30vh;">`
            cards[index].querySelector('.weather').innerText = item.status;
            cards[index].querySelector('.temperature').innerText = `${item.lower_temperature}~${item.upper_temperature}°C`;
        })

    })

    }
    selectLocation(document.querySelector('.MACAU'))



let currentIndex = 0;
const cards = document.querySelectorAll('.card');
const dots = document.querySelectorAll('.dot');

function showCard(index) {
    cards.forEach((card, i) => {
        card.style.display = (i === index) ? 'block' : 'none';
    });
    updateDots(index);
}

function nextCard() {
    currentIndex = (currentIndex + 1) % cards.length;
    showCard(currentIndex);
}

function prevCard() {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    showCard(currentIndex);
}

function setCard(index) {
    currentIndex = index;
    showCard(currentIndex);
}

function updateDots(index) {
    dots.forEach((dot, i) => {
        dot.classList.toggle('active-dot', i === index);
    });
}

// 初始化显示第一张卡片
showCard(currentIndex);