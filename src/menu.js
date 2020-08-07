const menu = () => {
    let content = document.getElementById('content');

    let mainMenuSection = document.createElement('div')
    mainMenuSection.setAttribute('class', 'main-menu-section hide-main-menu-section')
    content.appendChild(mainMenuSection)

    let startersSection = document.createElement('div')
    startersSection.setAttribute('class', 'starters-section')
    mainMenuSection.appendChild(startersSection)

    let startersLeft = document.createElement('div')
    startersLeft.setAttribute('class', 'starters-left first-starters')
    startersSection.appendChild(startersLeft)

    let startersLeftOne = document.createElement('p');
    startersLeftOne.setAttribute('class', 'food-name')
    startersLeftOne.innerHTML = 'ASPARAGUS & HALLOUMI SALAD'
    let startersLeftTwo = document.createElement('p');
    startersLeftTwo.setAttribute('class', 'fat-content')
    startersLeftTwo.innerHTML = '(250 G)'
    let startersLeftThree = document.createElement('p');
    startersLeftThree.setAttribute('class', 'food-ingredients')
    startersLeftThree.innerHTML = 'Beans / Halloumi cheese / Asparagus / Courgettes /'
    let startersLeftFour = document.createElement('p');
    startersLeftFour.setAttribute('class', 'food-ingredients')
    startersLeftFour.innerHTML = 'Cherry tomatoes'
    let startersLeftFive = document.createElement('p');
    startersLeftFive.setAttribute('class', 'food-price')
    startersLeftFive.innerHTML = '18.90'
    startersLeft.appendChild(startersLeftOne)
    startersLeft.appendChild(startersLeftTwo)
    startersLeft.appendChild(startersLeftThree)
    startersLeft.appendChild(startersLeftFour)
    startersLeft.appendChild(startersLeftFive)

    let startersRight = document.createElement('div')
    startersRight.setAttribute('class', 'starters-right')
    startersSection.appendChild(startersRight)

    let startersHeading = document.createElement('div')
    startersHeading.setAttribute('class', 'starters-heading')
    startersRight.appendChild(startersHeading)

    let startersHeadingH2 = document.createElement('h2')  
    startersHeadingH2.innerHTML = 'Tasty'  

    let startersHeadingH1 = document.createElement('h1')  
    startersHeadingH1.innerHTML = 'STARTERS'  
    startersHeading.appendChild(startersHeadingH2)
    startersHeading.appendChild(startersHeadingH1)

    const displayPrices = () => {

        let foodName = ['CRAB CAKES']
        let foodIngredients = ['Onions / Fresh flat-leaf parsley / Mashed potatoes / Pepper / Eggs / Tartare sauce']
        let foodPrice = ['$18.50']

        for(let i = 0; i <= 3; i++) {

            let priceDetails = document.createElement('div')
            priceDetails.setAttribute('class', 'price-details')
            startersRight.appendChild(priceDetails)
        
            let priceDetailsFirst = document.createElement('div')
            priceDetailsFirst.setAttribute('class', 'price-details-first')
            priceDetails.appendChild(priceDetailsFirst)

            let priceDetailsFirstH4 = document.createElement('h4')
            priceDetailsFirstH4.innerHTML = ` WHITEBAIT & DILL MAYO <small>(250 G)</small>`
            priceDetailsFirst.appendChild(priceDetailsFirstH4)

            let priceDetailsSecond = document.createElement('div')
            priceDetailsSecond.setAttribute('class', 'price-details-second')
            priceDetails.appendChild(priceDetailsSecond)

            let priceDetailsThird = document.createElement('div')
            priceDetailsThird.setAttribute('class', 'price-details-third')
            priceDetails.appendChild(priceDetailsThird)
            priceDetailsThird.innerHTML = '$12.00'

            let startersPrices = document.createElement('div')
            startersPrices.setAttribute('class', 'starters-prices')
            startersRight.appendChild(startersPrices)

            let startersPricesPg = document.createElement('p')
            startersPrices.appendChild(startersPricesPg)
            startersPricesPg.innerHTML = `Watermelon / Red onion / Feta cheese / Fresh mint / Olive oil`   
        }
    }

    displayPrices()

}

export { menu }