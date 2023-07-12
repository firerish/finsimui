import React from "react";

import Input from "@/components/Input";

export default function StringInput(props) {
    const [inputValue, setInputValue] = React.useState("");
    return (<><Input placeholder={props.placeholder} value={inputValue} onChange={(e) => setInputValue(e.target.value)} /></>);
} 