import './timer.scss';
import { handleClick } from "../../helpers/eventHandlers";
import store from "../../store";

const updateTimerCircle = (timerContainer: HTMLDivElement) => {
  try{
    const duration = store.getters.getDuration(store.state);

    const timerCircle = timerContainer.querySelector('.timer-circle') as SVGCircleElement;
    timerCircle.setAttribute('stroke-dasharray', `${duration * 3.6} ${duration * 3.6}`);
    timerCircle.setAttribute('stroke-dashoffset', `${duration * 3.6}`);
    timerCircle.setAttribute('stroke-width', `${duration * 0.1}`);

    if (duration <= 20) {
      document.querySelector('.question-container .questions-body')?.classList.replace('non-selectable', 'selectable');
      timerContainer.classList.replace('non-selectable', 'selectable');
    }
  }catch(err){
    console.log('upodateTimerCircle error: ' + err);
  }
};

const updateTimerText = (timerContainer: HTMLDivElement) => {
  try{
    const duration = store.getters.getDuration(store.state);

    const timerText = timerContainer.querySelector('.timer-text') as SVGTextElement;
    const durationText = `00:${duration < 10 ? `0${duration}` : duration}s`;
    timerText.innerHTML = durationText;
  }catch(err){
    console.log('updateTimerText error: ' + err);
  }
};

const updateTimer = (timerContainer: HTMLDivElement) => {
  try {
    updateTimerCircle(timerContainer);
    updateTimerText(timerContainer);
  } catch (err) {
    console.log('updateTimer error: ' + err);
  }
};

const updateDuration = (newDuration?: number) => {
  const currentDuration = store.getters.getDuration(store.state);
  const _newDuration = newDuration ? newDuration : currentDuration > 0 ? currentDuration - 1 : 30;
  store.mutations.setDuration(store.state, _newDuration);
}

const startTimerInterval = (timerContainer: HTMLDivElement) => {
  try{    
    timerContainer.classList.replace('selectable', 'non-selectable');

    const _timerInterval = setInterval(() => {
      const _duration = store.getters.getDuration(store.state);
      updateDuration()
      updateTimer(timerContainer);
      if (_duration === 0) {  
        handleClick();
      }
    }, 1000);
  
    store.mutations.setTimer(store.state,_timerInterval);
  }catch(err){
    console.log('startTimerInterval error: ' + err);
  }
}

const timerContainer = document.createElement('div');
timerContainer.classList.add('timer-container', 'non-selectable');

timerContainer.innerHTML = `
  <svg height="200" width="200" class="timer-svg">
    <circle cx="100" cy="100" r="75" stroke-width="0" class="timer-circle"/>
    <text x="100" y="100" text-anchor="middle" dominant-baseline="middle" class="timer-text"></text>
  </svg>
`;

const createTimer = () => {
  updateDuration(30);
  updateTimer(timerContainer);
  startTimerInterval(timerContainer);

  return timerContainer;
}

export default createTimer;