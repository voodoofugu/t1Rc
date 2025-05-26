import { useEffect, useState } from "react";
import fetchGoogleDocs from "../../scripts/FapTitansScripts/fetchGoogleDocs";

function useGoogleDocs(sheetId: string, gid?: string) {
  const [data, setData] = useState<Record<string, string>[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchGoogleDocs(sheetId, gid)
      .then((fetchedData: Record<string, string>[]) => {
        setData(fetchedData);
      })
      .finally(() => setLoading(true));
  }, []);

  return { data, loading };
}

export default useGoogleDocs;
