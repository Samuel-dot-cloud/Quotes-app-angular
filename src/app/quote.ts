export class Quote {
public upvote: number;
public downvote: number;
public displayDetail: boolean;

constructor(public id: number, public name: string, public author: string, public submission: string, public posted: Date) {
this.upvote = 0;
this.downvote = 0;
this.displayDetail = false;
  }
}
