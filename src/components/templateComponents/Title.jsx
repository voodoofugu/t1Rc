import nexus from "../../../nexus/nexusConfig";

export default function Title() {
  const activePage = nexus.use("activePage");

  document.title = `${activePage ? activePage : "Template"}`;

  return null;
}
