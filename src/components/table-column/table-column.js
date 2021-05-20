import axios from "axios";

async function fetchHeaders(url) {
   const response = await axios.get(url);
   const data = await response.data.data;
   const headers = data.headers[0];
   const info = data.rows;
   return {
      column: Object.keys(headers).filter(key => headers[key].hidden !== true).map(key => (
         {
           Header: headers[key].title,
           accessor: key
         }
       ) ),
       rows: info
   }
}

export default fetchHeaders;
