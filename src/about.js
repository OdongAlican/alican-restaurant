const about = () => {

    let content = document.getElementById('content');

    let aboutUsSection = document.createElement('div')
    aboutUsSection.setAttribute('class', 'about-us-section hide-about-us-section')
    content.appendChild(aboutUsSection)

    let aboutUsSectionH2 = document.createElement('h2')
    aboutUsSectionH2.innerHTML = "Welcome to Alican's Restaurant"
    aboutUsSection.appendChild(aboutUsSectionH2)

    let innerAboutSection = document.createElement('div')
    innerAboutSection.setAttribute('class', 'inner-about-section')
    aboutUsSection.appendChild(innerAboutSection)

    let aboutMain = document.createElement('div')
    aboutMain.setAttribute('class', 'about-main')
    innerAboutSection.appendChild(aboutMain)

    let aboutMainOne = document.createElement('p')
    aboutMainOne.innerHTML = `
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
                            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore 
                            veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim 
                            ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia 
                            consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque 
                            porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci 
                            velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam 
                            aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem
                                `
    let aboutMainTwo = document.createElement('p')
    aboutMainTwo.innerHTML = `
                            ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis 
                            autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae 
                            consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatu
                            `
    let aboutMainThree = document.createElement('h2')
    aboutMainThree.setAttribute('class', 'senior-chef')
    aboutMainThree.innerHTML = 'Sr. Chef John Doe'

    aboutMain.appendChild(aboutMainOne)
    aboutMain.appendChild(aboutMainTwo)
    aboutMain.appendChild(aboutMainThree)

    let aboutImage = document.createElement('div')
    aboutImage.setAttribute('class', 'about-image')
    innerAboutSection.appendChild(aboutImage)
}

export { about }