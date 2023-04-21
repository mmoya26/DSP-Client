import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function ScheduleLineItem(props) {
  const { n, removeEmployee } = props;
  const { id, name, daysWorking } = props.row;
  // text-emerald-500
  // red-500
  return (
    <div
      className="flex border-solid border border-grey-200 rounded-[12px] items-center mb-3"
      style={{
        backgroundColor: `${n % 2 === 0 ? "#f8fafc" : "#f1f5f9"}`,
      }}>
      <div className="text-slate-600 basis-1/4 p-4 text-center">{name}</div>
      <div className="flex gap-[60px] text-center">
        {Object.keys(daysWorking).map((day, i) => {
          return (
            <div
              className={`py-4 w-[93px] ${
                daysWorking[day] !== "off" ? "text-emerald-500" : "text-red-500"
              }`}
              key={i}>
              {daysWorking[day].toUpperCase()}
            </div>
          );
        })}
      </div>
      <FontAwesomeIcon
        icon={faTrash}
        className="w-[46px] p-4 ml-auto text-slate-500 cursor-pointer"
        onClick={() => removeEmployee(id)}
      />
    </div>
  );
}
