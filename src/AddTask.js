import { useState } from "react";
import "./App.css";
export default function AddTask({ onAddTask }) {
  const [text, setText] = useState("");

  return (
    <div className="AddTask">
      <input
        placeholder="Add task"
        value={text}
        onChange={(e) => {
         setText( e.target.value);
        }}
      />
      <button
        onClick={() => {
          setText("");
          onAddTask(text);
        }}
      >
        Add
      </button>
    </div>
  );
}
