const wrapper = document.querySelector('.wrapper');
const body = document.body;
const {form} = document.forms;
console.log(document.forms)

function getValueFromForm (event) {
    event.preventDefault();

    const formData = new FormData(form);
    const values = Object.fromEntries(formData.entries());

    console.log(formData.entries())
    console.log(Object)
    console.log(values)
}

form.addEventListener('submit',getValueFromForm);