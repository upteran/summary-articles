import { createStore, createEffect } from "effector";

export const fetchArticlesFx = createEffect(async () => {
  const res = await fetch("http://localhost:1337/articles");
  return res.json();
});

export const $userArticles = createStore([]).on(
  fetchArticlesFx.doneData,
  (state, articles) => articles,
);

$userArticles.watch((state) => {
  console.log("work");
});
