export function setLocalStorage(key: string, content: any) {
  localStorage.setItem(key, JSON.stringify(content));
}

export function getLocalStorage(key: string) {
  const json = localStorage.getItem(key);

  if (!json) {
    return null;
  }

  const user = JSON.parse(json);

  return user ?? null;
}
