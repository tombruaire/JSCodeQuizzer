import { Router } from "express";
import { AdminController } from "../admin/admin.controller";
import { UserController } from "../user/user.controller";
import { QuestionController } from "../question/question.controller";
import { AdminRouter } from "../admin/admin.router";
import { UserRouter } from "../user/user.router";
import { QuestionRouter } from "../question/question.router";
import { AdminService } from "../admin/admin.service";
import { UserService } from "../user/user.service";
import { QuestionService } from "../question/question.service";

export class ExpressRouter {

    router = Router();

    private adminController!: AdminController;
    private userController!: UserController;
    private questionController!: QuestionController;
    private adminRouter!: AdminRouter;
    private userRouter!: UserRouter;
    private questionRouter!: QuestionRouter;

    constructor(
        private adminService: AdminService,
        private userService: UserService,
        private questionService: QuestionService
    ) {
        this.configureControllers();
        this.configuresRouters();
        this.configureRoutes();
    }

    private configureControllers(): void {
        this.adminController = new AdminController(this.adminService);
        this.userController = new UserController(this.userService);
        this.questionController = new QuestionController(this.questionService);
    }

    private configuresRouters(): void {
        this.adminRouter = new AdminRouter(this.adminController, this.questionController);
        this.userRouter = new UserRouter(this.userController);
        this.questionRouter = new QuestionRouter(this.questionController);
    }

    private configureRoutes(): void {
        this.router.use('/admin', this.adminRouter.router);
        this.router.use('/user', this.userRouter.router);
        this.router.use('/question', this.questionRouter.router);
    }
}