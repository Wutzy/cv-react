export default class Skill {

    constructor(
     public id: number,
     public name: string = '...',
     public xp: number,
     public type: string
    )

    {
     this.id = id;
     this.name = name;
     this.xp = xp;
     this.type = type;
    }
}