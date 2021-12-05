import { createStore, createEffect } from "effector";

// import { IArticle } from "../types";

// export const clearArticles = createEvent();

export const fetchArticlesFx = createEffect(async () => {
  // const api = {
  //   endpoint: "articles",
  // };
  const res = await fetch("http://localhost:1337/articles");
  return res.json();
});

export const $userArticles = createStore([]).on(
  fetchArticlesFx.doneData,
  (_, articles) => articles,
);

$userArticles.watch((state) => {
  console.log("state", state);
});
