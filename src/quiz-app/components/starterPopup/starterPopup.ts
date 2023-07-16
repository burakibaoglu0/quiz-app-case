import './starterPopup.scss';
import initQuizApp from '../../views/quizApp';

const starterPopup = document.createElement('div');
starterPopup.classList.add('quiz-starter-popup');

const quizAppInfo: string[] = [
    "The quiz application contains 10 questions.",
    "All questions have A-B-C-D options.",
    "The current question seems on the page for 30 seconds, for 10-second the user can not select any option after 30 seconds current question will be passed automatically.",
    "The user can not return the passed question.",
    "After the quiz, all selections will appear in the table appearance.",
]

export const createStarterPopup = (homePageContainer: HTMLDivElement) => {
    starterPopup.innerHTML = `
        <div class="quiz-starter-popup-header">
          <h2 class="quiz-starter-popup-title"> Information about the quiz </h2>
          <span class="quiz-starter-popup-close-button"></span>
        </div>
        <div class="quiz-starter-popup-body">
          <ul class="quiz-starter-popup-info-list">
              ${quizAppInfo.map(item => `
                  <li class="quiz-starter-popup-info-item">
                      <span class="quiz-starter-popup-info-item-text">${item}</span>
                  </li>
              `).join('')}
          </ul>
        </div>
        <div class="quiz-starter-popup-footer">
            <button class="quiz-starter-button">
                <span>Start Quiz!</span>
            </button>
        </div>
    `;
    
    document.body.classList.add('pointer-events-none');
    starterPopup.querySelector('.quiz-starter-popup-close-button')?.addEventListener('click', () => {
        starterPopup.remove();
        document.body.classList.remove('pointer-events-none');
    });

    starterPopup.querySelector('.quiz-starter-button')?.addEventListener('click', () => {
        starterPopup.remove();
        homePageContainer.remove();
        initQuizApp();
    });
  
  return starterPopup;
}