import AssignTasksCard from "../AssignTasksCard/AssignTasksCard";
import CalendarCard from "../CalendarCard/CalendarCard";
import CompletedTasksCard from "../CompletedTasksCard/CompletedTasksCard";
import HoldingTask from "../HoldingTask/HoldingTask";



const WorkPlanner = () => {
    return (
        <div className="hero bg-base-200  font-[Sansation]">
  <div className="hero-content flex-col ">
  <div className="bg-white p-10 px-20  rounded-lg">
  <CalendarCard/>
  </div>
        <div className="flex  gap-10 dark:bg-white p-10 rounded-lg my-10  ">
    <div>
      <AssignTasksCard/>
    </div>
    <div>
      <HoldingTask/>
    </div>
    <div>
      <CompletedTasksCard/>
    </div>
        </div>
  </div>
</div>
    );
};

export default WorkPlanner;