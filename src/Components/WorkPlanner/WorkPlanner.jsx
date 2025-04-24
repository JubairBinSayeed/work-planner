import AssignTasksCard from "../AssignTasksCard/AssignTasksCard";
import CalendarCard from "../CalendarCard/CalendarCard";
import CompletedTasksCard from "../CompletedTasksCard/CompletedTasksCard";



const WorkPlanner = () => {
    return (
        <div className="hero bg-base-200 min-h-screen font-[Sansation]">
  <div className="hero-content flex-col lg:flex-row">
        <CalendarCard/>
    <div>
      <AssignTasksCard/>
    </div>
    <div>
      <CompletedTasksCard/>
    </div>
  </div>
</div>
    );
};

export default WorkPlanner;