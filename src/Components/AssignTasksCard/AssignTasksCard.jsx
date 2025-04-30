import { format, isValid } from "date-fns";
import pen from "../../assets/pen.png";

const AssignTasksCard = ({ selectedDate }) => {
  const validDate = isValid(new Date(selectedDate)) ? new Date(selectedDate) : null;
  const handleTask = e => {
    e.preventDefault()
    const taskTitle = e.target.taskTitle
    console.log(taskTitle);
    

  }
  return (
    <div className="w-full max-w-sm mx-auto p-4">
      <div className="card bg-base-100 shadow-xl rounded-2xl p-4">
        <form className="card-body flex flex-col h-full">

          <span className="badge badge-success self-start text-xs mb-2">
            Assign New Task
          </span>

          <h2 className="text-2xl font-bold text-center mb-4">
            Assign Tasks : {validDate ? (
            <h3 className="text-blue-600 text-center text-sm font-semibold mb-6">
              {format(validDate, "EEEE, MMMM d, yyyy")}
            </h3>
          ) : (
            <h3 className="text-red-500 text-center text-sm font-semibold mb-6">
              Invalid Date
            </h3>
          )}
          </h2>

          <label className="input mb-4">
            <input 
            type="text" 
            required 
            placeholder="Task Title..." 
            name = "taskTitle"
            />
          </label>

          <label className="input mb-6">
            <input name = "taskDescription" type="text" required placeholder="Describe Your Task..." />
          </label>

          <button className="btn btn-block bg-blue-500 border-blue-500 hover:bg-blue-600 hover:border-blue-600 transition font-bold text-white text-lg flex items-center justify-center">
            <img src={pen} alt="Pen Icon" className="w-5 h-5 mr-2" />
            Finalize Task
          </button>

        </form>
      </div>
    </div>
  );
};

export default AssignTasksCard;
