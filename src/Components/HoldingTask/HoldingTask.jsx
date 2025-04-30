import taskIcon from "../../assets/task-icon.png";

const HoldingTask = () => {
  return (
    <div className="w-full max-w-sm mx-auto p-4">
      <div className="card bg-base-100 shadow-xl rounded-2xl p-4">
        <div className="card-body flex flex-col justify-between h-full">

          <span className="badge badge-success self-start text-xs">
            Tasks Due
          </span>

          <h2 className="text-2xl font-bold text-center my-4">
            Holding Tasks
          </h2>

          <div className="flex justify-center items-center my-6">
            <img src={taskIcon} alt="Task Icon" className="w-16 h-16" />
          </div>

          <h1 className="text-xl font-semibold text-center text-gray-600">
            Hooray! No task due soon!
          </h1>
          
        </div>
      </div>
    </div>
  );
};

export default HoldingTask;
