import AssignTasksCard from "../AssignTasksCard/AssignTasksCard";
import CalendarCard from "../CalendarCard/CalendarCard";
import CompletedTasksCard from "../CompletedTasksCard/CompletedTasksCard";
import HoldingTask from "../HoldingTask/HoldingTask";

const WorkPlanner = () => {
  return (
    <div className="min-h-screen bg-base-200 flex flex-col items-center py-10 font-[Sansation]">
      <h1 className="text-3xl font-bold mb-8 dark:text-white text-gray-800">
        Your Work Planner
      </h1>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 px-4">
        <div className="flex justify-center">
          <CalendarCard />
        </div>
        <div className="flex justify-center">
          <HoldingTask />
        </div>
        <div className="flex justify-center">
          <CompletedTasksCard />
        </div>
      </div>
    </div>
  );
};

export default WorkPlanner;
