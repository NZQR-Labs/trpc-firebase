import React from "react"; 

const useFetch = (url: string) => {
  const [data, setData] = React.useState<any>();
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    async function fetchData() {
      const response = await fetch(url);
      const json = await response.json();
      setData(json);
      setLoading(false);
    }
    fetchData();
  }, [url]);
  return { data, loading };
};

export default useFetch;