import './mainSneaker.scss';
import PexelsPhotobyRayPiedra from '../../assets/images/Pexels-Photo-by-Ray-Piedra.png';

const mainSneaker = () => {
    const mainSneaker = document.createElement('section');
    mainSneaker.classList.add('main-sneaker');

    mainSneaker.innerHTML = `
        <div class="main-sneaker-right">
            <h1>Collectible Sneakers</h1>
            <p>Sit elit feugiat turpis sed integer integer accumsan turpis. Sed suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices amet.</p>
            <div class="main-sneaker-right-buttons">
                <button class="bordered">
                    <a>
                        <span>Sign up now</span>
                    </a>
                </button>
                <button>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM12 20C14.1217 20 16.1566 19.1571 17.6569 17.6569C19.1571 16.1566 20 14.1217 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4C9.87827 4 7.84344 4.84285 6.34315 6.34315C4.84285 7.84344 4 9.87827 4 12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.84344 19.1571 9.87827 20 12 20ZM16.126 13.746L12.071 16.644C11.166 17.29 9.941 17.033 9.334 16.068C9.11494 15.7171 8.99918 15.3116 9 14.898V9.102C9 7.942 9.883 7 10.972 7C11.363 7 11.746 7.124 12.071 7.356L16.126 10.254C17.031 10.901 17.272 12.206 16.666 13.171C16.5251 13.3959 16.3417 13.5913 16.126 13.746ZM10.972 9.102V14.898L15.027 12L10.972 9.102Z" fill="#78350F"/>
                </svg>
                    <a>
                        <span>Watch Demo</span>
                    </a>
                </button>
            </div>
        </div>
        <div class="main-sneaker-left">
            <picture>
                <img src="${PexelsPhotobyRayPiedra}" alt="Pexels Photo by Ray Piedra">
            </picture>
        </div>
    `;

    return mainSneaker;
}

export default mainSneaker;