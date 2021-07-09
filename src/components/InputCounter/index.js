
import {store} from '../.././redux/store';
import {getTypeActiveAddInputCount, getTypeActiveRemoveInputCount} from '../../redux/actions';

const inputAddValueCount = document.querySelector(".input_value_add_count");
const btnAddValueInputCount = document.querySelector(".btn_add_value_input");
const inputRemoveValueCount = document.querySelector(".input_remove_value_count");
const btnRemoveValueInputCount = document.querySelector(".btn_remove_value_input");

btnAddValueInputCount.addEventListener("click" , () => {
    let valueUserInput = inputAddValueCount.value;
    store.dispatch(getTypeActiveAddInputCount(store.getState() + Number(valueUserInput)));
    inputAddValueCount.value = "";
});

btnRemoveValueInputCount.addEventListener("click" , () => {
    let valueUserInput = inputRemoveValueCount.value;
    store.dispatch(getTypeActiveRemoveInputCount(store.getState() - Number(valueUserInput)));
    inputRemoveValueCount.value = "";

});



