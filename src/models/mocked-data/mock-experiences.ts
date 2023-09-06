import Experience from '../experience';

export const EXPERIENCES: Experience[] = [
   /** Jobs */
 {
    id: 1,
    type: 'job',
    name_corporation: 'Win-Win',
    post_name: 'Développeur Back-End',
    description: 'Intégration de maquettes, création de bases de données',
    date_entry: new Date(2023, 0, 1),
    date_release: new Date(2023, 0, 30),
 },
 {
   id: 2,
   type: 'job',
   name_corporation: 'CERTICALL',
   post_name: 'Conseiller Multimédia',
   description: "Traitement des appels entrants, dépannage à distance",
   date_entry: new Date(2022, 11, 1),
   date_release: new Date(2023, 1, 28),
},
{
   id: 3,
   type: 'job',
   name_corporation: 'Alicia Locks',
   post_name: 'Intégrateur web',
   date_entry: new Date(2021, 8, 1),
   description: 'Création du site vitrine "alicialocks.fr"',
   date_release: new Date(2021, 10, 30),
},

   /** Formations */
{
   id: 4,
   type: 'formation',
   name_corporation: 'OPENCLASSROOMS',
   post_name: "Développeur d'application JavaScript / REACT",
   description: "...",
   date_entry: new Date(2018, 6, 1),
   date_release: new Date(2023, 7, 30),
 },
 {
   id: 5,
   type: 'formation',
   name_corporation: 'Human Booster',
   post_name: "Développeur PHP / Symfony / Scrum",
   description: "...",
   date_entry: new Date(2018, 6, 1),
   date_release: new Date(2018, 7, 30),
 },
{
   id: 6,
   type: 'formation',
   name_corporation: 'IUT Arles',
   post_name: 'DUT Services et réseaux de communication',
   description: "...",
   date_entry: new Date(2011, 6, 1),
   date_release: new Date(2013, 7, 30),
},
{
   id: 7,
   type: 'formation',
   name_corporation: 'Lycée du Rempart',
   post_name: 'BAC STI ÉLÉCTRONIQUE',
   date_entry: new Date(2009, 1, 1),
   description: "...",
   date_release: new Date(2011, 7, 30),
},

];

export default EXPERIENCES;