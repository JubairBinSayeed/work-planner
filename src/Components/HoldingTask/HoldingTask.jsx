import taskIcon from "../../assets/task-icon.png"

const HoldingTask = () => {
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-sm">
  <div className="card-body">
    <span className="badge badge-xs badge-success">Tasks That are DUE</span>
    <div className="flex justify-between">
      <h2 className="text-3xl font-bold">Holding Task:</h2>
    </div>
    <div>
    <div className=" flex justify-center">
    <img src={taskIcon} alt=""/>
    </div>
        <h1 className="text-xl font-bold text-center">Hooray! No task due soon!</h1>
    </div>
  </div>
</div>            
        </div>
    );
};

export default HoldingTask;