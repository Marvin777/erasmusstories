export class Story {

  constructor(public id: string,
              public authorUserId: string,
              public date: Date,
              public text: string,
              //Firstly optional
              public picture: string,
              public comments: Comment,
              public scoring: number,
    ) {
  }

}
