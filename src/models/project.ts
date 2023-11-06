export default class Project {

    // 1. Définition des valeurs et types par défaut des propriétés d'un Projet
    constructor(
     public id: number,
     public name: string = '...',
     public logo: string = '...',
     public picture: string = '...',
     public types: Array<string> = ['HTML', 'CSS'],
     public description: string = '...',
     public ghPages: string = '...',
     public gitHubRepo: string = '...'
    ) {
     // 2. Initialisation des propiétés d'un Projet.
     this.id = id;
     this.name = name;
     this.logo = logo;
     this.picture = picture;
     this.types = types;
     this.description = description;
     this.ghPages = ghPages;
     this.gitHubRepo = gitHubRepo;
    }
   }