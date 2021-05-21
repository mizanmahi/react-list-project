import axios from "axios";
import Searchinput from "../searchInput/search-input";

async function fetchHeaders(url) {
   const response = await axios.get(url);
   const data = await response.data.data;
   const headers = data.headers[0];
   const info = data.rows;
   return {
      column: Object.keys(headers)
         .filter((key) => headers[key].hidden !== true)
         .map((key) => {
            return headers[key].searchable
               ? {
                    Header: headers[key].title,
                    accessor: key,
                    Filter: Searchinput,
                    disableSortBy: headers[key].sortable ? false : true
                 }
               : {
                    Header: headers[key].title,
                    accessor: key,
                    Filter: "",
                    disableSortBy: headers[key].sortable ? false : true
                 };
         }),
      rows: info,
   };
}

export default fetchHeaders;
