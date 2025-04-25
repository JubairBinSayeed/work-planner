import bin from "../../assets/bin.png"
import bin2 from "../../assets/bin2.png"
const CompletedTasksCard = () => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl ">
  <div className="card-body">
    <span className="badge badge-xs badge-success">Completed Or Unwanted tasks appear HERE:</span>
    <div className="flex justify-between">
      <h2 className="text-3xl font-bold">Completed Task:
      </h2>
    </div>
   {/* Completed Or Unwanted tasks appear here */}
      <div className="text-center flex justify-center">
   <img src={bin} className="w-10 h-10"  alt=""/>
      </div>
      <h1 className="font-bold text-center text-2xl">Nothing to clear</h1>
    <div className="mt-6">
      <button className="btn  btn-block bg-rose-500 border-rose-500 hover:bg-rose-600 hover:border-rose-600 transition font-bold text-xl text-white">
        <img src={bin2} className="w-5 h-5"  alt="bin 2 not found"/>  Clear All tasks</button>
    </div>
  </div>
</div>
    );
};

export default CompletedTasksCard;