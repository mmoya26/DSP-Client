import React, { useState, useContext, useId } from "react";
import ScheduleLineItem from "@/components/ScheduleLineItem";
import ScheduleDayFilter from "@/components/ScheduleDayFilter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import {
  EditScheduleContext,
  EditScheduleUpdateContext,
} from "@/contexts/EditScheduleContext";

export default function Schedules() {
  const { rows } = useContext(EditScheduleContext);
  const removeEmployee = useContext(EditScheduleUpdateContext);

  const daysOfTheWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const handleCheckBoxChange = (e, day) => {
    console.log("Event", e);
    console.log("Day", day);
  };

  return (
    <div className="mx-auto mt-5 max-w-screen-2xl">
      <h1 className="text-slate-600 font-bold text-3xl mb-12">
        <p className="text-slate-500 font-normal text-base">
          Schedule for week of:
        </p>
        May 5/1 - 5/7
      </h1>

      {/* Filters */}
      <div className="flex gap-6 mb-5">
        {daysOfTheWeek.map((d) => {
          const id = useId();

          return (
            <ScheduleDayFilter
              key={d}
              id={id}
              day={d}
              handleChange={handleCheckBoxChange}
            />
          );
        })}
      </div>

      {/* Search Bar */}
      <div className="relative mb-5">
        <div className="rounded-md shadow-sm">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="mr-3 h-4 w-4 text-gray-400">
              <path
                fillRule="evenodd"
                d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 
              1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
                clipRule="evenodd"></path>
            </svg>
          </div>

          <input
            type="text"
            name="search"
            id="search"
            className="h-10 block w-full rounded-md border border-gray-200 pl-9 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Search by name"
            spellCheck="false"
          />
        </div>
      </div>

      {/* Days of the week */}
      <div className="flex mt-6 items-center">
        <div className="text-slate-600 font-bold basis-1/4 px-4 text-center">
          Employee Name
        </div>
        <div className="flex gap-[60px]">
          <div className="text-slate-600 font-bold text-center w-[93px]">
            Sunday <br />
            (5/1)
          </div>
          <div className="text-slate-600 font-bold text-center w-[93px]">
            Monday <br />
            (5/2)
          </div>
          <div className="text-slate-600 font-bold text-center w-[93px]">
            Wednesday <br />
            (5/3)
          </div>
          <div className="text-slate-600 font-bold text-center w-[93px]">
            Thursday <br />
            (5/4)
          </div>
          <div className="text-slate-600 font-bold text-center w-[93px]">
            Sunday <br />
            (5/5)
          </div>
          <div className="text-slate-600 font-bold text-center w-[93px]">
            Friday <br />
            (5/6)
          </div>
          <div className="text-slate-600 font-bold text-center w-[93px]">
            Saturday <br />
            (5/7)
          </div>
        </div>
        <div className="w-[46px]"></div>
      </div>

      {/* Table Structure */}
      <div className="mt-5">
        {/* Line Item */}
        {rows.map((r, n) => {
          return (
            <ScheduleLineItem
              n={n}
              row={r}
              removeEmployee={removeEmployee}
              key={r.id}
            />
          );
        })}
      </div>

      {/* Pagination */}
      <div className="mt-6 mb-10 flex justify-end">
        <div className="flex items-center gap-5">
          <span className="text-slate-500 text-base">Page 1 of 10</span>
          <div className="flex gap-5">
            {/* Reduce opacity of left or right arrow depending if there is any available pages on either
            direction */}
            <button className="w-8 h-8 rounded-[3px] border border-gray-200 shadow-sm">
              <FontAwesomeIcon
                icon={faChevronLeft}
                className="text-slate-500 cursor-pointer text-base"
              />
            </button>
            <button className="w-8 h-8 rounded-[3px] border border-gray-200 shadow-sm">
              <FontAwesomeIcon
                icon={faChevronRight}
                className="text-slate-500 cursor-pointer text-base"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
