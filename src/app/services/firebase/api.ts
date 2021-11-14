import { getDatabase, ref, set, onValue, child, get } from "firebase/database";

type ApiData = {
  endpoint: string;
  id?: number;
};

export function addDataApi<Type>(api: ApiData, data: Type): void {
  const db = getDatabase();
  const { endpoint, id } = api;
  console.log('endpoint + id', endpoint + id);
  set(ref(db, endpoint + id), data);
}

export function getAndListenApi<Type>(api: ApiData, param: Type): void {
  const db = getDatabase();
  const { endpoint, id } = api;
  const dataRef = ref(db, endpoint + id + param); // /stars/ + 1 + /startCount
  onValue(dataRef, (snapshot) => {
    const data = snapshot.val();
    // updateStarCount(postElement, data);
  });
}

export function getDataApi(api: ApiData): void {
  const { endpoint, id } = api;
  const dbRef = ref(getDatabase());
  get(child(dbRef, `${endpoint}/${id}`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        // TODO: обработчик ошибок/логгер
        console.log(snapshot.val());
      } else {
        // TODO: обработчик ошибок/логгер
        console.log("No data available");
      }
    })
    .catch((error) => {
      // TODO: обработчик ошибок/логгер
      console.error(error);
    });
}
