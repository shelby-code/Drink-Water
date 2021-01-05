const cups = document.querySelectorAll('.cups')
const percentage = document.getElementById('percentage')
const span = document.getElementById('span')
const remained = document.getElementById('remained')

updateBigCup()

cups.forEach((cup, idx)=>{
    cup.addEventListener('click', ()=>{
        // cup.classList.toggle('select')
        increase(idx)
        
    })

})
function increase(idx){
    if(cups[idx].classList.contains('select') && !cups[idx].nextElementSibling.classList.contains('select')){
        idx--
    }
    cups.forEach((c, i)=>{
        if(i <= idx){
            c.classList.add('select')
        }else{
            c.classList.remove('select')
        }
    })

    updateBigCup()
}

function updateBigCup(){
    const fullCups = document.querySelectorAll('.select').length

    const totalCups = cups.length

    if(fullCups === 0){
        percentage.style.visibility = 'hidden'
        percentage.style.height = `${0}px`
    } else{
        percentage.style.visibility = 'visible'
        percentage.style.height = `${fullCups / totalCups * 256}px`
    }

    if(fullCups === totalCups){
        span.style.visibility = 'hidden'
        remained.style.display = 'hidden'
        remained.style.height = 0

        percentage.innerText = `${fullCups / totalCups * 100}%`
    }else{
        span.style.visibility = 'visible'
        remained.style.display = 'visible'
        percentage.innerText = `${fullCups / totalCups * 100}%`
        remained.innerText = `${2 - (250 * fullCups / 1000)}L Remained`
    }
}


