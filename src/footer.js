const footer = () => {
    let content = document.getElementById('content');

    let lowerSection = document.createElement('div')
    content.appendChild(lowerSection);
    lowerSection.setAttribute('class', 'lower-section')

    let subscriptionSection = document.createElement('div')
    subscriptionSection.setAttribute('class', 'subscription-section')
    lowerSection.appendChild(subscriptionSection)

    let leftSection = document.createElement('div')
    leftSection.setAttribute('class', 'left-section')
    subscriptionSection.appendChild(leftSection)

    let innerLeftSection = document.createElement('div')
    innerLeftSection.setAttribute('class', 'inner-left-section')
    leftSection.appendChild(innerLeftSection)
    innerLeftSection.innerHTML = `15% <br> OFF`

    let rightSection = document.createElement('div')
    rightSection.setAttribute('class', 'right-section')
    subscriptionSection.appendChild(rightSection)

    let rightSectionH2 = document.createElement('h2')
    let rightSectionH1 = document.createElement('h1')
    rightSectionH2.innerHTML = 'Subscribe to our'
    rightSectionH1.innerHTML = 'NEWSLETTER'
    rightSection.appendChild(rightSectionH2)
    rightSection.appendChild(rightSectionH1)

    let lowerSectionParagraph = document.createElement('p')
    lowerSectionParagraph.innerHTML = 'Subscribe to our newsletter and receive 15% discount from your order.'
    lowerSection.appendChild(lowerSectionParagraph)

    let emailSection = document.createElement('div')
    emailSection.setAttribute('class', 'email-section')
    lowerSection.appendChild(emailSection)

    let emailSectionInput = document.createElement('input')
    emailSectionInput.setAttribute('placeholder', 'YOUR@MAIL.COM')
    let emailSectionButton = document.createElement('button')
    emailSectionButton.innerHTML = 'SUBSCRIBE'
    emailSection.appendChild(emailSectionInput)
    emailSection.appendChild(emailSectionButton)

    let footerSection = document.createElement('div')
    footerSection.setAttribute('class', 'footer-section')
    content.appendChild(footerSection)

    let footerFirst = document.createElement('div')
    footerFirst.setAttribute('class', 'footer-first')
    footerSection.appendChild(footerFirst)

    let footerFirstOne = document.createElement('p')
    let footerFirstTwo = document.createElement('p')
    let footerFirstThree = document.createElement('p')
    let footerFirstFour = document.createElement('p')
    footerFirst.appendChild(footerFirstOne)
    footerFirst.appendChild(footerFirstTwo)
    footerFirst.appendChild(footerFirstThree)
    footerFirst.appendChild(footerFirstFour)
    footerFirstOne.innerHTML = 'Chef John Doe, working in'
    footerFirstTwo.innerHTML = 'collaboration with Head Chef Jane Doe'
    footerFirstThree.innerHTML = 'Martins, offer elegant & playful modern African'
    footerFirstFour.innerHTML = 'cooking.'

    let footerSecond = document.createElement('div')
    footerSecond.setAttribute('class', 'footer-second')
    footerSection.appendChild(footerSecond)
    let footerSecondOne = document.createElement('p')
    let footerSecondTwo = document.createElement('p')
    let footerSecondThree = document.createElement('p')
    let footerSecondFour = document.createElement('p')
    footerSecond.appendChild(footerSecondOne)
    footerSecond.appendChild(footerSecondTwo)
    footerSecond.appendChild(footerSecondThree)
    footerSecond.appendChild(footerSecondFour)
    footerSecondOne.innerHTML = 'HOME'
    footerSecondTwo.innerHTML = 'MENU'
    footerSecondThree.innerHTML = 'ABOUT'
    footerSecondFour.innerHTML = 'CONTACT'

    let footerThird = document.createElement('div')
    footerThird.setAttribute('class', 'footer-third')
    footerSection.appendChild(footerThird)

    let onlineReservation = document.createElement('div')
    onlineReservation.setAttribute('class', 'online-reservation')
    footerThird.appendChild(onlineReservation)
    onlineReservation.innerHTML = 'ONLINE RESERVATION'

    let footerThirdFollow = document.createElement('p')
    footerThird.appendChild(footerThirdFollow)
    footerThirdFollow.innerHTML = 'FOLLOW'

    let socialMedia = document.createElement('div')
    footerThird.appendChild(socialMedia)
    socialMedia.setAttribute('class', 'social-media')

    let socialMediaFirst = document.createElement('i')
    socialMediaFirst.setAttribute('class', 'fab fa-twitter')
    let socialMediaSecond = document.createElement('i')
    socialMediaSecond.setAttribute('class', 'fab fa-facebook-f')
    let socialMediaThird = document.createElement('i')
    socialMediaThird.setAttribute('class', 'fab fa-instagram')
    let socialMediaFourth = document.createElement('i')
    socialMediaFourth.setAttribute('class', 'fab fa-pinterest-p')
    socialMedia.appendChild(socialMediaFirst)
    socialMedia.appendChild(socialMediaSecond)
    socialMedia.appendChild(socialMediaThird)
    socialMedia.appendChild(socialMediaFourth)

    let footerFourth = document.createElement('div')
    footerFourth.setAttribute('class', 'footer-fourth')
    footerSection.appendChild(footerFourth)

    let footerFourthOne = document.createElement('p')
    footerFourthOne.setAttribute('class', 'footer-contact')
    footerFourthOne.innerHTML = '+256 777-338787'
    let footerFourthTwo = document.createElement('p')
    footerFourthTwo.setAttribute('class', 'rare-paragraph')
    footerFourthTwo.innerHTML = 'BOOKATABLE @RESTAURANT.COM'
    let footerFourthThree = document.createElement('p')
    footerFourthThree.innerHTML = '67 Blackleather Street'
    let footerFourthFour = document.createElement('p')
    footerFourthFour.innerHTML = 'LOWER SQ'
    let footerFourthFive = document.createElement('p')
    footerFourthFive.innerHTML = 'GULU'
    let footerFourthSix = document.createElement('p')
    footerFourthSix.innerHTML = 'UGANDA'
    footerFourth.appendChild(footerFourthOne)
    footerFourth.appendChild(footerFourthTwo)
    footerFourth.appendChild(footerFourthThree)
    footerFourth.appendChild(footerFourthFour)
    footerFourth.appendChild(footerFourthFive)
    footerFourth.appendChild(footerFourthSix)

}

export { footer }