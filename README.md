# JSCodeQuizzer

## Description du projet
Quiz réalisé à l'aide de [Express.js](https://expressjs.com/fr/) et de [Vue.js](https://fr.vuejs.org) proposant 10 questions autour du JavaScript. 

## IDE suggéré
[Visual Studio Code](https://code.visualstudio.com/download)

## Setup du projet
### 1. Clonage du repository
1. Télécharger [Git](https://git-scm.com/downloads) pour pouvoir utiliser la commande `git`
2. Cloner le repository
```bash
git clone https://github.com/tombruaire/JSCodeQuizzer.git
```

### 2. Installation des packages
Télécharger [Node.js](https://node.js/en/download) pour pouvoir utiliser la commande `npm`, permettant d'installer les packages.
#### Express.js - Dossier `Back-End`
```bash
cd Back-End
npm install dotenv express body-parser
npm install -D ts-node-dev jest ts-jest prettier @types/express @types/node @types/jest @types/body-parser
```
#### Vue.js - Dossier `Front-End`
```bash
cd ../Front-End/jscodequizzer
npm install vite
npm install axios
```

## Lancement du projet
Ouvrir un nouveau terminal pour lancer le Back-End : 
```bash
cd Back-End
npm run dev
```
Ouvrir un nouveau terminal pour lancer le Frond-End : 
```bash
cd Front-End/jscodequizzer
npm run dev
```

Bonne chance !