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
  description: "..."
 },
 {
  id: 2,
  name: "Oh My Food",
  picture: OhMyFoodImg,
  types: ["#HTML", "#CSS"],
  description: "..."
 },
 {
  id: 3,
  name: "Game On",
  picture: GameOn,
  types: ["#HTML", "#CSS", "#JavaScript"],
  description: "..."
 },
 {
   id: 4,
   name: "Fisheye",
   picture: Fisheye,
   types: ["#HTML", "#CSS", "#JavaScript", "Accessibility"],
   description: "..."
  },
 {
   id: 5,
   name: "Les Petits Plats",
   picture: PetitsPlats,
   types: ["#HTML", "#CSS", "#Javascript"],
   description: "..."
},
{
   id: 6,
   name: "Pokédex",
   picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/009.png",
   types: ["#HTML", "#CSS", "#TypeScript", "#React"],
   description: "..."
}
];

export default PROJECTS;