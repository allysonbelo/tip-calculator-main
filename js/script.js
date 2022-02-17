let myList = document.querySelector('.tip__valor')
let porcentagemTip = ''
let valor = null

 myList.addEventListener('click', (e)=>{
    let alvo = e.target

    for(let i = 0; i < myList.children.length; i++){
        if(myList.children[i]){
            myList.children[i].classList.remove('active')
            
            if(myList.children[i] == alvo){
                myList.children[i].classList.add('active')
                porcentagemTip = myList.children[i].innerText
                valor = JSON.parse(porcentagemTip.substring(0, porcentagemTip.length - 1 ))
                return valor
            }
        }
    }
})




