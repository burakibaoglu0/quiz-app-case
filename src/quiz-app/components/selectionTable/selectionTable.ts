import store from "../../store";
import './selectionTable.scss';

const renderUserSelectionsTable = () => {
    const summaryContainer = document.createElement('div');
    summaryContainer.classList.add('summary-container');
    
    const userSelections = store.getters.getUserSelections(store.state);

    summaryContainer.innerHTML = `
        <div class="user-selections-table-container">
          <div class="summary-title">
            <h2>Your Selections</h2>
          </div>
          <table class="user-selections-table">
            <thead>
              <tr>
                <th>Question</th>
                <th>Answer</th>
              </tr>
            </thead>
            <tbody>
                ${userSelections.map((selection, index) => `
                  <tr>
                    <td>${index + 1}</td>
                    <td>${selection}</td>
                  </tr>
                `).join('')}
            </tbody>
          </table>
          <div class="summary-container-buttons">
            <button class="summary-container-button" id="back-button"   onclick="window.location = 'https://baykar-case-study.vercel.app/'">Back</button">
          </div>
        </div>
    `;

    document.querySelector('#app')?.querySelector('.question-container')?.classList.add('!hidden');
    document.querySelector('#app')?.querySelector('.timer-container')?.classList.add('!hidden');
    document.querySelector('#app')?.appendChild(summaryContainer);
}

export default renderUserSelectionsTable;