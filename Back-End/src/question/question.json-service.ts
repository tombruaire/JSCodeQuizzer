import { areSameStrings, isArrayEmpty } from '../utils';
import { existsSync, readFileSync, writeFileSync } from 'fs';
import { Question } from './question';
import { QuestionService } from './question.service';

const DEFAULT_QUESTION_ID = 0;

export class QuestionJSONService implements QuestionService {
    private readonly questionJsonPath = './src/question/question.json';

    constructor() {
        this.writeDefaultQuestionsJsonFile();
    }

    insert(
        libelle: string,
        r1: string,
        r2: string,
        r3: string,
        r4: string,
        answers: string[],
    ): Question {
        const questions = this.getQuestionsFromJsonFile();

        this.checkQuestionExist(questions, libelle);

        const newId = this.generateId(questions);
        const newQuestion = new Question(
            newId,
            libelle,
            r1,
            r2,
            r3,
            r4,
            answers,
        );

        questions.push(newQuestion);

        return newQuestion;
    }

    update(
        id: number,
        libelle: string,
        r1: string,
        r2: string,
        r3: string,
        r4: string,
        answers: string[],
    ): Question {
        const questions = this.getQuestionsFromJsonFile();

        this.checkQuestionExist(questions, libelle);

        const updateQuestion = new Question(
            id,
            libelle,
            r1,
            r2,
            r3,
            r4,
            answers,
        );

        questions.push(updateQuestion);

        return updateQuestion;
    }

    getQuestionById(id: number): Question | null {
        const questions = this.getQuestionsFromJsonFile();
        const question = questions.find(
            (question) => question.id == id
        );
        return question || null;
    }

    delete(id: number): Question {
        throw new Error('Method not implemented.');
    }

    getAllQuestions(): Question[] {
        const questions = this.getQuestionsFromJsonFile();
        return questions;
    }

    private writeDefaultQuestionsJsonFile(): void {
        if (!existsSync(this.questionJsonPath)) {
            writeFileSync(this.questionJsonPath, JSON.stringify([]));
        }
    }

    private getQuestionsFromJsonFile(): Question[] {
        const buffer = readFileSync(this.questionJsonPath);
        const questions = JSON.parse(buffer.toString()) as Question[];
        return questions;
    }

    private checkQuestionExist(questions: Question[], libelle: string): void {
        const questionExist = questions.some((question) =>
            areSameStrings(question.libelle, libelle),
        );
        if (questionExist) {
            throw new Error('Cette question est déjà posée !');
        }
    }

    private generateId(questions: Question[]): number {
        if (isArrayEmpty(questions)) {
            return DEFAULT_QUESTION_ID;
        }

        const questionIds = questions.map((question) => question.id);

        return Math.max(...questionIds) + 1;
    }

    private overrideQuestions(questions: Question[]): void {
        writeFileSync(this.questionJsonPath, JSON.stringify(questions));
    }
}