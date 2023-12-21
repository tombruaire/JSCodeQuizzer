// Importation de la classe User
import { User } from "./user";
// Importation de l'interface UserService
import { UserService } from "./user.service";
// Importation des objets 'Request', 'Response' et 'NextFunction'
import { Request, Response, NextFunction } from "express";

// Création d'un Controller
// pour contrôler les services de l'interface User
export class UserController {
    constructor(
        // Instanciation de l'interface UserService
        private userService: UserService
    ) {}

    // Insertion d'un utilisateur
    insertUser(username: string, score: number): User {

        // username.check()
        if (!username) {
            throw new Error("Un nom d'utilisateur est requis pour commencer le Quiz.");
        }
        if (username.indexOf(' ') > 0) {
            throw new Error("Le nom d'utilisateur ne doit pas contenir d'espace.");
        }
        if (username.length > 15) {
            throw new Error("Le nom d'utilisateur ne doit pas dépasser 15 caractères.");
        }

        // score.check()
        if (!Number.isInteger(score)) {
            throw new Error("Le score doit être un entier.");
        }
        if (score < 0) {
            throw new Error("Le score ne peut pas être inférieur à 0.");
        }

        return this.userService.insert(username, score);
    }

    // Modification d'un utilisateur
    updateUser(id: number, username: string, score: number): User {

        // id.check()
        if (!Number.isInteger(id)) {
            throw new Error("L'id de l'utilisateur doit être un entier.");
        } else if (id < 0) {
            throw new Error("L'id ne peut pas être inférieur à 0.");
        } else if (id) { // S'il y a un id passé en paramètre
            // username.check()
            if (!username) {
                throw new Error("Un nom d'utilisateur est requis pour commencer le Quiz.");
            }
            if (username.indexOf(' ') > 0) {
                throw new Error("Le nom d'utilisateur ne doit pas contenir d'espace.");
            }
            if (username.length > 15) {
                throw new Error("Le nom d'utilisateur ne doit pas dépasser 15 caractères.");
            }

            // score.check()
            if (!Number.isInteger(score)) {
                throw new Error("Le score doit être un entier.");
            }
            if (score < 0) {
                throw new Error("Le score ne peut pas être inférieur à 0.");
            }
        }

        return this.userService.update(id, username, score);
    }

    // Suppression d'un utilisateur
    deleteUser(id: number): User {
        if (!Number.isInteger(id)) {
            throw new Error("L'id de l'utilisateur doit être un entier.");
        }
        if (id < 0) {
            throw new Error("L'id ne peut pas être inférieur à 0.");
        }
        return this.userService.delete(id);
    }

    // Affichage des informations de l'utilisateur en fonction de son id
    getUserById(id: number): User | null {
        if (!Number.isInteger(id)) {
            throw new Error("L'id de l'utilisateur doit être un entier.");
        }
        if (id < 0) {
            throw new Error("L'id ne peut pas être inférieur à 0.");
        }
        return this.userService.getUserById(id);
    }

    // Affichage de tous les utilisateurs
    getAllUsers(req: Request, res: Response, next: NextFunction): void {
        try {
            const users = this.userService.getAllUsers();
            res.json(users);
        } catch (error: unknown) {
            next(error);
        }
    }
}
