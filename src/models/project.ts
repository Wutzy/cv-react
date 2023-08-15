export default class Project {
    // 1. Typage des propiétés d'un Projet
    id: number;
    name: string;
    picture: string;
    types: Array<string>;
     
    // 2. Définition des valeurs par défaut des propriétés d'un Projet
    constructor(
     id: number,
     name: string = '...',
     picture: string = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/XXX.png',
     types: Array<string> = ['HTML'],
    ) {
     // 3. Initialisation des propiétés d'un Projet.
     this.id = id;
     this.name = name;
     this.picture = picture;
     this.types = types;
    }
   }