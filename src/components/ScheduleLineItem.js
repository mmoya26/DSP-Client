import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { generateScheduleBadge } from "@/helpers/generateScheduleBadge";
import { AddEmployeeContext } from "@/contexts/AddEmployeeContext";

export default function ScheduleLineItem(props) {
  const { n, removeEmployee, editEmployeeShift } = props;
  const { id, name, daysWorking } = props.row;
  const { setEditingEmployeeShift } = useContext(AddEmployeeContext);
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
          onClick={() => setEditingEmployeeShift({ id, name, daysWorking })}
        />
        <span className="block mx-auto">{name}</span>
      </div>
      <div className="flex gap-[60px] text-center">
        {Object.keys(daysWorking).map((day, i) => {
          return (
            <div className="py-4 w-[93px]" key={i}>
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
