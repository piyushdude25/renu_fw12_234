import axios from "axios";
import { useEffect, useState } from "react";

export const Allusers = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get(" http://localhost:3001/regisration").then((data) => {
      setUsers(data.data);
    });
  }, []);
  console.log("users", users);
  return (
    <div>
      <div style={{ color: "blue" }}>ALL REGISTERED STUDENTS DETAILS</div>
      <hr />
      <table className="table">
        <thead>
          <tr style={{ width: "100px", height: "60px" }}>
            <td>username</td>
            <td>age</td>
            <td>birth</td>
            <td>address</td>
            <td>stateName</td>
            <td>pincode</td>
          </tr>
        </thead>
        {users.map((e) => {
          return (
            <tbody key={e.id}>
              <tr style={{ border: 1 }}>
                <td>{e.username}</td>
                <td>{e.age}</td>
                <td>{e.birth}</td>
                <td>{e.address}</td>
                <td>{e.stateName}</td>
                <td>{e.pincode}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
};
