import { Question } from "./question";
import { QuestionService } from "./question.service";
import { Request, Response, NextFunction } from "express";

export class QuestionController {
    constructor(private questionService: QuestionService) {}

    add(
        libelle: string,
        r1: string,
        r2: string,
        r3: string,
        r4: string,
        answer: string[],
    ): Question {
        if (!libelle) {
            throw new Error('Veuillez saisir une question');
        }
        if (!r1) {
            throw new Error('Veuillez saisir la 1ère réponse');
        }
        if (!r2) {
            throw new Error('Veuillez saisir la 2ème réponse');
        }
        if (!r3) {
            throw new Error('Veuillez saisir la 3ème réponse');
        }
        if (!r4) {
            throw new Error('Veuillez saisir la 4ème réponse');
        }
        if (!answer) {
            throw new Error(
                'Veuillez saisir la/les réponse(s) à cette question',
            );
        }
        return this.questionService.insert(libelle, r1, r2, r3, r4, answer);
    }

    update(
        id: number,
        libelle: string,
        r1: string,
        r2: string,
        r3: string,
        r4: string,
        answer: string[],
    ): Question {
        if (!libelle) {
            throw new Error('Veuillez saisir une question');
        }
        if (!r1) {
            throw new Error('Veuillez saisir la 1ère réponse');
        }
        if (!r2) {
            throw new Error('Veuillez saisir la 2ème réponse');
        }
        if (!r3) {
            throw new Error('Veuillez saisir la 3ème réponse');
        }
        if (!r4) {
            throw new Error('Veuillez saisir la 4ème réponse');
        }
        if (!answer) {
            throw new Error(
                'Veuillez saisir la/les réponse(s) à cette question',
            );
        }
        return this.questionService.update(id, libelle, r1, r2, r3, r4, answer);
    }

    getQuestionById(id: number): Question | null {
        if (!id) {
            throw new Error('Id is required!');
        }
        if (!Number.isInteger(id)) {
            throw new Error('Id must be a number!');
        }
        if (id < 0) {
            throw new Error('Id must be a positive number!');
        }

        return this.questionService.getQuestionById(id);
    }

    delete(id: number): Question {
        if (!id) {
            throw new Error('Id is required!');
        }
        if (!Number.isInteger(id)) {
            throw new Error('Id must be a number!');
        }
        if (id < 0) {
            throw new Error('Id must be a positive number!');
        }

        return this.questionService.delete(id);
    }

    getAllQuestions(req: Request, res: Response, next: NextFunction): void {
        try {
            const questions = this.questionService.getAllQuestions();
            res.json(questions);
        } catch (error: unknown) {
            next(error);
        }
    }
}