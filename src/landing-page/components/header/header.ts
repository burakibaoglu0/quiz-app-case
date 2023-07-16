import './header.scss';
import { headerItems } from '../../helpers/enums';

const Header = () => {
    const _header = document.createElement('header');
    _header.classList.add('header');

    _header.innerHTML = `
        <div class="header-left">
            ${headerItems.map(item => item.pos === 'left' ? `
            <button class="header-item-button">
                <a class="header-item-link" href="${item.path}">
                    <span class="header-item-text">${item.text}</span>
                </a>
            </button>
            ` : '').join('')}
        </div>
        <div class="header-right">
        ${headerItems.map(item => item.pos === 'right' ? `
            <button class="header-item-button ${item.border ? 'bordered' : ''}">
                <a class="header-item-link" href="${item.path}">
                    <span class="header-item-text">${item.text}</span>
                </a>
            </button>
        ` : '').join('')}
        </div>
        `

        _header.querySelectorAll('.header-item-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
            });
        });

    return _header;
};

export default Header;