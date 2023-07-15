const changeWindowHistory = (currentQuestionIndex?: number) => {
    currentQuestionIndex ? currentQuestionIndex : currentQuestionIndex = 0;

    if(currentQuestionIndex < 10){
        window.history.replaceState(null, `Quiz App - Question ${currentQuestionIndex + 1}`, `/quiz-app/question-${currentQuestionIndex + 1}`);
        document.title = `Quiz App - Question ${currentQuestionIndex + 1}`;
    }else{
        window.history.replaceState(null, 'Quiz App - Summary', '/quiz-app/summary');
        document.title = 'Quiz App - Summary';
    }
}

export default changeWindowHistory;