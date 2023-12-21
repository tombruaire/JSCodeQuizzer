import * as dotenv from 'dotenv';
import { ExpressRouter } from './express-router';
import { ExpressServer } from './express-server';
import { AdminService } from '../admin/admin.service';
import { UserService } from '../user/user.service';
import { QuestionService } from '../question/question.service';
import { AdminJSONService } from '../admin/admin.json-service';
import { UserJSONService } from '../user/user.json-service';
import { QuestionJSONService } from '../question/question.json-service';

export class ExpressApplication {
    private allowedMainOrigin!: string;
    private expressRouter!: ExpressRouter;
    private port!: string;
    private server!: ExpressServer;
    private adminService!: AdminService;
    private userService!: UserService;
    private questionService!: QuestionService;

    constructor() {
        this.configureApplication();
    }
    

    bootstrap(): void {
        this.server.bootstrap();
    }

    private configureApplication(): void {
        this.configureEnvironment();
        this.configureVariables();
        this.configureServices();
        this.configureExpressRouter();
        this.configureServer();
    }

    private configureEnvironment(): void {
        dotenv.config({
            path: '.env'
        });
    }

    private configureVariables(): void {
        this.configureAllowedMainOrigin();
        this.configureServerPort();
    }

    private configureAllowedMainOrigin(): void {
        this.allowedMainOrigin = this.getAllowedMainOrigin();
    }

    private getAllowedMainOrigin(): string {
        const allowedMainOrigin = process.env.ALLOWED_MAIN_ORIGIN;
        if (!allowedMainOrigin) {
            throw new Error('No allowed main origin was found in env file.');
        }

        return allowedMainOrigin;
    }

    private configureServerPort(): void {
        this.port = this.getPort();
    }

    private getPort(): string {
        const port = process.env.PORT;
        if (!port) {
            throw new Error('Port non trouvé dans le fichier .env');
        }
        return port;
    }

    private configureServices(): void {
        this.adminService = new AdminJSONService();
        this.userService = new UserJSONService();
        this.questionService = new QuestionJSONService();
    }

    private configureExpressRouter(): void {
        this.expressRouter = new ExpressRouter(this.adminService, this.userService, this.questionService);
    }

    private configureServer(): void {
        this.server = new ExpressServer(this.allowedMainOrigin, this.expressRouter, this.port);
    }
}


