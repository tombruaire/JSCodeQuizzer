import { Admin } from "./admin";
import { AdminService } from "./admin.service";

export class AdminController {
    constructor(private adminService: AdminService) {}

    login(username: string, password: string): Admin {
        return this.adminService.login(username, password);
    }
}