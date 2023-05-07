import { useLocation, Link } from "react-router-dom";

// Icons
import BoldHomeIcon from "../Icons/Bold/Home";
import LightHomeIcon from "../Icons/Light/Home";
import BoldSearchIcon from "../Icons/Bold/Search";
import LightSearchIcon from "../Icons/Light/Search";

const Navbar = () => {
  const location = useLocation();
  return (
    <div className="h-screen flex flex-col space-y-2">
      {/* routing area */}
      <div className="bg-dark-200 rounded-md m-2">
        {/* Home */}
        <Link to="/">
          {location.pathname === "/" ? (
            <div className="active-route">
              <div className="my-auto">
                <BoldHomeIcon color="#ffffff" size="27" />
              </div>

              <div className="text-lg">Home</div>
            </div>
          ) : (
            <div className="inactive-route">
              <div className="my-auto">
                <LightHomeIcon color="#94A3B8" size="27" />
              </div>

              <div className="text-lg">Home</div>
            </div>
          )}
        </Link>

        {/* Search */}
        <Link to="/search">
          {location.pathname === "/search" ? (
            <div className="active-route">
              <div className="my-auto">
                <BoldSearchIcon color="#ffffff" size="27" />
              </div>

              <div className="text-lg">Search</div>
            </div>
          ) : (
            <div className="inactive-route">
              <div className="my-auto">
                <LightSearchIcon color="#94A3B8" size="27" />
              </div>

              <div className="text-lg">Search</div>
            </div>
          )}
        </Link>
      </div>

      {/* Your Library */}
      <div></div>
    </div>
  );
};

export default Navbar;
