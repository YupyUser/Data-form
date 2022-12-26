const wrapper = document.querySelector('.wrapper');
const body = document.body;
const {form} = document.forms;

function isCheckboxOrRadio (type) {
    return ['checkbox','radio'].includes(type);
  }

function getValueFromForm (event) {
    event.preventDefault();

    const {elements} = form;
    const values = {};

    for(let i = 0;i<elements.length;i++) {
        const formElement = elements[i];
        const {name} = formElement;
        if (name) {
            const {value, type, checked} = formElement;
            values[name] = isCheckboxOrRadio(type) ? checked : value;
        }
    }
    console.log(values)
}

form.addEventListener('submit',getValueFromForm);