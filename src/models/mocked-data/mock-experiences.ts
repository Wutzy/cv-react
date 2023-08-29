import Experience from '../experience';
   
export const EXPERIENCES: Experience[] = [
   /** Jobs */
 {
    id: 1,
    type: 'job',
    name_corporation: 'Entreprise 1',
    post_name: 'Devlopper Front-End',
    date_entry: new Date(2023, 0, 1),
    date_release: new Date(2023, 0, 30),
 },
 {
   id: 2,
   type: 'job',
   name_corporation: 'Entreprise 2',
   post_name: 'Developpeur Front-End',
   date_entry: new Date(2022, 11, 1),
   date_release: new Date(2023, 1, 28),
},
{
   id: 3,
   type: 'job',
   name_corporation: 'Win-Win',
   post_name: 'Developpeur PHP',
   date_entry: new Date(2021, 8, 1),
   date_release: new Date(2021, 10, 30),
},
{
   id: 4,
   type: 'job',
   name_corporation: 'Alicia Locks',
   post_name: 'Intégrateur Web',
   date_entry: new Date(2018, 6, 1),
   date_release: new Date(2018, 7, 30),
},


   /** Formations */
{
   id: 5,
   type: 'formation',
   name_corporation: 'IUT Arles',
   post_name: 'DUT Services et réseaux de communication',
   date_entry: new Date(2018, 6, 1),
   date_release: new Date(2018, 7, 30),
},

];
  
export default EXPERIENCES;