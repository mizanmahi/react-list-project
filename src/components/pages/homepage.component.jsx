import { useEffect, useState } from "react";
import axios from "axios";

const HomePage = (props) => {
  const [users, setUsers] = useState(null);

  const URL = "http://localhost/api/list.php";

  useEffect(() => {
    async function fetchUsers(url) {
      const usersResponse = await axios.get(url);
      const usersData = await usersResponse.data;
      setUsers(usersData);
    }
    fetchUsers(URL);
    console.log(users);
  },[URL]);

  return (
    <div className="homepage">
      <table>
        <tbody>
          <tr>
            {users
              ? Object.keys(users.data.headers[0])
                  .map((key) => users.data.headers[0][key])
                  .map((th) => <th key={th.title}>{th.title}</th>)
              : null}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default HomePage;
