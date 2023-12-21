// Importation de la classe User
// pour avoir accès aux propriétés
import { User } from "./user";

// Création d'une interface
// définissant les services (les actions) de la classe User importée
export interface UserService {
    // Insertion d'un utilisateur
    insert(username: string, score: number): User;
    // Modification d'un utilisateur en fonction de son id
    update(id: number, username: string, score: number): User;
    // Suppression d'un utilisateur en fonction de son id
    delete(id: number): User;
    // Affichage des informations de l'utilisateur en fonction de son id
    getUserById(id: number): User | null;
    // Affichage de tous les utilisateurs
    getAllUsers(): User[]; // User sera un tableau []
}