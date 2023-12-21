// Importation du Router depuis la dépendance "express"
import { Router } from "express";
// Importation du Controller de User / UserController
import { UserController } from "./user.controller";

// Création d'une Routeur pour les User
// pour définir les routes (urls)
export class UserRouter {
    // Instanciation de Router
    router = Router();

    constructor(
        // Instanciation du Controller de User
        private userController: UserController
    ) {
        this.routes();
    }

    private routes(): void {
        // Route pour afficher tous les utilisateurs
        this.router.get('/', this.userController.getAllUsers.bind(
            this.userController,
        ));

        // Route pour afficher un utilisateur
        this.router.get('/:id', (req, res, next) => {
            try {
                const showData = this.userController.getUserById(
                    parseInt(req.params.id)
                );
                res.status(200).json(showData);
            } catch (error: unknown) {
                next(error);
            }
        });

        // Route pour ajouter l'utilisateur
        this.router.post('/insert', (req, res, next) => {
            try {
                const insertData = this.userController.insertUser(
                    req.body.username,
                    req.body.score
                );
                res.status(200).json(insertData);
            } catch (error: unknown) {
                next(error);
            }
        });

        // Route pour modifier un utilisateur
        this.router.post('/:id/update', (req, res, next) => {
            try {
                const updateData = this.userController.updateUser(
                    parseInt(req.params.id),
                    req.body.username,
                    req.body.score
                );
                res.status(200).json(updateData);
            } catch (error: unknown) {
                next(error);
            }
        });

        this.router.delete('/:id/delete', (req, res, next) => {
            try {
                const deleteData = this.userController.deleteUser(
                    parseInt(req.params.id)
                );
                res.status(200).json(deleteData);
            } catch (error: unknown) {
                next(error);
            }
        });
    }
}

