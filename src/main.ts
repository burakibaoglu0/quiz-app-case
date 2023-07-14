import './style.scss';
import {
  fetchQuestions
} from './ts/api';
import store from './ts/store';


try {
  const questions = await fetchQuestions();

  const questionContainer = document.createElement('div');
  questionContainer.classList.add('question-container');

  const answers: Record < number, string > = {
    0: 'A',
    1: 'B',
    2: 'C',
    3: 'D'
  };

  const renderQuestion = (): void => {
    const question = questions ? questions[store.getters.getCurrentQuestionIndex(store.state)] : null;
    const optionsHTML = question?.options.map((option: string, index: number) => `
      <li class="question-option">
        <input readonly type="text" id="option-${answers[index]}" name="option-${answers[index]}" value="${answers[index]}" />
        <label for="option-${answers[index]}">${option}</label>
      </li>
    `).join('');

    questionContainer.innerHTML = `
      <div class="questions-header">
        <p>Question: ${store.getters.getCurrentQuestionIndex(store.state) + 1} of ${questions?.length}</p>
      </div>
      <div class="questions-body non-selectable">
        <div class="question-card">
          <p class="question-title">${store.getters.getCurrentQuestionIndex(store.state) + 1}. ${question?.title}</p>
          <ul class="question-options">${optionsHTML}</ul>
        </div>
        <button class="next-button">Next</button>
      </div>
    `;

    questionContainer.querySelectorAll('.question-option')?.forEach(_option => {
      _option.querySelector('input')?.addEventListener('click', setAnswer);
    });

    questionContainer.querySelector('.next-button')?.addEventListener('click', handleClick);
  }

  const setAnswer = (e: Event): void => {
    const selectedOption = e.target as HTMLInputElement;

    selectedOption.checked ? selectedOption.removeAttribute('checked') : selectedOption.setAttribute('checked', 'checked');

    questionContainer.querySelectorAll('.question-option')?.forEach(_option => {
      if (_option.querySelector('input')?.value !== selectedOption.value) {
        _option.querySelector('input')?.removeAttribute('checked');
      }
    });
  };

  const handleClick = (): void => {
    if (store.getters.getCurrentQuestionIndex(store.state) + 1 !== 10) {
      clearInterval(_timer!);
      store.mutations.setCurrentQuestionIndex(store.state, store.state.currentQuestionIndex + 1);
      createTimer();
      renderQuestion();
    }
  };

  renderQuestion();

  const timerContainer = document.createElement('div');
  timerContainer.classList.add('timer-container', 'non-selectable');

  timerContainer.innerHTML = `
    <svg height="200" width="200">
      <circle cx="100" cy="100" r="75" stroke-width="0"/>
      <text x="100" y="100" text-anchor="middle" dominant-baseline="middle" class="timer-text"></text>
    </svg>
  `;

  let _timer: NodeJS.Timer | null = null;

  const createTimer = () => {
    let _duration = 30;

    _timer = setInterval(() => {
      timerContainer.classList.replace('selectable', 'non-selectable');
      if (_duration > 0) {
        let _durationText = `00:${_duration < 10 ? `0${_duration}` : _duration}s`;
        (timerContainer.querySelector('svg text') as HTMLElement).innerHTML = _durationText;
        timerContainer.querySelector('svg circle')?.setAttribute('stroke-dasharray', `${_duration * 3.6} ${_duration * 3.6}`);
        timerContainer.querySelector('svg circle')?.setAttribute('stroke-dashoffset', `${_duration * 3.6}`);
        timerContainer.querySelector('svg circle')?.setAttribute('stroke-width', `${_duration * 0.1}`);

        _duration--;

        if (_duration <= 20) {
          questionContainer.querySelector('.questions-body')?.classList.replace('non-selectable', 'selectable');
          timerContainer.classList.replace('non-selectable', 'selectable');
          timerContainer.querySelector('svg circle')?.setAttribute('stroke-width', '1');
        }
      } else {
        let _durationText = `00:${_duration < 10 ? `0${_duration}` : _duration}s`;
        (timerContainer.querySelector('svg text') as HTMLElement).innerHTML = _durationText;
        timerContainer.classList.replace('selectable', 'non-selectable');
        handleClick();
      }
    }, 1000);
  }
  createTimer();

  const mainContainer = document.querySelector('#app');
  mainContainer?.appendChild(questionContainer);
  mainContainer?.appendChild(timerContainer);
} catch (e) {
  console.log(e);
}