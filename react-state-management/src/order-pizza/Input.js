import React from "react";

export default function Input({ label, value, onChange }) {
  return (
    <div>
      <label>{label}</label>
      <input
        type="text"
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
        }}
      />
    </div>
  );
}
