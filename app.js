document.addEventListener('DOMContentLoaded', () => {

    //card options
    const cardArray = [
        {
            name: 'Twitter',
            img: 'images/twit.png'
        },
        {
            name: 'FaceBook',
            img: 'images/fbook.png'
        },
        {
            name: 'YouTube',
            img: 'images/ytube.png'
        },
        {
            name: 'SnapChat',
            img: 'images/schat.png'
        },
        {
            name: 'Pintrest',
            img: 'images/pin.png'
        },
        {
            name: 'Instagram',
            img: 'images/insta.png'
        },
        {
            name: 'Twitter',
            img: 'images/twit.png'
        },
        {
            name: 'FaceBook',
            img: 'images/fbook.png'
        },
        {
            name: 'YouTube',
            img: 'images/ytube.png'
        },
        {
            name: 'SnapChat',
            img: 'images/schat.png'
        },
        {
            name: 'Pintrest',
            img: 'images/pin.png'
        },
        {
            name: 'Instagram',
            img: 'images/insta.png'
        }
    ]

    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    var cardsChosen = []
    var cardsChosenId = []
    var cardsWon = []
    var cardsPicked = []

    //create the board
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'images/back.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    // check for matches
    function checkForMatch() {
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        if (cardsChosen[0] === cardsChosen[1]) {
            cards[optionOneId].setAttribute('src', 'images/blank.png')
            cards[optionTwoId].setAttribute('src', 'images/blank.png')
            cardsWon.push(cardsChosen)
            cardsPicked.push(cardsChosenId[0])
            cardsPicked.push(cardsChosenId[1])
        } else {
            cards[optionOneId].setAttribute('src', 'images/back.png')
            cards[optionTwoId].setAttribute('src', 'images/back.png')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length/2) {
            resultDisplay.textContent = 'Congratulations!, You Win'
        }
    }


    //flip your card
    function flipCard() {
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        if (cardsChosenId[0] !== cardsChosenId[1]) {
            if (cardsPicked.includes(cardId)) {
                alert('Pick a Card')
            } else {
                this.setAttribute('src', cardArray[cardId].img)
                if (cardsChosen.length === 2) {
                    setTimeout(checkForMatch, 700)
                }
            }
        } else {
            cardsChosenId.pop()
            cardsChosen.pop()
            alert('You can\'t choose the same card')
        }  
    }



    createBoard()
})