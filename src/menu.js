const menu = () => {
    let content = document.getElementById('content');

    let mainMenuSection = document.createElement('div')
    mainMenuSection.setAttribute('class', 'main-menu-section hide-main-menu-section')
    content.appendChild(mainMenuSection)

    function startersFunction(){
        let mainPrices = [['$18.50', '$18.90', '$24.90', '$15.90'],['$18.90', '$24.90', '$15.90', '$10.90'],
                            ['$7.90', '$6.00', '$6.40', '$5.90'],['$18.40', '$10.90', '$11.90', '$13.50']]
                            
        let mainFoods = [ ['CRAB CAKES', 'WHITEBAIT & DILL MAYO', 'WATERMELON & FETA SALAD', 'HALLOUMI WITH GRIDDLED VEGETABLES'],
                          ['SPAGHETTI ALLA CARBONARA', 'BAKED TERIYAKI CHICKEN', 'APPLE CIDER SAUCE AND PORK LOIN CHOPS', 'CHICKEN ENCHILADAS '],
                          ['ACORD CANDY COOKIES', 'APPLE SLAB PIE', 'APPLE PIE WITH CINNAMON & ICECREAM', 'CARROT CAKE'],
                          ['HOT COCOA MIX IN A JAR', 'HOT APPLE CIDER', 'BIKINI MARTINI', 'ICED MOCHA FUSION SHAKE']
                        ]

        let foodIngredients = [['Onions / Fresh flat-leaf parsley / Mashed potatoes / Pepper / Eggs / Tartare sauce',
                                'Fish / Lemon / Mayo / Fennel seeds', 'Watermelon / Red onion / Feta cheese / Fresh mint / Olive oil',
                                'Onions / Fresh flat-leaf parsley / Mashed potatoes / Pepper / Eggs / Tartare sauce'
                               ], [
                                   'Spaghetti alla carbonara in its authentic form: peppery, creamy without using cream, cheesy, and delicious.',
                                   'Fish / Lemon / Mayo / Fennel seeds', 'Watermelon / Red onion / Feta cheese / Fresh mint / Olive oil',
                                   'Beans / Halloumi cheese / Asparagus / Courgettes / Cherry tomatoes'
                               ], [
                                   'Onions / Fresh flat-leaf parsley / Mashed potatoes / Pepper / Eggs / Tartare sauce',
                                   'Fish / Lemon / Mayo / Fennel seeds', 'Watermelon / Red onion / Feta cheese / Fresh mint / Olive oil',
                                   'Beans / Halloumi cheese / Asparagus / Courgettes / Cherry tomatoes'
                               ], [
                                   'Onions / Fresh flat-leaf parsley / Mashed potatoes / Pepper / Eggs / Tartare sauce',
                                   'Fish / Lemon / Mayo / Fennel seeds', 'Watermelon / Red onion / Feta cheese / Fresh mint / Olive oil',
                                   'Watermelon / Red onion / Feta cheese / Fresh mint / Olive oil'
                               ]]
        
        let generalContent = [
            {
                name: 'ASPARAGUS & HALLOUMI SALAD',
                ingredients: 'Beans / Halloumi cheese / Asparagus / Courgettes /',
                ingredientsTwo: 'Cherry tomatoes',
                price: '$18.90',
                bgClass: 'first-starters',
                mainHeader: 'Tasty',
                secondHeader: 'STARTERS'
            },
            {
                name: 'GONG BAO CHICKEN',
                ingredients: ' Halloumi cheese / Chilli / Macaroni /Spargetti /',
                ingredientsTwo: 'Green Chilli',
                price: '$19.40',
                bgClass: 'second-starters',
                mainHeader: 'Delicious',
                secondHeader: 'MAIN'
            },
            {
                name: 'CHERRY PIE',
                ingredients: 'Mayoneeze / Croisant cheese / Burgers / Courgettes /',
                ingredientsTwo: 'Red Papper',
                price: '$16.75',
                bgClass: 'third-starters',
                mainHeader: 'Sweet',
                secondHeader: 'DESSERT'
            },
            {
                name: 'MOJITO',
                ingredients: 'Beer / Black Label / Champigne / Cold Soda /',
                ingredientsTwo: 'Cold Water',
                price: '$8.05',
                bgClass: 'fourth-starters',
                mainHeader: 'Flavour',
                secondHeader: 'DRINKS'
            }
        ]

        for(let j=0; j <= 3; j++){

                let startersSection = document.createElement('div')
                startersSection.setAttribute('class', 'starters-section')
                mainMenuSection.appendChild(startersSection)

                let startersLeft = document.createElement('div')
                startersLeft.setAttribute('class', `starters-left ${generalContent[j].bgClass}`)
                startersSection.appendChild(startersLeft)

                let startersLeftOne = document.createElement('p');
                startersLeftOne.setAttribute('class', 'food-name')
                startersLeftOne.innerHTML = generalContent[j].name
                let startersLeftTwo = document.createElement('p');
                startersLeftTwo.setAttribute('class', 'fat-content')
                startersLeftTwo.innerHTML = '(250 G)'
                let startersLeftThree = document.createElement('p');
                startersLeftThree.setAttribute('class', 'food-ingredients')
                startersLeftThree.innerHTML = generalContent[j].ingredients
                let startersLeftFour = document.createElement('p');
                startersLeftFour.setAttribute('class', 'food-ingredients')
                startersLeftFour.innerHTML = generalContent[j].ingredientsTwo
                let startersLeftFive = document.createElement('p');
                startersLeftFive.setAttribute('class', 'food-price')
                startersLeftFive.innerHTML = generalContent[j].price
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
                startersHeadingH2.innerHTML = generalContent[j].mainHeader  

                let startersHeadingH1 = document.createElement('h1')  
                startersHeadingH1.innerHTML = generalContent[j].secondHeader  
                startersHeading.appendChild(startersHeadingH2)
                startersHeading.appendChild(startersHeadingH1)

                const displayPrices = () => {
                    
                    for(let i = 0; i <= 3; i++) {

                        let priceDetails = document.createElement('div')
                        priceDetails.setAttribute('class', 'price-details')
                        startersRight.appendChild(priceDetails)
                    
                        let priceDetailsFirst = document.createElement('div')
                        priceDetailsFirst.setAttribute('class', 'price-details-first')
                        priceDetails.appendChild(priceDetailsFirst)

                        let priceDetailsFirstH4 = document.createElement('h4')
                        priceDetailsFirstH4.innerHTML = ` ${mainFoods[j][i]} <small>(250 G)</small>`
                        priceDetailsFirst.appendChild(priceDetailsFirstH4)

                        let priceDetailsSecond = document.createElement('div')
                        priceDetailsSecond.setAttribute('class', 'price-details-second')
                        priceDetails.appendChild(priceDetailsSecond)

                        let priceDetailsThird = document.createElement('div')
                        priceDetailsThird.setAttribute('class', 'price-details-third')
                        priceDetails.appendChild(priceDetailsThird)
                        priceDetailsThird.innerHTML = mainPrices[j][i]

                        let startersPrices = document.createElement('div')
                        startersPrices.setAttribute('class', 'starters-prices')
                        startersRight.appendChild(startersPrices)

                        let startersPricesPg = document.createElement('p')
                        startersPrices.appendChild(startersPricesPg)
                        startersPricesPg.innerHTML = foodIngredients[j][i]   
                    }
                }

                displayPrices()
            }

        }
        
        startersFunction()
}

export { menu }