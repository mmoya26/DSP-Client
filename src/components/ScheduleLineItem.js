import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { generateScheduleBadge } from "@/helpers/generateScheduleBadge";

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
      <div className="text-slate-600 basis-1/4 p-4 text-center flex items-center">
        <FontAwesomeIcon
          icon={faPenToSquare}
          className="text-slate-500 cursor-pointer"
          onClick={() => removeEmployee(id)}
        />
        <span className="block mx-auto">{name}</span>
      </div>
      <div className="flex gap-[60px] text-center">
        {Object.keys(daysWorking).map((day, i) => {
          return (
            <div className="py-4 w-[93px]" key={i}>
              {/* {daysWorking[day].toUpperCase()} */}
              {/* <span class="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
								OFF
							</span> */}
              {generateScheduleBadge(daysWorking[day].toUpperCase())}
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
