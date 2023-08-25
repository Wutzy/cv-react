export default class Skill {

    id: number;
    name: string;
    xp: number;
    type: string;
     
    constructor(
     id: number,
     name: string = '...',
     xp: number,
     type: string
    ) 

    {
     this.id = id;
     this.name = name;
     this.xp = xp;
     this.type = type;
    }
}