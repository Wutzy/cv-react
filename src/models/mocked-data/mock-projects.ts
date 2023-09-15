import Project from '../project';
import BookiImg from '../../medias/projets/booki.jpg';
import OhMyFoodImg from '../../medias/projets/ohmyfood.jpg';
import GameOn from '../../medias/projets/gameon.jpg';
import Fisheye from '../../medias/projets/fisheye.jpg';
import PetitsPlats from '../../medias/projets/lespetitsplats.jpg';


export const PROJECTS: Project[] = [
 {
  id: 1,
  name: "Booki",
  picture: BookiImg,
  types: ["#HTML", "#CSS"],
  description: "...",
  ghPages: "https://wutzy.github.io/Booki/"
 },
 {
  id: 2,
  name: "Oh My Food",
  picture: OhMyFoodImg,
  types: ["#HTML", "#CSS"],
  description: "À partir d'une maquette fournie, j'ai travaillé sur l'intégration de la version mobile d'un site de foodtech avec des animations CSS. Ce projet m'a permis de mettre en pratique mes compétences en HTML et CSS, tout en utilisant Sass pour faciliter la gestion du code CSS. Le résultat final est un site web moderne qui met en avant les plats proposés par l'entreprise.",
  ghPages: "https://wutzy.github.io/projet3/"
 },
 {
  id: 3,
  name: "Game On",
  picture: GameOn,
  types: ["#HTML", "#CSS", "#JavaScript"],
  description: "J'ai travaillé à partir d'une maquette fournie pour créer une landing page avec HTML, CSS et JavaScript. L'objectif était de permettre aux utilisateurs de s'inscrire à un concours national de jeux vidéo. Le résultat final est une page web claire et attrayante qui permet aux utilisateurs de remplir un formulaire d'inscription. J'ai ajouté du code JavaScript pour rendre le formulaire de contact pleinement fonctionnel, en validant les champs du formulaire côté client avant l'envoi des données au serveur.",
  ghPages: "https://wutzy.github.io/GameOn/"
 },
 {
   id: 4,
   name: "Fisheye",
   picture: Fisheye,
   types: ["#HTML", "#CSS", "#JavaScript", "Accessibility"],
   description: "J'ai travaillé à partir d'une maquette fournie pour créer un site web pour une plateforme de photographes. J'ai utilisé les technologies HTML, CSS, JavaScript pour créer le site web. Un gros effort a été fait pour que le site soit accessible, avec notamment une navigation au clavier ou avec un lecteur d'écran. Ce projet m'a permis de renforcer mes compétences  en matière de responsive design et d'accessibilité.",
   ghPages: "https://wutzy.github.io/Front-End-Fisheye/"
  },
 {
   id: 5,
   name: "Les Petits Plats",
   picture: PetitsPlats,
   types: ["#HTML", "#CSS", "#Javascript"],
   description: "L'objectif était de créer une page web responsive pour un site de recettes de cuisine, en utilisant une maquette fournie comme guide. Pour faciliter la recherche de recettes, j'ai développé un algorithme en JavaScript. J'ai utilisé les technologies HTML, CSS, Sass, JavaScript et Bootstrap pour concevoir une page web esthétique, fonctionnelle et facile à naviguer. Ce projet m'a permis de renforcer mes compétences en développement front-end, en particulier en algorithmie pour la recherche de recettes.",
   ghPages: ""
},
{
   id: 6,
   name: "Pokédex",
   picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/009.png",
   types: ["#HTML", "#CSS", "#TypeScript", "#React"],
   description: "Ce projet m'a permis de m'initier à Typescript via la création d'un Pokedex developpé grâce à la librairie React. J'ai pu suivre un tutoriel vidéo pour mener à bien les différentes étapes. Le but était surtout de m'initier et de voir un exemmple d'utilisation de Typescript/React.",
   ghPages: ""
}
];

export default PROJECTS;