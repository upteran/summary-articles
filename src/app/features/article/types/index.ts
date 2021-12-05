type ArticleImg = {
  url: string;
};

export interface IArticle {
  id: number;
  title: string;
  description: string;
  content: string;
  createDateTime: Date;
  mainImg: Array<ArticleImg>;
}
