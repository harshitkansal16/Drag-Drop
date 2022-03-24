import React, { useContext } from "react";
import "./index.scss";
import { MyContext } from "../appContext";

export default function HeaderButtons() {
  const getConsumer = useContext(MyContext);
  const { state, getJSONData } = getConsumer;

  const handleFileChange = async (e) => {
    const { name } = e.target.files[0];
    if (name.endsWith(".json")) {
      e.preventDefault();
      const reader = new FileReader();
      reader.onload = async (e) => {
        const text = e.target.result;
        getJSONData(JSON.parse(text));
      };

      reader.readAsText(e.target.files[0]);
    } else {
      alert(
        "It is not a JSON file. kindly Upload a file having .json extension."
      );
    }
  };
  return (
    <div className="wrapper">
      <span
        className="change"
      >
         <label htmlFor="fusk">Load JSON</label>
        <input
          id="fusk"
          type="file"
          name="JSONFile"
          style={{ display: "none" }}
          onChange={handleFileChange}
        />
      </span>{" "}
      <a
        className="save-wrapper"
        href={`data:text/json;charset=utf-8,${encodeURIComponent(
          JSON.stringify(state)
        )}`}
        download="API.json"
      >
        Save JSON
      </a>
      
    </div>
  );
}
