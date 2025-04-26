import React, { useState } from "react";
import { format, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, addMonths, subMonths, isSameMonth, isSameDay } from "date-fns";
import AssignTasksCard from "../AssignTasksCard/AssignTasksCard";

export default function CalendarCard() {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const renderHeader = () => {
    return (
      <div className="flex justify-between items-center p-4 ">
        <button
          onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}
          className="text-blue-500 font-semibold hover:underline dark:text-blue-300"
        >
          Prev
        </button>
        <h2 className="text-xl font-semibold ">
          {format(currentMonth, "MMMM yyyy")}
        </h2>
        <button
          onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
          className="text-blue-500 font-semibold hover:underline dark:text-blue-300"
        >
          Next
        </button>
      </div>
    );
  };

  const renderDays = () => {
    const days = [];
    const dateFormat = "EEEEEE";
    const startDate = startOfWeek(currentMonth);

    for (let i = 0; i < 7; i++) {
      days.push(
        <div key={i} className="text-center font-medium text-sm dark:text-gray-200">
          {format(addDays(startDate, i), dateFormat)}
        </div>
      );
    }

    return <div className="grid grid-cols-7 p-2">{days}</div>;
  };

  const renderCells = () => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const rows = [];
    let days = [];
    let day = startDate;
    let formattedDate = "";

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, "d");
        const cloneDay = day;
        days.push(
          <div
            className={`p-2 w-12 h-12 flex items-center justify-center text-center cursor-pointer transition-all duration-150 rounded-full hover:outline hover:outline-blue-400 dark:hover:outline-gray-500 ${
              !isSameMonth(day, monthStart) ? "text-gray-400 dark:text-gray-600" : ""
            } ${
              isSameDay(day, selectedDate)
                ? "bg-blue-500 text-white outline outline-blue-500 dark:bg-blue-600"
                : ""
            }`}
            key={day}
            onClick={() => setSelectedDate(cloneDay)}
          >
            {formattedDate}
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div className="grid grid-cols-7 gap-1" key={day}>
          {days}
        </div>
      );
      days = [];
    }
    return <div className="px-2 pb-4 space-y-2">{rows}</div>;
  };

  return (
    <div className="max-w-md mx-auto mt-10 shadow-xl rounded-lg bg-base-100 dark:bg-base-200">
      {renderHeader()}
      {renderDays()}
      {renderCells()}
      {selectedDate && (
        <div className="p-4">
          <AssignTasksCard selectedDate={selectedDate} />
        </div>
      )}
    </div>
  );
}
