import { IState, IQuestion } from "../helpers/types";
import { fetchQuestions } from "../api/fetchOperations";

const store = {
    state: {
        currentQuestionIndex: 0 as number,
        questions: [] as IQuestion[],
        currentQuestion: {} as IQuestion,
        timer: null as NodeJS.Timeout | null,
        duration: 30 as number,
        userSelections: [] as string[]
    },
    mutations: {
        setCurrentQuestionIndex(state: IState ,payload: number) {
            state.currentQuestionIndex = payload;
        },
        setQuestions(state: IState, payload: IQuestion[]) {
            state.questions = payload;
        },
        setCurrentQuestion(state: IState, payload: IQuestion) {
            state.currentQuestion = payload;
        },
        setTimer(state: IState, payload: NodeJS.Timeout | null) {
            state.timer = payload;
        },
        setDuration(state: IState, payload: number) {
            state.duration = payload;
        },
        setUserSelections(state: IState, payload: string) {
            state.userSelections.push(payload);
        }
    },
    actions: {
        async fetchQuestionsAction() {
            const questions = await fetchQuestions();
            store.mutations.setQuestions(store.state, questions as IQuestion[]);
        },
        currentQuestionAction(state: IState) {
            store.mutations.setCurrentQuestion(store.state, state.questions[state.currentQuestionIndex]);
        }
    },
    getters: {
        getCurrentQuestionIndex(state: IState){
            return state.currentQuestionIndex;
        },
        getQuestions(state: IState){
            return state.questions;
        },
        getCurrentQuestion(state: IState){
            return state.currentQuestion;
        },
        getTimer(state: IState){
            return state.timer;
        },
        getDuration(state: IState){
            return state.duration;
        },
        getUserSelections(state: IState){
            return state.userSelections;
        }
    }
}

export default store;