export default class Experience {

    constructor(
     public id: number,
     public type: string = "job type",
     public name_corporation: string = 'string',
     public post_name: string = 'string',
     public description: string = "string",
     public date_entry: Date = new Date(),
     public date_release: Date = new Date(),
    )

    {
     this.id = id;
     this.type = type;
     this.name_corporation = name_corporation;
     this.post_name = post_name;
     this.description = description;
     this.date_entry = date_entry;
     this.date_release = date_release;
    }
}