interface UserType {
  readonly id: number;
  firstName: string;
  lastName: string;
  nickname?: string;
  readonly regDateTime: Date;
  articles: Array<number>;
  books: Array<number>;
  shareArticles: Array<number>;
}

class User {
  constructor(attr: UserType) {
    for (const key in attr) {
      // @ts-ignore
      this[key] = attr[key];
    }
  }

  // getParams(): User {
  //   return {
  //
  //   }
  // }
}

export default User;
