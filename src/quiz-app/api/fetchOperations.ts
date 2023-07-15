import urlConfig from '../helpers/config';
import {
    IResponse,
    IQuestion
} from '../helpers/types';

const answers = ['A', 'B', 'C', 'D'];
const randomAnswer = (): string => {
    return answers[Math.floor(Math.random() * answers.length)];
};

let questions: IQuestion[] | null = null;

export const fetchQuestions = async (): Promise < IQuestion[] | null > => {
    if (questions) return questions;

    try {
        const controller = new AbortController();
        const signal = controller.signal;

        const _timeout = setTimeout(() => {
            controller.abort();
          }, 5000);

        const response = await fetch(urlConfig.BASE_URL,{ signal });
        clearTimeout(_timeout);

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