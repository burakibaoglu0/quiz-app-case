import questionCard from "../components/questionCard/questionCard";
import renderUserSelectionsTable from "../components/selectionTable/selectionTable";
import timer from "../components/timer/timer";
import store from "../store";
import changeWindowHistory from "./utils";

const setAnswer = (e: Event): void => {
    const selectedOption = e.target as HTMLInputElement;

    selectedOption.checked
    ? selectedOption.removeAttribute('checked')
    : selectedOption.setAttribute('checked', 'checked');

    const questionOptions = document.querySelectorAll('.question-option');

    questionOptions?.forEach(_option => {
        const optionInput = _option.querySelector('input');
        if (optionInput?.value !== selectedOption.value) {
          optionInput?.removeAttribute('checked');
        }
    });
};

const handleClick = (): void => {
    clearInterval(store.getters.getTimer(store.state)!);
    const selectedInput = document.querySelector('input[checked]') as HTMLInputElement;
    const userAnswer = selectedInput ? selectedInput.value : '-';
    store.mutations.setUserSelections(store.state, userAnswer);

    if (store.getters.getCurrentQuestionIndex(store.state) + 1 !== 10) {
      store.mutations.setCurrentQuestionIndex(store.state, store.state.currentQuestionIndex + 1);
      timer();
      questionCard();
    }else{
      store.mutations.setCurrentQuestionIndex(store.state, 10);
      renderUserSelectionsTable();
    }
    
    changeWindowHistory(store.getters.getCurrentQuestionIndex(store.state));
};


export { setAnswer, handleClick };