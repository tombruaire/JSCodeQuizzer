import { Question } from "./question";

export interface QuestionService {
    insert(
        libelle: string,
        r1: string,
        r2: string,
        r3: string,
        r4: string,
        answer: string[],
    ): Question;
    update(
        id: number,
        libelle: string,
        r1: string,
        r2: string,
        r3: string,
        r4: string,
        answer: string[],
    ): Question;
    getQuestionById(id: number): Question | null;
    delete(id: number): Question;
    getAllQuestions(): Question[];
}