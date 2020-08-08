const contact = () => {

    let content = document.getElementById('content');

    let contactInputs = document.createElement('div')
    contactInputs.setAttribute('class', 'contact-inputs hide-contact-inputs')
    content.appendChild(contactInputs)

    let contactInputsPg = document.createElement('p')
    contactInputsPg.innerHTML = 'CONTACT DETAILS'
    contactInputs.appendChild(contactInputsPg)

    let nameEmailPhone = document.createElement('div')
    nameEmailPhone.setAttribute('class', 'name-email-phone')
    contactInputs.appendChild(nameEmailPhone)

    function contactDeatils(){

        let inputDetails = [
            {
                className: 'name-input',
                labelName: 'name',
                inputType: 'text',
                labelContent: 'Name'
            },
            {
                className: 'email-input',
                labelName: 'email',
                inputType: 'email',
                labelContent: 'Email'
            },
            {
                className: 'phone-input',
                labelName: 'number',
                inputType: 'number',
                labelContent: 'Phone Number'
            }
        ]

        for(let i = 0; i < inputDetails.length; i++){

        let nameInput = document.createElement('div')
        nameInput.setAttribute('class', `input ${ inputDetails[i].className }`)
        nameEmailPhone.appendChild(nameInput)
            console.log(inputDetails[i].className)

        let nameInputLabel = document.createElement('label')
        nameInputLabel.setAttribute('for', ` ${inputDetails[i].labelName} `)
        nameInputLabel.innerHTML = inputDetails[i].labelContent
        nameInput.appendChild(nameInputLabel)
    
        let nameInputInput = document.createElement('input')
        nameInputInput.setAttribute('type', ` ${inputDetails[i].inputType} `)
        nameInput.appendChild(nameInputInput)
        }

    }

    contactDeatils()

    let messageArea = document.createElement('div')
    messageArea.setAttribute('class', 'message-area')
    contactInputs.appendChild(messageArea)

    let messageAreaLabel = document.createElement('label')
    messageAreaLabel.innerHTML = 'Message'
    messageArea.appendChild(messageAreaLabel)

    let messageAreaTextArea = document.createElement('textarea')
    messageAreaTextArea.setAttribute('cols', '20')
    messageAreaTextArea.setAttribute('rows', '10')
    messageArea.appendChild(messageAreaTextArea)
}

export { contact }