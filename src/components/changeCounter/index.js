
import { addValueCountOne , removeValueCountOne } from '../../redux/actions';
import { store } from '../../redux/store';

const valueCounter = document.getElementById("valueCounter");
const addBtn = document.querySelector(".add_value");
const removeBtn = document.querySelector(".remove_value");

addBtn.addEventListener("click" , () => {
    store.dispatch(addValueCountOne());
});

removeBtn.addEventListener("click" , () => {
    store.dispatch(removeValueCountOne());
});

store.subscribe(() => {
    valueCounter.innerHTML = store.getState();
});

valueCounter.innerHTML = store.getState();