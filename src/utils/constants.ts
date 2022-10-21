export const HTTP_STATUS = Object.freeze({
  IDLE: "IDLE",
  LOADING: "LOADING",
  DONE: "DONE",
  ERROR: "ERROR"
});

export const MOJO_STORAGE_KEY = "mojoStorage";

export const userDataID = JSON.parse(localStorage.getItem(MOJO_STORAGE_KEY)!)
  ?.user?._id;

export function userData() {
  const _l = JSON.parse(localStorage.getItem(MOJO_STORAGE_KEY)!);
  return _l;
}

export function saveWithExpiry(value: any, days: number) {
  const now = new Date();
  let expiration = days * 86400; // 86400 seconds is equall to 1day
  const item = {
    ...value,
    expiry: now.getTime() + expiration
  };
  localStorage.setItem(MOJO_STORAGE_KEY, JSON.stringify(item));
}

export function deleteStorage() {
  localStorage.removeItem(MOJO_STORAGE_KEY);
}
