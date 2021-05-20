import axios from "axios";

async function fetchHeaders(url) {
   const response = await axios.get(url);
   const data = await response.data.data.headers[0];
   return Object.keys(data).filter(key => data[key].hidden !== true).map(key => (
      {
        Header: data[key].title,
        accessor: key
      }
    ) )
}

export default fetchHeaders;
