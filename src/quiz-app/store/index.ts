import { IState } from "../helpers/types";

const store = {
    state: {
        currentQuestionIndex: 0 as number,
        timer: null as NodeJS.Timeout | null,
        duration: 30 as number,
        userSelections: [] as string[],
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
        },
        setUserSelections(state: IState, payload: string) {
            state.userSelections.push(payload);
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
        },
        getUserSelections(state: IState){
            return state.userSelections;
        }
    }
}

export default store;