export default class Skill {

    id: number;
    name: string;
    years: number;
     
    constructor(
     id: number,
     name: string = '...',
     years: number
    ) 

    {
     this.id = id;
     this.name = name;
     this.years = years;
    }
}