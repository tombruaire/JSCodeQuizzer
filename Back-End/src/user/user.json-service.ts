import { areSameStrings, isArrayEmpty } from '../utils';
import { readFileSync, writeFileSync, existsSync } from "fs";
import { User } from "./user";
import { UserService } from "./user.service";

const DEFAULT_USER_ID = 0;

export class UserJSONService implements UserService {
    private readonly usersJsonPath = './src/user/users.json';

    constructor() {
        this.writeDefaultUsersJsonFile();
    }

    insert(username: string, score: number): User {
        const users = this.getUsersFromJsonFile();

        this.checkUsernameExist(users, username);

        const newId = this.generateId(users);
        const newUser = new User(
            newId,
            username,
            score,
        );

        users.push(newUser);

        return newUser;
    }

    update(id: number, username: string, score: number): User {
        const users = this.getUsersFromJsonFile();

        this.checkUsernameExist(users, username);

        const updateUser = new User(
            id,
            username,
            score,
        );

        users.push(updateUser);

        return updateUser;
    }

    delete(id: number): User {
        throw new Error("Method not implemented");
    }

    getUserById(id: number): User | null {
        const users = this.getUsersFromJsonFile();

        const existingUser = users.find((user) => user.id == id);
        return existingUser || null;
    }

    getAllUsers(): User[] {
        const users = this.getUsersFromJsonFile();
        return users;
    }

    private getUsersFromJsonFile(): User[] {
        const buffer = readFileSync(this.usersJsonPath);
        const questions = JSON.parse(buffer.toString()) as User[];
        return questions;
    }

    private checkUsernameExist(users: User[], username: string): void {
        const usernameExist = users.some((user) =>
            areSameStrings(user.username, username),
        );
        if (usernameExist) {
            throw new Error("Ce nom d'utilisateur est déjà utilisé !");
        }
    }

    private generateId(users: User[]): number {
        if (isArrayEmpty(users)) {
            return DEFAULT_USER_ID;
        }

        const userIds = users.map((user) => user.id);

        return Math.max(...userIds) + 1;
    }

    private writeDefaultUsersJsonFile(): void {
        if (!existsSync(this.usersJsonPath)) {
            writeFileSync(this.usersJsonPath, JSON.stringify([]));
        }
    }

    private overrideUsers(users: User[]): void {
        writeFileSync(this.usersJsonPath, JSON.stringify(users));
    }

}