import { createStore, createEffect } from "effector";
import { IUserData } from "../types";

export const fetchUserFx = createEffect(async () => {
  const res = await fetch("http://localhost:1337/user-data/1");
  return res.json();
});

const initStore: IUserData = {
  firstName: "",
  lastName: "",
  work: "",
  skills: "",
};

export const $user = createStore(initStore).on(
  fetchUserFx.doneData,
  (state, userData) => userData,
);

$user.watch((state) => {
  console.log("user state change");
});
