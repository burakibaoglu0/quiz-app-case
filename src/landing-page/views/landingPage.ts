import '../assets/styles/index.scss';
import Header from '../components/header/header';
import mainSneaker from '../components/mainSneaker/mainSneaker';
import awards from '../components/awards/awards';

const initLandingPage = () => {
  document.title = document.title.split(' | ')[0]  + ' | ' + 'Landing Page';
  window.history.pushState('Landing Page', 'Landing Page', '/landing-page');

  const mainContainer = document.querySelector('#app');
  mainContainer?.classList.add('landing-page');

  mainContainer?.appendChild(Header());
  mainContainer?.appendChild(mainSneaker());
  mainContainer?.appendChild(awards());
};

export default initLandingPage;