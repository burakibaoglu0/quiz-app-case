import urlConfig from './config';
import {
    IResponse,
    IQuestions
} from './types';

const answers = ['A', 'B', 'C', 'D'];
const randomAnswer = (): string => {
    return answers[Math.floor(Math.random() * answers.length)];
};

let questions: IQuestions[] | null = null;

export const fetchQuestions = async (): Promise < IQuestions[] | null > => {
    if (questions) return questions;

    try {
        const response = await fetch(urlConfig.BASE_URL);
        const data: IResponse[] = await response.json();
        questions = data.map((question: IResponse) => ({
            title: question.title,
            options: question.body.split('\n'),
            answer: randomAnswer()
        }));

        return questions?.slice(0, 10);
    } catch (err) {
        console.log(err);
        return null;
    }
};