import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import WorkPlanner from "../Components/WorkPlanner/WorkPlanner";


const MainLayout = () => {
    return (
        <div>
            <Navbar className="font-[Kanit]"/>     
            <WorkPlanner/> 
            <div className="relative bottom-0 w-full mt-10">
                <Footer/>
            </div>      
        </div>
    );
};

export default MainLayout;