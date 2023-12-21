import { Router } from "express";
import { AdminController } from "./admin.controller";
import { QuestionController } from "../question/question.controller";

export class AdminRouter {

    router = Router();

    constructor(
        private adminController: AdminController,
        private questionController: QuestionController
    ) {
        this.routes();
    }

    private routes(): void {
        this.router.post('/login', (req, res, next) => {
            try {
                const result = this.adminController.login(
                    req.body.username,
                    req.body.password
                );
                res.status(200).json(result);
            } catch (error: unknown) {
                next(error);
            }
        });
        this.router.post('/add-question', (req, res, next) => {
            try {
                const result = this.questionController.add(
                    req.body.libelle,
                    req.body.r1,
                    req.body.r2,
                    req.body.r3,
                    req.body.r4,
                    req.body.answer
                );
                res.status(200).json(result);
            } catch (error: unknown) {
                next(error);
            }
        });
        this.router.put('/:id/update', (req, res, next) => {
            try {
                const idQuestion = this.questionController.getQuestionById(
                    parseInt(req.params.id),
                );
                if (idQuestion) {
                    const updateQuestion = this.questionController.update(
                        parseInt(req.params.id),
                        req.body.libelle,
                        req.body.r1,
                        req.body.r2,
                        req.body.r3,
                        req.body.r4,
                        req.body.answer,
                    );
                    res.status(200).json(updateQuestion);
                }
            } catch (error: unknown) {
                next(error)
            }
        });
        this.router.delete('/:id/delete', (req, res, next) => {
            try {
                const result = this.questionController.delete(
                    parseInt(req.params.id),
                );
                res.status(200).json(result);
            } catch (error: unknown) {
                next(error);
            }
        });
    }

}