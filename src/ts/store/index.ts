import { IState } from "../types";

const store = {
    state: {
        currentQuestionIndex: 0 as number,
        timer: null as NodeJS.Timeout | null,
        duration: 30 as number,
    },
    mutations: {
        setCurrentQuestionIndex(state: IState ,payload: number) {
            state.currentQuestionIndex = payload;
        },
        setTimer(state: IState, payload: NodeJS.Timeout | null) {
            state.timer = payload;
        },
        setDuration(state: IState, payload: number) {
            state.duration = payload;
        }
    },
    actions: {
    },
    getters: {
        getCurrentQuestionIndex(state: IState){
            return state.currentQuestionIndex;
        },
        getTimer(state: IState){
            return state.timer;
        },
        getDuration(state: IState){
            return state.duration;
        }
    }
}

export default store;