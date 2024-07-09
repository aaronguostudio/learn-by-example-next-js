import { IMenuItem } from "@/types/base";

export const appPageMenus: IMenuItem[] = [
  {
    label: "Home",
    name: "home",
    path: "/",
    exact: true,
  },
  {
    label: "Basic",
    name: "basic",
    path: "/basic",
  },
  {
    label: "Components",
    name: "components",
    path: "/components",
  },
  {
    label: "Widgets",
    name: "widgets",
    path: "/widgets",
  },
  {
    label: "Examples",
    name: "examples",
    path: "/examples",
  },
];

export const basicPageMenus: IMenuItem[] = [
  {
    label: "Routing",
    name: "routing",
    path: "/basic",
    exact: true,
  },
  {
    label: "Data Fetching",
    name: "dataFetching",
    path: "/basic/fetching",
    exact: true,
  },
  {
    label: "Rendering",
    name: "rendering",
    path: "/basic/rendering",
    exact: true,
  },
];

export const examplesPageMenus: IMenuItem[] = [
  {
    label: "Dashboard",
    name: "dashboard",
    path: "/examples/dashboard",
    exact: true,
  },
  {
    label: "Mail",
    name: "mail",
    path: "/examples/mail",
    exact: true,
  },
  {
    label: "Cards",
    name: "cards",
    path: "/examples/cards",
    exact: true,
  },
  {
    label: "Tasks",
    name: "tasks",
    path: "/examples/tasks",
    exact: true,
  },
];
