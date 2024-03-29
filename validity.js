const getCustomValidity = input => {
    const validity = input.validity;
    const name = input.name.charAt(0).toUpperCase() + input.name.slice(1);

    if (validity.valueMissing) {
        return `${name} is needed`;
    }
    if (validity.tooShort) {
        return `Please provide at least ${input.minLength} characters for ${name}`;
    }
    if (validity.tooLong) {
        return `Please provide at most ${input.maxLength} characters for ${name}`;
    }
    if (validity.rangeUnderFlow) {
        return `Please provide value which is at least ${input.min} for ${name}`
    }
    if (validity.rangeOverFlow) {
        return `Please provide value which is at most ${input.max} for ${name}`
    }
    if (validity.typeMismatch) {
        if (input.type === 'email') {
            return `Please provide a valid email - copy it from your mailbox`
        }
        if (input.type === 'url') {
            return `Please provide a valid url - copy it from browser address bar`
        }
        if (input.type === 'tel') {
            return `Please provide a valid telephone number in format: XXX-XXX-XXX`
        }
    }
    if (validity.patternMismatch) {
        if (input.type === 'tel') {
            return `Please provide a valid telephone number in format: XXX-XXX-XXX`
        }
    }
    return '';
}


const form = document.querySelector('form');

const validateInput = input => {
    const customValidityMessage = getCustomValidity(input);
    input.setCustomValidity(customValidityMessage);
}

//[...document.querySelectorAll('input')].forEach(validateInput);

const handleINputCHange = event => {
    const input = event.target;
    input
        .parentElement
        .querySelector('.contact__form--error').innerHTML = '';
    validateInput(input);

}


form.addEventListener('input', handleINputCHange)

form.addEventListener('submit', e => {
    e.preventDefault();

    const inputs = Array
        .from(e.currentTarget)
        .filter(el => el.id); // to remove button

    for (const input of inputs) {
        const customValidity = getCustomValidity(input)
        if (customValidity) {
            input
                .parentElement
                .querySelector('.contact__form--error')
                .innerHTML = customValidity;
            return;
        }
    }

    const values = inputs
        .reduce

    
    let data = new FormData(form);
    // console.log(data)
    // for (let [key, value] of data) {
    //     console.log(key);
    //     console.log(value);
    // }

    let obj = {};
    for (let [key, value] of data) {
        obj[key] = value;
    }

    console.log(obj)
    console.log(JSON.stringify(obj))
})

