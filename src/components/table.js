import React, { useEffect, useMemo, useState } from "react";
import { useTable, useSortBy } from "react-table";

import fetchHeaders from "./table-column/table-column";

import "./pages/homepage.style.css";

const Table = () => {
   const URL = "http://localhost/api/list.php";

   const [data, setData] = useState([]);
   const [col, setCol] = useState([]);

   useEffect(() => {
      fetchHeaders(URL).then(({ column, rows }) => {
         setCol(column);
         setData(rows);
      });
   }, [URL]);

   const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
      useTable(
         {
            columns: col,
            data,
            initialState: {
               hiddenColumns: ["id"],
               disableSortBy: true
            }
         },
         useSortBy
      );

   return (
      <div>
         {data.length > 0 && col.length > 0 ? ( 
            <table {...getTableProps()} className="list-table">
               <thead>
                  {headerGroups.map((headerGroup) => (
                     <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => (
                           <th
                              {...column.getHeaderProps(
                                 column.getSortByToggleProps()
                              )}
                           >
                              {column.render("Header")}
                              <span>
                                 {column.isSorted
                                    ? column.isSortedDesc
                                       ? "🔽"
                                       : "🔼"
                                    : ""}
                              </span>
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
