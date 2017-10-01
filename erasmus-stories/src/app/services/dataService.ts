import {Injectable} from "@angular/core";
import {User} from "../entities/User";


const array = [-1];
@Injectable()
export class DataService {

  constructor() {
  }

  private urlPath: string[] = [
    "http://www.keatleyphoto.com/wp-content/uploads/2016/05/IMG_3486.jpg",
    "http://www.keatleyphoto.com/wp-content/uploads/2016/05/IMG_0555.jpg",
    "http://www.keatleyphoto.com/wp-content/uploads/2016/05/IMG_0502.jpg",
    "http://www.keatleyphoto.com/wp-content/uploads/2016/05/IMG_8782.jpg",
    "http://www.keatleyphoto.com/wp-content/uploads/2016/05/IMG_8968.jpg",
    "http://www.keatleyphoto.com/wp-content/uploads/2016/06/John_Keatley_iPhone_portrait_Mitchell_2074.jpg",

    "http://www.keatleyphoto.com/wp-content/uploads/2016/05/IMG_6707.jpg",
    "http://www.keatleyphoto.com/wp-content/uploads/2016/05/IMG_5965.jpg",
    "http://www.keatleyphoto.com/wp-content/uploads/2016/05/IMG_2404.jpg",
    "http://www.keatleyphoto.com/wp-content/uploads/2016/05/IMG_3486.jpg",
    "http://www.keatleyphoto.com/wp-content/uploads/2016/05/IMG_8405.jpg",
    "http://www.keatleyphoto.com/wp-content/uploads/2016/06/John_Keatley_iPhone_Portrait_Michelle_5714.jpg",
    "http://www.keatleyphoto.com/wp-content/uploads/2016/05/IMG_9310.jpg",
    "http://www.keatleyphoto.com/wp-content/uploads/2016/06/John_Keatley_iPhone_Portrait_Zoe_8702.jpg",
    "http://www.keatleyphoto.com/wp-content/uploads/2016/06/John_Keatley_iPhone_portrait_Jaimie_031.jpg",
    "http://www.keatleyphoto.com/wp-content/uploads/2016/06/John_Keatley_iPhone_portrait_Kaija_0854.jpg"

  ];

  private users: User[] = [
    new User(0, "Tina", "", "f", "Brazil", "Sao Paulo", this.urlPath[0], "#mechanical engineering", 0, 0, array, array, array),
    new User(1, "Karl", "", "m", "Australia", "Sydney", this.urlPath[1], "#sport", 0, 0, array, array, array),
    new User(2, "Hans", "", "m", "Germany", "Dortmund", this.urlPath[2], "#mechanical engineering", 0, 0, array, array, array),
    new User(3, "Mohammed", "", "m", "Turkey", "Istanbul", this.urlPath[3], "#linguistics", 0, 0, array, array, array),
    new User(4, "Marvin", "", "m", "Russia", "Moskau", this.urlPath[4], "#medicine", 0, 0, array, array, array),
    new User(5, "Felix", "", "m", "France", "Paris", this.urlPath[5], "#law", 0, 0, array, array, array),

    new User(6, "Klara", "", "f", "Spain", "Barcelona", this.urlPath[6], "#art&music", 0, 0, array, array, array),
    new User(7, "Lola", "", "f", "Sweden", "Stockholm", this.urlPath[7], "#medicine", 0, 0, array, array, array),
    new User(8, "Fabienne", "", "f", "Norway", "Oslo", this.urlPath[8], "#logistics", 0, 0, array, array, array),
    new User(9, "Mariana", "", "f", "Italy", "Rome", this.urlPath[9], "#physics", 0, 0, array, array, array),
    new User(10, "Mary", "", "f", "USA", "Kansas", this.urlPath[10], "#education", 0, 0, array, array, array),
    new User(11, "Louisa", "", "f", "Austria", "Vienna", this.urlPath[11], "#phylosophy", 0, 0, array, array, array),
    new User(12, "Jade", "", "f", "France", "Paris", this.urlPath[12], "#linguistics", 0, 0, array, array, array),
    new User(13, "Sina", "", "f", "Spain", "Madrid", this.urlPath[13], "#journalistic", 0, 0, array, array, array),
    new User(14, "Stephie", "", "f", "Slovenia", "Ljublana", this.urlPath[14], "#computer science", 0, 0, array, array, array),
    new User(15, "Sarah", "", "f", "Italy", "Pisa", this.urlPath[15], "#physics", 0, 0, array, array, array),
  ];

  getUsers() {
    return this.users;


  }

}
