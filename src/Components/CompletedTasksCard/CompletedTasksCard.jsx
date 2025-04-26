import bin from "../../assets/bin.png";
import bin2 from "../../assets/bin2.png";

const CompletedTasksCard = () => {
  return (
    <div className="card w-full max-w-sm mx-auto bg-base-100 shadow-xl p-4 rounded-2xl">
      <div className="card-body flex flex-col justify-between h-full">
        <span className="badge badge-success self-start text-xs">
          Completed / Unwanted Tasks
        </span>

        <h2 className="text-2xl font-bold text-center my-4">
          Completed Tasks
        </h2>

        {/* Image */}
        <div className="flex justify-center items-center my-4">
          <img src={bin} className="w-14 h-14" alt="Trash Bin Icon" />
        </div>

        {/* Text */}
        <h1 className="text-xl font-semibold text-center text-gray-600 mb-6">
          Nothing to Clear
        </h1>

        {/* Button */}
        <div className="mt-auto">
          <button className="btn btn-block bg-rose-500 border-rose-500 hover:bg-rose-600 hover:border-rose-600 transition-all duration-300 font-semibold text-lg text-white flex items-center justify-center gap-2">
            <img src={bin2} className="w-5 h-5" alt="Clear Icon" />
            Clear All Tasks
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompletedTasksCard;
