import React from "react";

export default function ScheduleDayFilter({ handleChange, day, id }) {
  return (
    <div className="flex gap-2">
      <input
        id={id}
        type="checkbox"
        className="checkbox"
        onChange={(e) => handleChange(e, day)}
      />
      <label htmlFor={id} className="text-slate-600 text-base">
        {day}
      </label>
    </div>
  );
}
