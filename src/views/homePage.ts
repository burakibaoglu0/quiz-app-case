import './homePage.scss';
import { createStarterPopup } from '../quiz-app/components/starterPopup/starterPopup';

const homePage = () => {
    window.history.pushState('','Home Page','/')

    const homePageContainer = document.createElement('div');
    homePageContainer.classList.add('home-page-content');

    homePageContainer.appendChild(createStarterPopup(homePageContainer));

    return homePageContainer;
}

export default homePage;