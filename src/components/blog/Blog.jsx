import React from "react";
import "./Blog.css";
import Footy from "../../assets/football1.png";
import { useState } from "react";

const Blog = () => {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState([]);
  const addItem = () => {
    if (!inputData) {
    } else {
      setItems([...items, inputData]);
      setInputData("");
    }
  };
  const deleteItem = (id) => {
    const updatedItems = items.filter((elem, ind) => {
      return ind != id;
    });
    setItems(updatedItems);
  };
  const removeAll = () => {
    setItems([]);
  };
  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img src={Footy} alt="BLOG" />
            <figcaption>HERE GOES YOUR NOTE</figcaption>
          </figure>
          <div className="addItems">
            <input
              type="text"
              placeholder="ADD YOUR VIEWS..."
              id=""
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
            />
            <button type="button" className="btn btn-primary" onClick={addItem}>
              Submit
            </button>
          </div>
          <div className="showItems">
            {items.map((elem, ind) => {
              return (
                <>
                  <div
                    className="card text-white bg-success mb-3"
                    style={{ margin: "2rem", width: "38rem" }}
                  >
                    <div
                      className="card-header"
                      style={{
                        margin: "1rem",
                        display: "flex",
                        paddingRight: "3rem",
                        justifyContent: "center",
                      }}
                    >
                      Name
                      <button
                        type="button"
                        class="btn btn-danger btn-sm"
                        style={{ height: "2rem" }}
                        onClick={() => deleteItem(ind)}
                      >
                        DELETE
                      </button>
                    </div>
                    <div className="card-body">
                      <h5
                        className="card-title"
                        style={{ textDecorationColor: "white", color: "white" }}
                      >
                        {elem.slice(0, 125)}
                      </h5>
                      <p className="card-text"></p>
                    </div>
                  </div>
                </>
              );
            })}
            <div className="shownItems" style={{ height: ".5rem" }}>
              <button
                type="button"
                className="btn btn-sm btn-primary"
                style={{ height: "3rem"}}
                onClick={removeAll}
              >
                Clear All
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
