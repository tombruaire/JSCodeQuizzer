import { Admin } from "./admin";
import { AdminService } from "./admin.service";

export class AdminJSONService implements AdminService {
    private readonly adminJsonPath = './src/admin/admin.json';

    constructor() {
        //
    }

    login(username: string, password: string): Admin {
        throw new Error("Method not implemented.")
    }
}