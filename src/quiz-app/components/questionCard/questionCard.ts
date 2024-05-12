import './questionCard.scss';
import store from '../../store';
import { setAnswer , handleClick } from '../../helpers/eventHandlers';
import { capitalizeFirstLetter } from '../../helpers/utils';

async function starterMethod() {
  if (!store.getters.getQuestions(store.state).length) {
    await store.actions.fetchQuestionsAction();
  }
}

starterMethod();

const questionContainer = document.createElement('div');
questionContainer.classList.add('question-container');

const questions = store.getters.getQuestions(store.state);
const answers: Record < number, string > = {
    0: 'A',
    1: 'B',
    2: 'C',
    3: 'D'
  };

const questionCard = () => {
  store.actions.currentQuestionAction(store.state);
  const currentQuestion = store.getters.getCurrentQuestion(store.state);

    const optionsHTML = currentQuestion?.options.map((option: string, index: number) => `
    <li class="question-option">
      <input readonly type="text" id="option-${answers[index]}" name="option-${answers[index]}" value="${answers[index]}" />
      <label for="option-${answers[index]}">${capitalizeFirstLetter(option)}</label>
    </li>
  `).join('');

  questionContainer.innerHTML = `
    <div class="questions-header">
      <p>Question: ${store.getters.getCurrentQuestionIndex(store.state) + 1} of ${questions?.length}</p>
    </div>
    <div class="questions-body non-selectable">
      <div class="question-card">
        <p class="question-title">${store.getters.getCurrentQuestionIndex(store.state) + 1}. ${capitalizeFirstLetter(currentQuestion?.title || '')}</p>
        <ul class="question-options">${optionsHTML}</ul>
      </div>
      <button class="next-button">${store.getters.getCurrentQuestionIndex(store.state) + 1 !== 10 ? 'Next' : 'Finish'}</button>
    </div>
  `;

  questionContainer.querySelectorAll('.question-option')?.forEach(_option => {
    _option.querySelector('input')?.addEventListener('click', setAnswer);
  });

  questionContainer.querySelector('.next-button')?.addEventListener('click', handleClick);

  return questionContainer;
}

export default questionCard;