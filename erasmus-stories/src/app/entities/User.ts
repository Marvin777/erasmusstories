export class User {

  constructor(public id: number,
              // Benutzerdaten
              public name: string,
              public mail: string,
              public gender: string,
              public country: string,
              public city: string,
              public url: string,
              public description: string,
              // Spieldaten
              public storyScore: number,
              public gameScore: number,
              public hasSeen: number[],
              public hasGuessedRight: number[],
              public ownStories: number[]) {
  }

}
