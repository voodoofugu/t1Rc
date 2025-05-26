async function fetchGoogleDocs(sheetId: string, gid?: string) {
  const url = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:csv${
    gid ? `&gid=${gid}` : ""
  }`;

  const res = await fetch(url);
  const csv = await res.text();

  const rows = csv
    .split("\n")
    .map((line) => line.replace(/""/g, "").replace(/"/g, "").split(","));

  const [headers, ...dataRows] = rows;

  const objects = dataRows
    .map((row) => {
      const obj: Record<string, string> = {};
      headers.forEach((key, index) => {
        const value = row[index]?.trim() ?? "";
        if (value !== "") {
          obj[key.trim()] = value;
        }
      });
      return Object.keys(obj).length > 0 ? obj : null;
    })
    .filter((obj): obj is Record<string, string> => obj !== null);

  return objects;
}

export default fetchGoogleDocs;
