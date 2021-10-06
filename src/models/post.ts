import {User} from "./user";

export class Post {

    constructor(public id: string,
                public title: string,
                public description: string,
                public users: User[],
                public date: Date,
                public nbreMaxParticipant: number,
                public imageUrl?: string

    ) {  }
  }
