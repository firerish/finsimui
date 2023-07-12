import React from "react";



export default function NumberInput(props) {
    const [inputValue, setInputValue] = React.useState("");
    return (<><label className='block text-gray-700 text-sm font-bold mb-2'>{props.label}<input type='number' className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' value={inputValue} onChange={(e) => setInputValue(e.target.value)} /></label></>);
} 