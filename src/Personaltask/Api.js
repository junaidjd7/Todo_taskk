import axios from "axios";

import React, { useState, useEffect } from "react";

export default function Api() {
  const [data, setData] = useState([]);
  const [asc, setAsc] = useState(false);
  const [searchInput, setsearchInput] = useState("");
  const [filter, setfilter] = useState("");

  useEffect(() => {getApi();}, []);

  const getApi = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1/comments")
      .then((res) => {
        setData(res.data);
        setfilter(res.data);
      });
    console.log(data);
  };

  //   const handleSort = (method) => {
  //     if (method === "asce") {
  //       let c = [...data];
  //       let a = c.sort((a, b) => (a.email < b.email ? -1 : 1));

  //       setData(a);

  //     }else{
  //         if(method === "desc"){

  //             let e = [...data];
  //             let gt = e.sort((a, b) => (a.email > b.email ? -1 : 1));
  //             setData(gt);

  //     }
  //   };

  const handleSort = () => {
    setAsc(true);
    // const c = [
    //   { name: 'junaid', email: '123' },
    //   { name: 'ahmed', email: '456' },

    // ];
    let a = c.sort((a, b) => (a.email < b.email ? -1 : 1));
    c.sort((a, b) => {
      return console.log('a:b',a,b)

    })

    // setData(a);
  };

  const handleDesc = () => {
    setAsc(false);
    let er = [...data];
    let ab = er.sort((a, b) => (a.email > b.email ? -1 : 1));

    setData(ab);
  };

  const hadleCHange = (e) => {
    setsearchInput(e.target.value);

    let a = [...filter];
    let filteredData = a.filter((el) => {
      if (searchInput.length > 0) {
        return el.email.toLowerCase().includes(e.target.value.toLowerCase());
      } else {
        return el.email;
      }
    });
    setData(filteredData);
  };
  return (
    <div>
      <h1>get dta from an api,filter,sorting</h1>
      <h1>Table with Collapsed Borders</h1>
      <label>Filter</label>
      <input type="text" value={searchInput} onChange={(e) => hadleCHange(e)} />

      <>
        <table>
          <thead>
            <tr>
              <th><button onClick={asc ? handleDesc : handleSort}>Email:Asec/Des</button></th>
            </tr>
          </thead>
          <tbody>
            {data.map((el) => {
              return (
                <tr>
                  <td>{el.email}</td>
                </tr>

              )
            })}

          </tbody>
        </table>
      </>

    </div>
  );
}
