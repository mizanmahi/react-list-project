import { useEffect, useState } from "react";
import axios from "axios";

import "./homepage.style.css";

const HomePage = (props) => {
  const [users, setUsers] = useState(null);

  const URL = "http://localhost/api/list.php";

  useEffect(() => {
    async function fetchUsers(url) {
      const usersResponse = await axios.get(url);
      const usersData = await usersResponse.data;
      return usersData;
    }
    fetchUsers(URL).then((d) => {
      setUsers(d);
      console.log(d);
    });
  }, [URL]);

  return (
    <div className="homepage">
      <table className="list-table">
        <tbody>
          <tr className="list-table__row">
            {users
              ? Object.keys(users.data.headers[0])
                  .map((key) => users.data.headers[0][key])
                  .filter((th) => th.hidden === false)
                  .map((th) => <th key={th.title}>{th.title}</th>)
              : null}
          </tr>
          {users
            ? users.data.rows.map((row) => (
                <tr key={row.id}>
                  {Object.keys(row)
                    .map((key) => row[key])
                    .filter((td, i) => i <= 3)
                    .map((td, i) => (
                      <td key={i}>{td}</td>
                    ))}
                </tr>
              ))
            : null}
        </tbody>
      </table>
    </div>
  );
};

export default HomePage;
