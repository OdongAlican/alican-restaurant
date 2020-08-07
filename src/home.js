const home = () => {
    let content = document.getElementById('content');

    let restaurantMenu = document.createElement('div')
    restaurantMenu.setAttribute('class', 'restaurant-menu')
    content.appendChild(restaurantMenu)

    let listingsection = document.createElement('div')
    listingsection.setAttribute('class', 'listing-section')
    restaurantMenu.appendChild(listingsection)

    let listingsectionOne = document.createElement('p')
    listingsectionOne.innerHTML = 'RESTAURANT'
    let listingsectionNine = document.createElement('h1')
    listingsectionNine.innerHTML = 'MENU'
    let listingsectionTwo = document.createElement('p')
    listingsectionTwo.innerHTML = 'ALL'
    let listingsectionThree = document.createElement('p')
    listingsectionThree.innerHTML = 'STARTERS'
    let listingsectionFour = document.createElement('p')
    listingsectionFour.innerHTML = 'MAIN'
    let listingsectionFive = document.createElement('p')
    listingsectionFive.innerHTML = 'DESERT'
    let listingsectionSix = document.createElement('p')
    listingsectionSix.innerHTML = 'DAILY MENU'
    let listingsectionSeven = document.createElement('p')
    listingsectionSeven.innerHTML = "CHEF'S SPECIALITY"
    let listingsectionEight = document.createElement('p')
    listingsectionEight.innerHTML = 'OFFERS'
    listingsection.appendChild(listingsectionOne)
    listingsection.appendChild(listingsectionNine)
    listingsection.appendChild(listingsectionTwo)
    listingsection.appendChild(listingsectionThree)
    listingsection.appendChild(listingsectionFour)
    listingsection.appendChild(listingsectionFive)
    listingsection.appendChild(listingsectionSix)
    listingsection.appendChild(listingsectionSeven)
    listingsection.appendChild(listingsectionEight)

    let gridSection = document.createElement('div')
    gridSection.setAttribute('class', 'grid-section')
    restaurantMenu.appendChild(gridSection)


    const gridFunction = () => {
        let classArray = ['grid-element first', 'grid-element second', 
                            'grid-element third', 'grid-element fourth', 
                            'grid-element fifth', 'grid-element sixth']
        let className = ['Apple cider and Pork', 'Aubergine Dip', 
                            'Baked Teriyaki chicken', 'Beef and Barley Bun with Horseradish',
                            'Chicken wings, agrodolce style', 'Creamy rice pudding']
        let classPrice = ['$15.90', '$14.50', '$24.90', '$11.00', '$12.00', '$9.90']

            for(let i= 0; i < classArray.length; i++){
                let secondGridElement = document.createElement('div')
                secondGridElement.setAttribute('class', classArray[i])
                gridSection.appendChild(secondGridElement)
            
                let centralsecond = document.createElement('div');
                centralsecond.setAttribute('class', 'central')
                secondGridElement.appendChild(centralsecond)
            
                let addCartsecond = document.createElement('div')
                addCartsecond.setAttribute('class','add-cart')
                addCartsecond.innerHTML = 'ADD TO CART'
                centralsecond.appendChild(addCartsecond)
            
                let centralParagraphTwo = document.createElement('p')
                let centralSpanTwo = document.createElement('span')
            
                centralParagraphTwo.innerHTML = className[i]
                centralSpanTwo.innerHTML = classPrice[i]
                centralsecond.appendChild(centralParagraphTwo)
                centralsecond.appendChild(centralSpanTwo)
            }
    }
    
    gridFunction()

    let testimonialsSection = document.createElement('div')
    testimonialsSection.setAttribute('class', 'testimonials-section')
    content.appendChild(testimonialsSection)

    let testimonialsSectionH2 = document.createElement('h2')
    testimonialsSectionH2.innerHTML = 'Clients'
    let testimonialsSectionH1 = document.createElement('h1')
    testimonialsSectionH1.innerHTML = 'TESTIMONIALS'
    let testimonialsSectionPgOne = document.createElement('p')
    testimonialsSectionPgOne.innerHTML = `"It was a fantastic evening in your superb restaurant which was 
                                            enjoyed by everyone who was <br> fortunate to be there"`
    let testimonialsSectionItag = document.createElement('i')
    testimonialsSectionItag.setAttribute('class', 'fas fa-comment')
    let testimonialsSectionPgTwo = document.createElement('p')
    testimonialsSectionPgTwo.innerHTML = 'John Doe'
    testimonialsSection.appendChild(testimonialsSectionH2)
    testimonialsSection.appendChild(testimonialsSectionH1)
    testimonialsSection.appendChild(testimonialsSectionPgOne)
    testimonialsSection.appendChild(testimonialsSectionItag)
    testimonialsSection.appendChild(testimonialsSectionPgTwo)

}

export { home }