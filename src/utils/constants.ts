export const HTTP_STATUS = Object.freeze({
  IDLE: "IDLE",
  LOADING: "LOADING",
  DONE: "DONE",
  ERROR: "ERROR"
});

export const USER_KEY = "user";
// @ts-ignore
export const userDataID = JSON.parse(localStorage.getItem("USER_KEY"))?.userId;

export function userData() {
  // @ts-ignore
  const _l = JSON.parse(localStorage.getItem("USER_KEY"));
  if (_l) {
    return _l;
  }
  // @ts-ignore
  return JSON.parse(sessionStorage.getItem("USER_KEY"));
}

export function saveWithExpiry(value: any, days: number, storage: string) {
  const now = new Date();

  let expiration = days * 86400; // 86400 seconds is equall to 1day
  const item = {
    ...value,
    expiry: now.getTime() + expiration
  };
  if (storage === "sessionStorage") {
    sessionStorage.setItem(userDataID, JSON.stringify(value));
  } else {
    localStorage.setItem(userDataID, JSON.stringify(item));
  }
}

export function deleteStorage() {
  let emptyObject = JSON.stringify({});
  // @ts-ignore
  sessionStorage.removeItem(USER_KEY, emptyObject);
  // @ts-ignore
  localStorage.removeItem(USER_KEY, emptyObject);
}
