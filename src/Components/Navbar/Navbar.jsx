import ThemeController from "../ThemeController/ThemeController";


const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
  <div className="flex-1">
    <a className="btn btn-ghost font-bold  text-3xl">Work Planner</a>
  </div>
  <div className="flex-none">
  <ThemeController/>
  </div>
</div>
        </div>
    );
};

export default Navbar;