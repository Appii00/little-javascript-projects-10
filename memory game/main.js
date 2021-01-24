document.addEventListener("DOMContentLoaded", () => {
  const cardArray = [{
      name: "fries",
      img: "images/fries.png",
    },
    {
      name: "fries",
      img: "images/fries.png",
    },
    {
      name: "hotdog",
      img: "images/hotdog.png",
    },
    {
      name: "hotdog",
      img: "images/hotdog.png",
    },
    {
      name: "cheeseburger",
      img: "images/cheeseburger.png",
    },
    {
      name: "cheeseburger",
      img: "images/cheeseburger.png",
    },
    {
      name: "ice-cream",
      img: "images/ice-cream.png",
    },
    {
      name: "ice-cream",
      img: "images/ice-cream.png",
    },
    {
      name: "milkshake",
      img: "images/milkshake.png",
    },
    {
      name: "milkshake",
      img: "images/milkshake.png",
    },
    {
      name: "pizza",
      img: "images/pizza.png",
    },
    {
      name: "pizza",
      img: "images/pizza.png",
    }
  ]
  cardArray.sort(() => 0.5 - Math.random())
  const grid = document.querySelector(".grid")
  var cardChosen = []
  var cardChosenId = []
  var cardWon = []
  const resultDisplay = document.querySelector('#result')

  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement("img")
      card.setAttribute("src", "images/blank.png")
      card.setAttribute('data-id', i)
      card.addEventListener("click", flipCard)
      grid.appendChild(card)
    }
  }

  function checkForMatch() {
    var cards = document.querySelectorAll('img')
    const optionOneId = cardChosenId[0]
    const optionTwoId = cardChosenId[1]
    if (cardChosen[0] === cardChosen[1]) {
      alert('You found a match')
      cards[optionOneId].setAttribute('src', "images/white.png")
      cards[optionTwoId].setAttribute('src', "images/white.png")
      cardWon.push(cardChosen)
    } else {
      cards[optionOneId].setAttribute('src', 'images/blank.png')
      cards[optionTwoId].setAttribute('src', 'images/blank.png')
      alert('sorry,try ggain')
    }
    cardChosen = []
    cardChosenId = []
    resultDisplay.textContent = cardWon.length
    if (cardWon.length == cardArray.length / 2) {
      resultDisplay.textContent = "you found all of them,keep playing"
    }
  }

  function flipCard() {
    var cardId = this.getAttribute('data-id')
    cardChosen.push(cardArray[cardId].name)
    cardChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardChosen.length === 2) {
      setTimeout(checkForMatch, 200)
    }
  }
  createBoard()
})