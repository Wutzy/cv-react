export default class Experience {

    id: number;
    name_corporation: string;
    post_name: string;
    date_entry: Date;
    date_release: Date;
     
    constructor(
     id: number,
     name_corporation: string = 'string',
     post_name: string = 'string',
     date_entry: Date = new Date(),
     date_release: Date = new Date(),
    ) 

    {
     this.id = id;
     this.name_corporation = name_corporation;
     this.post_name = post_name;
     this.date_entry = date_entry;
     this.date_release = date_release;
    }
}