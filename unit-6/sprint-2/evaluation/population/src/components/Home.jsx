import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

export const Home = () => {
  const [data, setData] = useState([]);
  const [removedata, setRemovedata] = useState();
  const [sortpopulation, setSortpopulation] = useState("asc");

  useEffect(() => {
    getData();
  }, [sortpopulation]);

  const getData = async () => {
    const citydata = await axios.get("http://localhost:8080/city");
    setData(citydata.data);
  };
  useEffect(() => {
    deleteData();
  });

  const deleteData = async (d) => {
    // console.log(id);
    setRemovedata(d);
    const result = await axios.get(`http://localhost:8080/city/${removedata}`);

    console.log("result", result);
  };
  console.log(data);
  return (
    <div>
      <h3>Home page</h3>
      <hr />
      <button
        onClick={() => {
          setSortpopulation("asc");
        }}
      >
        sort low to high
      </button>
      <button
        onClick={() => {
          setSortpopulation("desc");
        }}
      >
        sort high to low
      </button>
      <div>
        <table>
          <thead>
            <tr>
              <td>id</td>
              <td>city</td>
              <td>country</td>
              <td>population</td>
              <td>Edit</td>
              <td>Delete</td>
            </tr>
          </thead>
          <tbody>
            {data.map((e) => (
              <tr>
                <td>{e.id}</td>
                <td>{e.city}</td>
                <td>{e.country}</td>
                <td>{e.population}</td>
                <td>
                  <button>Edit</button>
                </td>
                <td>
                  <button
                    onClick={() => {
                      setRemovedata(e.id);
                      deleteData(e.id);
                    }}
                  >
                    delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
