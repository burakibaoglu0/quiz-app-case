import './style.scss';
import { fetchQuestions } from './ts/api';

try {
  const questions = await fetchQuestions();

  const questionContainer = document.createElement('div');
  questionContainer.classList.add('question-container');

  const answers: Record<number, string>  = {
    0: 'A',
    1: 'B',
    2: 'C',
    3: 'D'
  };

  let currentQuestionIndex = 0;

  const renderQuestion = ():void => {
    const question = questions ? questions[currentQuestionIndex] : null;
    const optionsHTML = question?.options.map((option: string, index: number) => `
      <li class="question-option">
        <input readonly type="text" id="option-${answers[index]}" name="option-${answers[index]}" value="${answers[index]}" />
        <label for="option-${answers[index]}">${option}</label>
      </li>
    `).join('');

    questionContainer.innerHTML = `
      <div class="questions-header">
        <p>Question: ${currentQuestionIndex + 1} of ${questions?.length}</p>
      </div>
      <div class="questions-body non-selectable">
        <div class="question-card">
          <p class="question-title">${currentQuestionIndex + 1}. ${question?.title}</p>
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

  const setAnswer = (e : Event):void => {
    const selectedOption = e.target as HTMLInputElement;
    
    selectedOption.checked ? selectedOption.removeAttribute('checked') : selectedOption.setAttribute('checked', 'checked');
    
    questionContainer.querySelectorAll('.question-option')?.forEach(_option => {
      if (_option.querySelector('input')?.value !== selectedOption.value) {
        _option.querySelector('input')?.removeAttribute('checked');
      }
    });
  }

  const handleClick = ():void => {
    if (currentQuestionIndex + 1 !== 10) {
      clearInterval(_timer!);
      currentQuestionIndex++;
      createTimer();
      renderQuestion();
    }
  }

  renderQuestion();

  let _timer: NodeJS.Timer | null = null;

  const createTimer = () => {
    let _duration = 30;

    _timer = setInterval(() => {
      if(_duration > 0){
        let _durationText =  `00:${_duration < 10 ? `0${_duration}` : _duration}s`;
        _duration--;

        _duration <= 20 ? questionContainer.querySelector('.questions-body')?.classList.replace('non-selectable', 'selectable') : null;
      }else{
        clearInterval(_timer!);
        handleClick();
      }
    }, 1000);
  }
  createTimer();

  const mainContainer = document.querySelector('#app');
  mainContainer?.appendChild(questionContainer);
} catch (e) {
  console.log(e);
}
