import { Router } from "express";
import { QuestionController } from "./question.controller";

export class QuestionRouter {
    router = Router();

    constructor(private questionController: QuestionController) {
        this.configureRoutes();
    }

    private configureRoutes(): void {
        // Route pour afficher toutes les questions
        this.router.get('/', this.questionController.getAllQuestions.bind(
            this.questionController,
        ));

        // Route pour afficher une question (avec ses réponses multiples)
        this.router.get('/:id', (req, res, next) => {
            try {
                const result = this.questionController.getQuestionById(
                    parseInt(req.params.id)
                );
                res.status(200).json(result);
            } catch (error: unknown) {
                next(error);
            }
        });
    }
}