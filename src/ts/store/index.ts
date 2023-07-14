const store = {
    state: {
        currentQuestionIndex: 0 as number
    },
    mutations: {
        setCurrentQuestionIndex(state: {
            currentQuestionIndex: number;
        },payload: number) {
            state.currentQuestionIndex = payload;
        }
    },
    actions: {
    },
    getters: {
        getCurrentQuestionIndex(state: {
            currentQuestionIndex: number;
        }){
            return state.currentQuestionIndex;
        }
    }
}

export default store;