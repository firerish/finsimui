"use client";

  import React from "react";

import Input from "@/components/Input";

export default function NumberInput(props) {
    const [inputValue, setInputValue] = React.useState("");
    return (<><div className="flex flex-col mx-1">
  <label className="block text-gray-700 text-sm font-bold mb-2">
    {props.label}
  </label>
  <Input
    type="number"
    placeholder={props.placeholder}
    className="shadow appearance-none border rounded py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    value={inputValue}
    onChange={(e) => setInputValue(e.target.value)}
  />
</div>
</>);
} 