import React, { useEffect, useMemo, useState } from "react";
import { useTable } from "react-table";
// import axios from "axios";

// import MOCK_DATA from "./mock-data/MOCK_DATA.json";
import fetchHeaders from "./table-column/table-column";

import "./pages/homepage.style.css";

const Table = () => {
   const URL = "http://localhost/api/list.php";

   const [data, setData] = useState([]);
   const [col, setCol] = useState([]);

   // useEffect(() => {
   //    console.log("useeffect");
   //    axios
   //       .get(URL)
   //       .then((response) => {
   //          const data = response.data.data.rows;
   //          setData(data);
   //          console.log(data);
   //       })
   //       .catch((err) => console.log(err));
   // }, [URL]);

   useEffect(() => {
      fetchHeaders(URL).then(({column, rows}) => {
         setCol(column);
         setData(rows);
      });
   }, [URL]);

   const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
      useTable({
         columns: col,
         data,
      });

   return (
      <div>
         {data.length > 0 && col.length > 0 ? (
            <table {...getTableProps()} className="list-table">
               <thead>
                  {headerGroups.map((headerGroup) => (
                     <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => (
                           <th {...column.getHeaderProps()}>
                              {column.render("Header")}
                           </th>
                        ))}
                     </tr>
                  ))}
               </thead>
               <tbody {...getTableBodyProps()}>
                  {rows.map((row) => {
                     prepareRow(row);
                     return (
                        <tr {...row.getRowProps()}>
                           {row.cells.map((cell) => (
                              <td {...cell.getCellProps()}>
                                 {cell.render("Cell")}
                              </td>
                           ))}
                        </tr>
                     );
                  })}
               </tbody>
            </table>
         ) : (
            <h1>Loading...</h1>
         )}
      </div>
   );
};

export default Table;
