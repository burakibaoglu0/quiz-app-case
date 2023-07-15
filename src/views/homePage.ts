import './homePage.scss';
import LandingPageImage from '../assets/images/Landing-Page.png';
import QuizAppImage from '../assets/images/Quiz-App.png';
import initQuizApp from '../quiz-app/views/quizApp';

const homePage = () => {
    window.history.pushState('','Home Page','/')

    const homePageContainer = document.createElement('div');
    homePageContainer.classList.add('home-page-content');

    homePageContainer.innerHTML = `
        <div class="home-page-content-left">
            <button data-action-type="landing-page" class="home-page-content-button">
                <span class="home-page-content-title">Visit to the Landing Page!</span>
            </button>
            <img src="${LandingPageImage}" alt="Landing Page Image" class="home-page-content-left-image" />
        </div>
        <div class="home-page-content-right">
            <button data-action-type="quiz-app" class="home-page-content-button">
                <span class="home-page-content-title">Start Quiz!</span>
            </button>
            <img src="${QuizAppImage}" alt="Quiz App Image" class="home-page-content-right-image" />
        </div>
    `;

    homePageContainer.querySelectorAll('.home-page-content-button').forEach(button => {
        button.addEventListener('click', () => {
            homePageContainer.remove();
            const actionType = button.getAttribute('data-action-type');

            if(actionType === 'quiz-app'){
                initQuizApp();
            }else if(actionType === 'landing-page'){
                //initLandingPage(); //TODO Create Landing Page
            }
        })});

    return homePageContainer;
}

export default homePage;