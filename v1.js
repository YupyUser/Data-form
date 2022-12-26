const wrapper = document.querySelector('.wrapper');
const body = document.body;
const form = document.getElementById('form');


function getValueFromForm (event) {
    event.preventDefault();
    const name = form.querySelector('[name="name"]');
    const number = form.querySelector('[name="number"]');
    const checkbox = form.querySelector('[name="checkbox"]');
    const plan = form.querySelector('[name="checkbox"]');

    const values = {
        name:name.value,
        age:number.value,
        checkbox:checkbox.checked,
        plan:plan.value,
    }
    console.log(values)
}


form.addEventListener('submit',getValueFromForm);