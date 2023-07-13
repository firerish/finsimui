"use client";

  import React from "react";



export default function Tab(props) {
    
    return (<><button
  className={`px-2 py-2 font-semibold ${
    props.active
      ? "text-white bg-gray-700 border border-white"
      : "text-white bg-black border border-black"
  } hover:bg-gray-500`}
  onClick={props.onClick}
>
  {props.label}
</button>
</>);
} 