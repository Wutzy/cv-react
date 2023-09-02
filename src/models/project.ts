export default class Project {

    // 1. Définition des valeurs et types par défaut des propriétés d'un Projet
    constructor(
     public id: number,
     public name: string = '...',
     public picture: string = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/XXX.png',
     public types: Array<string> = ['HTML'],
     public description: string = '...'
    ) {
     // 2. Initialisation des propiétés d'un Projet.
     this.id = id;
     this.name = name;
     this.picture = picture;
     this.types = types;
     this.description = description;
    }
   }