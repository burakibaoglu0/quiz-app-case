import './awards.scss';

const awards = () => {
    const awardsContainer = document.createElement('section');
    awardsContainer.classList.add('awards');

    awardsContainer.innerHTML = `
        <svg class="divider-rectangle" xmlns="http://www.w3.org/2000/svg" width="1428" height="806" viewBox="0 0 1428 806" fill="none">
            <path d="M1428 265.472V0L0 806H1428V265.472Z" fill="#FEF3C7"/>
        </svg>

        <div class="awards-row">
            <div class="awards-group">
                <svg class="awards-icon" xmlns="http://www.w3.org/2000/svg" width="57" height="39" viewBox="0 0 57 39" fill="none">
                    <path opacity="0.5" d="M3.07107 17.4973C-3.22858 11.1977 1.23308 0.42627 10.1421 0.42627H46.7107C55.6197 0.42627 60.0814 11.1977 53.7817 17.4973L35.4975 35.7816C31.5922 39.6868 25.2606 39.6868 21.3553 35.7816L3.07107 17.4973Z" fill="#0369A1"/>
                </svg>
                <div class="content-box">
                    <div class="content">
                        <div class="content-icon-container">
                            <svg class="content-icon" xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
                                <path d="M17.9875 10.6665H46.1685C46.1685 10.6665 43.8202 46.0188 32.0781 46.0188C26.342 46.0188 22.8476 37.5825 20.7736 28.9521C18.6019 19.9157 17.9875 10.6665 17.9875 10.6665Z" stroke="#78350F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M46.1685 10.6664C46.1685 10.6664 48.6251 8.04598 50.6667 7.99974C54.6667 7.90918 55.4061 10.6664 55.4061 10.6664C56.1891 12.2918 56.8152 16.5179 53.0579 20.4188C49.3003 24.3198 45.0941 27.7331 43.3824 28.952" stroke="#78350F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M17.9874 10.6669C17.9874 10.6669 15.4279 8.01662 13.3332 8.00027C9.33321 7.96904 8.59371 10.6669 8.59371 10.6669C7.81089 12.2923 7.18465 16.5183 10.9421 20.4193C14.6996 24.3203 19.062 27.7336 20.7734 28.9528" stroke="#78350F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M22.6843 53.3334C22.6843 48.4572 32.0779 46.019 32.0779 46.019C32.0779 46.019 41.4717 48.4572 41.4717 53.3334H22.6843Z" stroke="#78350F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <div class="content-title-and-category">
                            <div class="content-title-container">
                                <h2 class="content-title">
                                    Nibh viverra
                                </h2>
                            </div>
                        </div>
                        <p class="content-paragraph">
                            Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa. 
                        </p>
                    </div>
                </div>
            </div>
            <div class="awards-group">
            <svg class="awards-icon" xmlns="http://www.w3.org/2000/svg" width="39" height="39" viewBox="0 0 39 39" fill="none">
                <path opacity="0.5" d="M21.9283 3.07106C28.228 -3.22859 38.9994 1.23309 38.9994 10.1421L38.9994 29C38.9994 34.5229 34.5222 39 28.9994 39L10.1415 39C1.23244 39 -3.22922 28.2286 3.07043 21.9289L21.9283 3.07106Z" fill="#15803D"/>
            </svg>
            <div class="content-box">
                <div class="content">
                    <div class="content-icon-container">
                        <svg class="content-icon" xmlns="http://www.w3.org/2000/svg" width="65" height="64" viewBox="0 0 65 64" fill="none">
                            <path d="M53.6667 53.3332L11 39.9998M53.6667 53.3332H11V39.9998L53.6667 53.3332ZM53.6667 53.3332V31.9998C53.6667 20.2178 44.1155 10.6665 32.3333 10.6665C30.2152 10.6665 28.1693 10.9752 26.2381 11.5499C17.4259 14.1726 11 22.3358 11 31.9998V39.9998L53.6667 53.3332Z" stroke="#78350F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M43 24V26.6667" stroke="#78350F" stroke-width="1.5" stroke-linecap="round"/>
                            <path d="M32.3333 21.3335V24.0002" stroke="#78350F" stroke-width="1.5" stroke-linecap="round"/>
                            <path d="M21.6667 18.6665V21.3332" stroke="#78350F" stroke-width="1.5" stroke-linecap="round"/>
                        </svg>
                    </div>
                    <div class="content-title-and-category">
                        <div class="content-title-container">
                            <h2 class="content-title">
                                Cursus amet
                            </h2>
                        </div>
                    </div>
                    <p class="content-paragraph">
                        Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.
                    </p>
                </div>
            </div>
        </div>
        <div class="awards-group">
            <div class="awards-icon"></div>
        <div class="content-box">
            <div class="content">
                <div class="content-icon-container">
                    <svg class="content-icon" xmlns="http://www.w3.org/2000/svg" width="65" height="64" viewBox="0 0 65 64" fill="none">
                        <path d="M6.00002 53.3332V23.9998C6.00002 21.0543 8.38783 18.6665 11.3334 18.6665H54C56.9456 18.6665 59.3334 21.0543 59.3334 23.9998V53.3332C59.3334 56.2788 56.9456 58.6665 54 58.6665H11.3334C8.38783 58.6665 6.00002 56.2788 6.00002 53.3332Z" stroke="#78350F" stroke-width="1.5"/>
                        <path d="M23.3334 6.6665L32.6667 15.9998L42 6.6665" stroke="#78350F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div class="content-title-and-category">
                    <div class="content-title-container">
                        <h2 class="content-title">
                            Ipsum fermentum
                        </h2>
                    </div>
                </div>
                <p class="content-paragraph">
                    Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.
                </p>
            </div>
        </div>
    </div>
        </div>
    `;

    return awardsContainer;
}

export default awards;