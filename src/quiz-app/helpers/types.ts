interface IResponse {
    userId: number;
    id: number;
    title: string;
    body: string;
}

interface IQuestion {
    title: string;
    options: string[];
    answer: string;
}

interface IState {
    currentQuestionIndex: number,
    questions: IQuestion[],
    currentQuestion: IQuestion | null,
    timer: NodeJS.Timeout | null,
    duration: number,
    userSelections: string[]
}

export type { IResponse, IQuestion, IState };