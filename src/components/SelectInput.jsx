"use client";

  import React from "react";



export default function SelectInput(props) {
    const [selectedOption, setSelectedOption] = React.useState("");
    return (<><div className="flex flex-col mx-1">
  <label className="block text-gray-700 text-sm font-bold mb-2">
    {props.label}
  </label>
  <select
    className="shadow appearance-none border rounded py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    value={selectedOption}
    onChange={(e) => setSelectedOption(e.target.value)}
  >
    {props.options.map((option, index) => (
      <option key={index} value={option.value}>
        {option.label}
      </option>
    ))}
  </select>
</div>
</>);
} 