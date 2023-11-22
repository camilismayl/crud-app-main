export enum Routes {
  default = "/",
  auth = "/auth",
  home = "/",
  addtodo = "/add-todo",
  edittodo = "/edit-todo/:id",
  login = "/auth/login",
}

export const goTo = (route: string, param: string | number) => {
  return route + "/" + param;
};

export const goToWithQuery = (route: string, param: any) => {
  let path = route + "?";
  if (param)
    for (const key in param) {
      if (path.substr(path.length - 1) !== "?") path += "&";
      path += key + "=" + param[`${key}`];
    }
  return path;
};