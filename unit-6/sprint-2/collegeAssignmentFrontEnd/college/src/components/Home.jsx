import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  const num = 1;
  const [allteachers, setAllteachers] = useState([]);
  const [page, setPage] = useState(num);
  const [age] = useState("age");
  const [order, setOrder] = useState();
  const [gender, setGender] = useState();
  const [search, setSearch] = useState();
  const perPage = 5;
  useEffect(() => {
    axios
      .get("http://localhost:3001/teachers", {
        params: {
          _page: page,
          _limit: perPage,
          _sort: age,
          _order: order,
          gender: gender,
          name: search,
        },
      })
      .then((data) => {
        console.log(data.data);
        setAllteachers(data.data);
      });
  }, [gender, order, page, search]);

  return (
    <>
      <div className="navbar">
        <h1>Display all teachers.....</h1>
        <div>
          <div>
            <button
              onClick={() => {
                setOrder("asc");
              }}
            >
              sort low to high
            </button>
            <button
              onClick={() => {
                setOrder("desc");
              }}
            >
              sort high to low
            </button>
            <button
              onClick={() => {
                setGender("male");
              }}
            >
              male
            </button>
            <button
              onClick={() => {
                setGender("female");
              }}
            >
              female
            </button>
          </div>
          <div className="formdiv">
            <form action="">
              <input
                type="text"
                placeholder="search teacher by name"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
            </form>
          </div>
        </div>
        <div className="bodypart">
          <table>
            <thead>
              <tr style={{ border: "1px", color: "black" }}>
                <td style={{ width: "150px" }}>id</td>
                <td style={{ width: "150px" }}>name</td>
                <td style={{ width: "150px" }}>gender</td>
                <td style={{ width: "150px" }}>age</td>
                <td style={{ width: "150px" }}>class_id</td>
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

            {allteachers.map((e) => {
              return (
                <tbody key={e.id}>
                  <tr>
                    <td style={{ width: "150px" }}>{e.id}</td>
                    <td style={{ width: "150px" }}>{e.name}</td>
                    <td style={{ width: "150px" }}>{e.gender}</td>
                    <td style={{ width: "150px" }}>{e.age}</td>
                    <td style={{ width: "150px" }}>{e.classes_id}</td>
                    <td style={{ width: "150px" }}>
                      <button>
                        <Link to={`/details/${e.id}`}>view</Link>
                      </button>
                    </td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </div>
      </div>
      <div className="paginationdiv">
        {" "}
        <button
          onClick={() => {
            setPage(1);
          }}
        >
          1
        </button>
        <button
          onClick={() => {
            setPage(2);
          }}
        >
          2
        </button>
        <button
          onClick={() => {
            setPage(3);
          }}
        >
          3
        </button>
        <button
          onClick={() => {
            setPage(4);
          }}
        >
          4
        </button>
      </div>
    </>
  );
};
