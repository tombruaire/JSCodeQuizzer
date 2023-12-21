export class Question {
    constructor(
        public id: number,
        public libelle: string,
        public r1: string,
        public r2: string,
        public r3: string,
        public r4: string,
        public answers: string[], // Car il peut y avoir plusieurs réponses
    ) {}
}