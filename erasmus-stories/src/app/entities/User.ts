export class User {

  constructor(public id: string,
              public name: string,
              public country: string,
              public city: string,
              public score: number,
              public hasSeen: number[],
              public hasGuessedRight: number[],
              public ownStories: number[]) {
  }

}
