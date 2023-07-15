const changeWindowHistory = (currentQuestionIndex?: number) => {
    currentQuestionIndex ? currentQuestionIndex : currentQuestionIndex = 0;

    if(currentQuestionIndex < 10){
        document.title = `Quiz App - Question ${currentQuestionIndex + 1}`;
        window.history.replaceState(null, `Quiz App - Question ${currentQuestionIndex + 1}`, `/quiz-app/question-${currentQuestionIndex + 1}`);
    }else{
        document.title = 'Quiz App - Summary';
        window.history.replaceState(null, 'Quiz App - Summary', '/quiz-app/summary');
    }
}

export default changeWindowHistory;