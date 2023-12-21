import { Admin } from "./admin";

export interface AdminService {
    login(username: string, password: string): Admin;
}