import Project from '../project';
import BookiSite from '../../medias/projets/booki.jpg';
import BookiLogo from '../../medias/projets/logo/booki.png';
import OhMyFoodSite from '../../medias/projets/ohMyFood.jpg';
import OhMyFoodLogo from '../../medias/projets/logo/ohMyFood.png';
import GameOnSite from '../../medias/projets/gameOn.jpg';
import GameOnLogo from '../../medias/projets/logo/gameOn.png';
import AliciaLocksLogo from '../../medias/projets/logo/aliciaLocks.jpg';
import AliciaLocksSite from '../../medias/projets/aliciaLocks.jpg';
import FisheyeLogo from '../../medias/projets/logo/fishEye.png';
import FisheyeSite from '../../medias/projets/fishEye.jpg';
import PetitsPlatsLogo from '../../medias/projets/logo/lesPetitsPlats.jpg';
import PetitsPlatsSite from '../../medias/projets/lesPetitsPlats.jpg';


export const PROJECTS: Project[] = [
 {
  id: 1,
  name: "Booki",
  logo: BookiLogo,
  picture: BookiSite,
  types: ["#HTML", "#CSS"],
  description: "...",
  ghPages: "https://wutzy.github.io/Booki/",
  gitHubRepo: "https://github.com/Wutzy/Booki"
 },
 {
  id: 2,
  name: "Oh My Food",
  logo: OhMyFoodLogo,
  picture: OhMyFoodSite,
  types: ["#HTML", "#CSS"],
  description: "À partir d'une maquette fournie, j'ai travaillé sur l'intégration de la version mobile d'un site de foodtech avec des animations CSS. Ce projet m'a permis de mettre en pratique mes compétences en HTML et CSS, tout en utilisant Sass pour faciliter la gestion du code CSS. Le résultat final est un site web moderne qui met en avant les plats proposés par l'entreprise.",
  ghPages: "https://wutzy.github.io/projet3/",
  gitHubRepo: "https://github.com/Wutzy/projet3"
 },
 {
  id: 3,
  name: "Game On",
  logo: GameOnLogo,
  picture: GameOnSite,
  types: ["#HTML", "#CSS", "#JavaScript"],
  description: "J'ai travaillé à partir d'une maquette fournie pour créer une landing page avec HTML, CSS et JavaScript. L'objectif était de permettre aux utilisateurs de s'inscrire à un concours national de jeux vidéo. Le résultat final est une page web claire et attrayante qui permet aux utilisateurs de remplir un formulaire d'inscription. J'ai ajouté du code JavaScript pour rendre le formulaire de contact pleinement fonctionnel, en validant les champs du formulaire côté client avant l'envoi des données au serveur.",
  ghPages: "https://wutzy.github.io/GameOn/",
  gitHubRepo: "https://github.com/Wutzy/GameOn-website-FR"
 },
 {
   id: 4,
   name: "Fisheye",
   logo: FisheyeLogo,
   picture: FisheyeSite,
   types: ["#HTML", "#CSS", "#JavaScript", "Accessibility"],
   description: "J'ai travaillé à partir d'une maquette fournie pour créer un site web pour une plateforme de photographes. J'ai utilisé les technologies HTML, CSS, JavaScript pour créer le site web. Un gros effort a été fait pour que le site soit accessible, avec notamment une navigation au clavier ou avec un lecteur d'écran. Ce projet m'a permis de renforcer mes compétences  en matière de responsive design et d'accessibilité.",
   ghPages: "https://wutzy.github.io/Front-End-Fisheye/",
   gitHubRepo: "https://github.com/Wutzy/Front-End-Fisheye"
  },
 {
   id: 5,
   name: "Les Petits Plats",
   logo: PetitsPlatsLogo,
   picture: PetitsPlatsSite,
   types: ["#HTML", "#CSS", "#Javascript"],
   description: "L'objectif était de créer une page web responsive pour un site de recettes de cuisine, en utilisant une maquette fournie comme guide. Pour faciliter la recherche de recettes, j'ai développé un algorithme en JavaScript. J'ai utilisé les technologies HTML, CSS, Sass, JavaScript et Bootstrap pour concevoir une page web esthétique, fonctionnelle et facile à naviguer. Ce projet m'a permis de renforcer mes compétences en développement front-end, en particulier en algorithmie pour la recherche de recettes.",
   ghPages: "https://github.com/Wutzy/Les-Petits-Plats",
   gitHubRepo: "https://github.com/Wutzy/Les-Petits-Plats"
},
{
   id: 6,
   name: "Pokédex",
   logo: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/009.png",
   picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/009.png",
   types: ["#HTML", "#CSS", "#TypeScript", "#React"],
   description: "Ce projet m'a permis de m'initier à Typescript via la création d'un Pokedex developpé grâce à la librairie React. J'ai pu suivre un tutoriel vidéo pour mener à bien les différentes étapes. Le but était surtout de m'initier et de voir un exemmple d'utilisation de Typescript/React.",
   ghPages: "https://github.com/Wutzy/Reactmon",
   gitHubRepo: "https://github.com/Wutzy/Reactmon"
},
{
   id: 7,
   name: "Alicia Locks",
   logo: AliciaLocksLogo,
   picture: AliciaLocksSite,
   types: ["#HTML", "#CSS", "#Wordpress"],
   description: "Site vitrine réalisé pour une graphiste freelance dans le but de présenter ses différents projets et prestations. Pour le realiser j'ai utilisé le CMS Wordpress avec son plugin Elementor pour la mise en page.",
   ghPages: "https://alicialocks.fr/",
   gitHubRepo: "https://alicialocks.fr/"
}
];

export default PROJECTS;