export class Story {

  constructor(public id: string,
              public authorUserId: number,
              public date: Date,
              public text: string,
              //Firstly optional
             // public picture: string,
              public comments: Comment[],
              public scoring: number,
              public voteUpUsers: number[],
              public voteDownUsers: number[]
    ) {
  }

}
