type ArticleImg = {
  url: string;
};

export interface IArticle {
  readonly id?: number;
  title: string;
  description: string;
  content: string;
  createDateTime: Date;
  mainImg: Array<ArticleImg>;
  published_at: Date;
}
