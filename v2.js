const wrapper = document.querySelector('.wrapper');
const body = document.body;
const form = document.getElementById('form');

function isCheckboxOrRadio (type) {
  return ['checkbox','radio'].includes(type);
}
function getValueFromForm (event) {
    event.preventDefault();
    
    const fields = document.querySelectorAll('input,select,textarea');
    const values = { 

    }

    fields.forEach(field => {
        const {name, value, type, checked} = field;
        values[name] = isCheckboxOrRadio(type) ? checked : value;
    });

    console.log(values)
}

form.addEventListener('submit',getValueFromForm);