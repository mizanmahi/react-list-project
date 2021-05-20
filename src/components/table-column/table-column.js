import axios from "axios";

async function fetchHeaders(url) {
   const response = await axios.get(url);
   const data = await response.data.data.headers[0];
   return [
      {
         Header: data.id.title,
         accessor: "id",
      },
      {
         Header: data.name.title,
         accessor: "name",
      },
      {
         Header: data.message.title,
         accessor: "message",
      },
      {
         Header: data.created_at.title,
         accessor: "created_at",
      },
   ];
}

export default fetchHeaders;
