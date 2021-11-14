import { createEvent, createStore, createEffect } from "effector";
import { addDataApi, getDataApi } from "../../../services/firebase/api";

import { IArticle } from "../types";

export const clearArticles = createEvent();

export const fetchArticlesFx = createEffect(async () => {
  const api = {
    endpoint: "articles",
  };
  const req = await getDataApi(api);
  return req;
});

export const addArticleFx = createEffect(
  async ({ id }: { id: number }, data: IArticle) => {
    const api = {
      endpoint: "articles",
      id,
    };
    const req = await addDataApi(api, data);
    return req;
  },
);

export const $userArticles = createStore([])

addArticleFx.watch((state) => {
  console.log("im done", state);
});

$userArticles.watch((state) => {
  console.log("state", state);
});
