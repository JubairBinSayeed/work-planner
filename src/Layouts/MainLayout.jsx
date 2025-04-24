import Navbar from "../Components/Navbar/Navbar";
import WorkPlanner from "../Components/WorkPlanner/WorkPlanner";


const MainLayout = () => {
    return (
        <div>
            <Navbar className="font-[Kanit]"/>     
            <WorkPlanner/>       
        </div>
    );
};

export default MainLayout;