// Création d'une classe User
// 'export' pour importer la classe dans un autre fichier
export class User {
    constructor(
        public id: number,
        public username: string,
        public score: number
    ) {}
}