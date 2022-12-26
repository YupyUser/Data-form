const wrapper = document.querySelector('.wrapper');
const body = document.body;
const {form} = document.forms;

function getValueFromForm (event) {
    event.preventDefault();
    
    const {name,number,checkbox,plan} = form;

    const values = {
        name:name.value,
        age:number.value,
        chekbox:checkbox.checked,
        plan:plan.value
    }

    console.log(values)
}

form.addEventListener('submit',getValueFromForm);