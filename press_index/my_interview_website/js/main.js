const cardContainers = document.querySelectorAll('.card_container')
console.log(cardContainers)
const cardContainerWidth = cardContainers[0].clientWidth
console.log(cardContainerWidth)
const arrows = document.querySelectorAll(".competition_card_arrow")
console.log(arrows)

function EVENT(e){
    // console.log(e.currentTarget.parentNode)
    let eventArrows = e.currentTarget.parentNode.querySelectorAll('.competition_card_arrow')
    let cardContainer = e.currentTarget.parentNode.parentNode.querySelector('.card_container')
    console.log(cardContainer)
    // console.log(eventArrows)
    if(!e.currentTarget.classList.contains('competition_card_arrow_unclick')){
        // console.log(e.currentTarget)
        eventArrows.forEach((i)=>{
            if(i == e.currentTarget){
                console.log(i.outerHTML)
                i.classList.add('competition_card_arrow_unclick')
            }
            else{
                console.log(i.outerHTML)
                i.classList.remove('competition_card_arrow_unclick')
            }
        })
        if(e.currentTarget == eventArrows[0]){
            cardContainer.style.transform = `translate(0)`
        }
        else{
            cardContainer.style.transform = `translate(-${cardContainerWidth}px)`
        }
    }
}

arrows.forEach((i)=>{
    i.addEventListener('click', EVENT)
})