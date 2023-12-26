import React, { useState } from "react";
import Herosection from "./Component/Herosection";
import Footer2 from "./Component/Footer2";
import Header2 from "./Component/Header2";

const Admin = () => {
  const [opendiv, setOpenDiv] = useState(false);
  const toggle = (i) => {
    if (opendiv === i) {
      return setOpenDiv(null);
    }
    setOpenDiv(i);
  };
  let data = [
    {
      id: 1,
      data1: "account",
      data2: "0x9B76 .... c9E57792",
      data3: "add",
    },
    {
      id: 2,
      data1: "account",
      data2: "0x9B76 .... c9E57792",
      data3: "add",
    },
    {
      id: 3,
      data1: "account",
      data2: "0x9B76 .... c9E57792",
      data3: "add",
    },
    {
      id: 4,
      data1: "account",
      data2: "0x9B76 .... c9E57792",
      data3: "add",
    },
    {
      id: 5,
      data1: "account",
      data2: "0x9B76 .... c9E57792",
      data3: "add",
    },
  ];

  return (
    <>
      <Header2 />
      <div className="adminPage">
        <Herosection />
      </div>
      <div className="AdminContainer">
        <div className="HeadingDiv">
          <h3>Admin Panal</h3>
        </div>
        {data.map((item, i) => (
          <div className="adminMain">
            <div className="adminHeader" onClick={() => toggle(i)}>
              <p>{item.data1}</p>
              <p>{item.data2}</p>
              <p>{item.data3}</p>
            </div>

            <div
              className={
                opendiv === i
                  ? "box_container active"
                  : "box_container inactive1"
              }
            >
              <div className="inputBox">
                <input type="text" placeholder="enter"></input>
                <button>Add</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Footer2 />
    </>
  );
};

export default Admin;
