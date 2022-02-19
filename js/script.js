let myList = document.querySelector('.tip__valor')
let tip = 0

myList.addEventListener('click', (e) => {
    e.preventDefault()

    let bill = JSON.parse(document.querySelector('#bill').value)
    let people = 0
    people = JSON.parse(document.querySelector('.people-input').value)

    if (people <= 0 || people == '' || people == null) {
        console.log('Não pode dividir por 0');
        
    } else {

        let alvo = e.target

        switch (alvo.innerText) {
            case '5%':
                myList.children[0].classList.add('active2')
                tip = 5
                myList.children[1].classList.remove('active2')
                myList.children[2].classList.remove('active2')
                myList.children[3].classList.remove('active2')
                myList.children[4].classList.remove('active2')
                break;

            case '10%':
                myList.children[0].classList.remove('active2')
                myList.children[1].classList.add('active2')
                tip = 10
                myList.children[2].classList.remove('active2')
                myList.children[3].classList.remove('active2')
                myList.children[4].classList.remove('active2')
                break;

            case '15%':
                myList.children[0].classList.remove('active2')
                myList.children[1].classList.remove('active2')
                myList.children[2].classList.add('active2')
                tip = 15
                myList.children[3].classList.remove('active2')
                myList.children[4].classList.remove('active2')
                break;

            case '25%':
                myList.children[0].classList.remove('active2')
                myList.children[1].classList.remove('active2')
                myList.children[2].classList.remove('active2')
                myList.children[3].classList.add('active2')
                tip = 25
                myList.children[4].classList.remove('active2')
                break;

            case '50%':
                myList.children[0].classList.remove('active2')
                myList.children[1].classList.remove('active2')
                myList.children[2].classList.remove('active2')
                myList.children[3].classList.remove('active2')
                myList.children[4].classList.add('active2')
                tip = 50
                break;

            default:

                break;
        }

    }

    calcula(tip, bill, people)
})

function calcula(tip, bill, people) {
    let tipAmount = document.querySelector('#tip-amount')
    let totalPerson = document.querySelector('#total-person')

    let porcentagem = (bill * tip) / 100
    let amount = porcentagem / people
    let total = (bill + porcentagem) / people

    tipAmount.innerText = amount.toFixed(2)
    totalPerson.innerText = total.toFixed(2)
}

function reset() {
    document.querySelector('#tip-amount').innerText = '0.00'
    document.querySelector('#total-person').innerText = '0.00'
    document.querySelector('#bill').value = ''
    document.querySelector('.people-input').value = ''

    for (let i = 0; i < myList.children.length; i++) {
        myList.children[i].classList.remove('active2')
    }
}