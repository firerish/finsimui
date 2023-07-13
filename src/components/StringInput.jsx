"use client";

  import React from "react";

import Input from "@/components/Input";

export default function StringInput(props) {
    const [inputValue, setInputValue] = React.useState("");
    return (<><div className="flex flex-col mx-1">
  <label className="block text-gray-700 text-sm font-bold mt-2 ml-2">
    {props.label}
  </label>
  <Input
    type="string"
    placeholder={props.placeholder}
    className="shadow appearance-none border rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    value={inputValue}
    onChange={(e) => setInputValue(e.target.value)}
  />
</div>
</>);
} 