export class User {

  constructor(public id: number,
              public name: string,
              public gender: string,
              public country: string,
              public city: string,
              public storyScore: number,
              public gameScore: number,
              public hasSeen: number[],
              public hasGuessedRight: number[],
              public ownStories: number[]) {
  }

}
