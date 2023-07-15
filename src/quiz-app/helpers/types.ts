export interface IResponse {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export interface IQuestions {
    title: string;
    options: string[];
    answer: string;
}

export interface IState {
    currentQuestionIndex: number,
    timer: NodeJS.Timeout | null,
    duration: number,
    userSelections: string[]
}