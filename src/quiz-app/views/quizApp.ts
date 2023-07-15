import '../styles/index.scss';
import questionCard from '../components/questionCard/questionCard';
import createTimer from '../components/timer/timer';
import changeWindowHistory from '../helpers/utils';

const initQuizApp = () => {
    try {
      changeWindowHistory();

      const mainContainer = document.querySelector('#app');
      mainContainer?.classList.add('quiz-app');
      mainContainer?.appendChild(questionCard());
      mainContainer?.appendChild(createTimer());
    } catch (e) {
      console.log(e);
    }
}

export default initQuizApp;