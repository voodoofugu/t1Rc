import PageList from "./pagesComponents/a_pageList.json";

export const t1RcDemos = PageList.map((name) => ({
  name,
  load: () => import(`./pagesComponents/${name}`),
}));

export default t1RcDemos;
