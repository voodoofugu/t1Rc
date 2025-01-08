import { useNexus } from "nexus-state";

export default function Title() {
  const activePage = useNexus("activePage");

  document.title = `${activePage ? activePage : "Template"}`;

  return null;
}
