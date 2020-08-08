const footer = () => {
  const content = document.getElementById('content');

  const lowerSection = document.createElement('div');
  content.appendChild(lowerSection);
  lowerSection.setAttribute('class', 'lower-section');

  const subscriptionSection = document.createElement('div');
  subscriptionSection.setAttribute('class', 'subscription-section');
  lowerSection.appendChild(subscriptionSection);

  const leftSection = document.createElement('div');
  leftSection.setAttribute('class', 'left-section');
  subscriptionSection.appendChild(leftSection);

  const innerLeftSection = document.createElement('div');
  innerLeftSection.setAttribute('class', 'inner-left-section');
  leftSection.appendChild(innerLeftSection);
  innerLeftSection.innerHTML = '15% <br> OFF';

  const rightSection = document.createElement('div');
  rightSection.setAttribute('class', 'right-section');
  subscriptionSection.appendChild(rightSection);

  const rightSectionH2 = document.createElement('h2');
  const rightSectionH1 = document.createElement('h1');
  rightSectionH2.innerHTML = 'Subscribe to our';
  rightSectionH1.innerHTML = 'NEWSLETTER';
  rightSection.appendChild(rightSectionH2);
  rightSection.appendChild(rightSectionH1);

  const lowerSectionParagraph = document.createElement('p');
  lowerSectionParagraph.innerHTML = 'Subscribe to our newsletter and receive 15% discount from your order.';
  lowerSection.appendChild(lowerSectionParagraph);

  const emailSection = document.createElement('div');
  emailSection.setAttribute('class', 'email-section');
  lowerSection.appendChild(emailSection);

  const emailSectionInput = document.createElement('input');
  emailSectionInput.setAttribute('placeholder', 'YOUR@MAIL.COM');
  const emailSectionButton = document.createElement('button');
  emailSectionButton.innerHTML = 'SUBSCRIBE';
  emailSection.appendChild(emailSectionInput);
  emailSection.appendChild(emailSectionButton);

  const footerSection = document.createElement('div');
  footerSection.setAttribute('class', 'footer-section');
  content.appendChild(footerSection);

  const footerFirst = document.createElement('div');
  footerFirst.setAttribute('class', 'footer-first');
  footerSection.appendChild(footerFirst);

  const footerFirstOne = document.createElement('p');
  const footerFirstTwo = document.createElement('p');
  const footerFirstThree = document.createElement('p');
  const footerFirstFour = document.createElement('p');
  footerFirst.appendChild(footerFirstOne);
  footerFirst.appendChild(footerFirstTwo);
  footerFirst.appendChild(footerFirstThree);
  footerFirst.appendChild(footerFirstFour);
  footerFirstOne.innerHTML = 'Chef John Doe, working in';
  footerFirstTwo.innerHTML = 'collaboration with Head Chef Jane Doe';
  footerFirstThree.innerHTML = 'Martins, offer elegant & playful modern African';
  footerFirstFour.innerHTML = 'cooking.';

  const footerSecond = document.createElement('div');
  footerSecond.setAttribute('class', 'footer-second');
  footerSection.appendChild(footerSecond);
  const footerSecondOne = document.createElement('p');
  const footerSecondTwo = document.createElement('p');
  const footerSecondThree = document.createElement('p');
  const footerSecondFour = document.createElement('p');
  footerSecond.appendChild(footerSecondOne);
  footerSecond.appendChild(footerSecondTwo);
  footerSecond.appendChild(footerSecondThree);
  footerSecond.appendChild(footerSecondFour);
  footerSecondOne.innerHTML = 'HOME';
  footerSecondTwo.innerHTML = 'MENU';
  footerSecondThree.innerHTML = 'ABOUT';
  footerSecondFour.innerHTML = 'CONTACT';

  const footerThird = document.createElement('div');
  footerThird.setAttribute('class', 'footer-third');
  footerSection.appendChild(footerThird);

  const onlineReservation = document.createElement('div');
  onlineReservation.setAttribute('class', 'online-reservation');
  footerThird.appendChild(onlineReservation);
  onlineReservation.innerHTML = 'ONLINE RESERVATION';

  const footerThirdFollow = document.createElement('p');
  footerThird.appendChild(footerThirdFollow);
  footerThirdFollow.innerHTML = 'FOLLOW';

  const socialMedia = document.createElement('div');
  footerThird.appendChild(socialMedia);
  socialMedia.setAttribute('class', 'social-media');

  const socialMediaFirst = document.createElement('i');
  socialMediaFirst.setAttribute('class', 'fab fa-twitter');
  const socialMediaSecond = document.createElement('i');
  socialMediaSecond.setAttribute('class', 'fab fa-facebook-f');
  const socialMediaThird = document.createElement('i');
  socialMediaThird.setAttribute('class', 'fab fa-instagram');
  const socialMediaFourth = document.createElement('i');
  socialMediaFourth.setAttribute('class', 'fab fa-pinterest-p');
  socialMedia.appendChild(socialMediaFirst);
  socialMedia.appendChild(socialMediaSecond);
  socialMedia.appendChild(socialMediaThird);
  socialMedia.appendChild(socialMediaFourth);

  const footerFourth = document.createElement('div');
  footerFourth.setAttribute('class', 'footer-fourth');
  footerSection.appendChild(footerFourth);

  const footerFourthOne = document.createElement('p');
  footerFourthOne.setAttribute('class', 'footer-contact');
  footerFourthOne.innerHTML = '+256 777-338787';
  const footerFourthTwo = document.createElement('p');
  footerFourthTwo.setAttribute('class', 'rare-paragraph');
  footerFourthTwo.innerHTML = 'BOOKATABLE @RESTAURANT.COM';
  const footerFourthThree = document.createElement('p');
  footerFourthThree.innerHTML = '67 Blackleather Street';
  const footerFourthFour = document.createElement('p');
  footerFourthFour.innerHTML = 'LOWER SQ';
  const footerFourthFive = document.createElement('p');
  footerFourthFive.innerHTML = 'GULU';
  const footerFourthSix = document.createElement('p');
  footerFourthSix.innerHTML = 'UGANDA';
  footerFourth.appendChild(footerFourthOne);
  footerFourth.appendChild(footerFourthTwo);
  footerFourth.appendChild(footerFourthThree);
  footerFourth.appendChild(footerFourthFour);
  footerFourth.appendChild(footerFourthFive);
  footerFourth.appendChild(footerFourthSix);
};

export { footer };