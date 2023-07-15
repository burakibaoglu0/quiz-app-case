import './timer.scss';
import { handleClick } from "../../helpers/eventHandlers";
import store from "../../store";

const timerContainer = document.createElement('div');
timerContainer.classList.add('timer-container');
timerContainer.classList.add('timer-container', 'non-selectable');

timerContainer.innerHTML = `
  <svg height="200" width="200">
    <circle cx="100" cy="100" r="75" stroke-width="0"/>
    <text x="100" y="100" text-anchor="middle" dominant-baseline="middle" class="timer-text"></text>
  </svg>
`;

const timer = () => {
  let _duration = store.getters.getDuration(store.state);

  const _timer = setInterval(() => {
    timerContainer.classList.replace('selectable', 'non-selectable');
    if (_duration > 0) {
      let _durationText = `00:${_duration < 10 ? `0${_duration - 1}` : _duration - 1}s`;
      (timerContainer.querySelector('svg text') as HTMLElement).innerHTML = _durationText;
      timerContainer.querySelector('svg circle')?.setAttribute('stroke-dasharray', `${_duration * 3.6} ${_duration * 3.6}`);
      timerContainer.querySelector('svg circle')?.setAttribute('stroke-dashoffset', `${_duration * 3.6}`);
      timerContainer.querySelector('svg circle')?.setAttribute('stroke-width', `${_duration * 0.1}`);

      _duration--;

      if (_duration <= 20) {
        document.querySelector('.question-container')?.querySelector('.questions-body')?.classList.replace('non-selectable', 'selectable');
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

  store.mutations.setTimer(store.state,_timer);

  return timerContainer;
}


export default timer;