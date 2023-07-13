"use client";

  import React from "react";



export default function Input(props) {
    
    return (<><input
    type="text"
    value={props.value}
    onChange={props.onChange}
    className="py-2 px-4 border border-gray-200 rounded-lg"
    placeholder={props.placeholder}
  /></>);
} 