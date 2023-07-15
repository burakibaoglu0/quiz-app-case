import store from "../../store";
import './selectionTable.scss';

const renderUserSelectionsTable = () => {
    const table = document.createElement('table');
    const userSelections = store.getters.getUserSelections(store.state);

    table.classList.add('user-selections-table');
    table.innerHTML = `
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
        `

    document.querySelector('#app')?.querySelector('.question-container')?.classList.add('!hidden');
    document.querySelector('#app')?.querySelector('.timer-container')?.classList.add('!hidden');
    document.querySelector('#app')?.appendChild(table);

    return table;
}

export default renderUserSelectionsTable;