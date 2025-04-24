

const AssignTasksCard = () => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <span className="badge badge-xs badge-success">You Have To Assign Tasks HERE</span>
    <div className="flex justify-between">
      <h2 className="text-3xl font-bold">Assign Tasks:</h2>
    </div>
    <label className="input">
    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
    </g>
  </svg>
  <input
    type="text"
    required
    placeholder="Task Title..."
  />
</label>
<label className="input">
    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
    </g>
  </svg>
  <input
    type="text"
    required
    placeholder="Describe Your Task..."
  />
</label>


    <div className="mt-6">
      <button className=" btn btn-block bg-blue-500 border-blue-500 hover:bg-blue-600 hover:border-blue-600 transition font-bold text-xl text-white">Finalise Task</button>
    </div>
  </div>
</div>
    );
};

export default AssignTasksCard;