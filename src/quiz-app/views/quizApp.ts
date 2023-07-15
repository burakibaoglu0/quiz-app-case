import '../styles/index.scss';
import questionCard from '../components/questionCard/questionCard';
import timer from '../components/timer/timer';

const initQuizApp = () => {
    try {
      const mainContainer = document.querySelector('#app');
      mainContainer?.appendChild(questionCard());
      mainContainer?.appendChild(timer());
    } catch (e) {
      console.log(e);
    }
}

export default initQuizApp;