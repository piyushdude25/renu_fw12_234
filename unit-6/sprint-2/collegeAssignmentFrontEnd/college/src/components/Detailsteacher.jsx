import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
export const Detailsteachers = () => {
  const { id } = useParams();
  const [details, setDetails] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:3001/classes?teacher_id=${id}`).then((data) => {
      console.log("details", data.data);
      setDetails(data.data);
    });
  }, []);

  return (
    <>
      <div className="navbar">
        <b>{`Details of Teacher_id:${id}`}</b>
      </div>
      <div className="bodypart">
        <table>
          <thead>
            <tr style={{ border: "1px", color: "black" }}>
              <td style={{ width: "150px" }}>grade</td>
              <td style={{ width: "150px" }}>section</td>
              <td style={{ width: "150px" }}>subject</td>
              <td style={{ width: "150px" }}>teacher_id</td>
            </tr>
            <tr>
              <td>
                <hr />
              </td>
              <td>
                <hr />
              </td>
              <td>
                <hr />
              </td>
              <td>
                <hr />
              </td>
              <td>
                <hr />
              </td>
            </tr>
          </thead>

          {details.map((e) => {
            return (
              <tbody key={e.id}>
                <tr>
                  <td style={{ width: "150px" }}>{e.grade}</td>
                  <td style={{ width: "150px" }}>{e.section}</td>
                  <td style={{ width: "150px" }}>{e.subject}</td>
                  <td style={{ width: "150px" }}>{e.teacher_id}</td>
                  <td style={{ width: "150px" }}></td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </>
  );
};
