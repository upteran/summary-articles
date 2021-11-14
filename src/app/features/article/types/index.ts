export interface IArticle {
  id: number;
  title: string;
  description: string;
  createDateTime: Date;
  tags: Array<number>;
  filters: Array<number>;
}
