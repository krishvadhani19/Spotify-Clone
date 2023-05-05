import { useLocation, Link } from "react-router-dom";

// Icons
import BoldHomeIcon from "../Icons/Bold/Home";
import LightHomeIcon from "../Icons/Light/Home";
import BoldSearchIcon from "../Icons/Bold/Search";
import LightSearchIcon from "../Icons/Light/Search";

const Navbar = () => {
  const location = useLocation();
  return (
    <div className="">
      {/* routing area */}
      <div>
        {/* Home */}
        <Link to="/">
          {location.pathname === "/" ? (
            <div className="active-route">
              <div className="my-auto">
                <BoldHomeIcon color="#ffffff" size="27" />
              </div>

              <div>Home</div>
            </div>
          ) : (
            <div className="inactive-route">
              <div className="my-auto">
                <LightHomeIcon color="#ffffff" size="27" />
              </div>

              <div>Home</div>
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

              <div>Search</div>
            </div>
          ) : (
            <div className="inactive-route">
              <div className="my-auto">
                <LightSearchIcon color="#ffffff" size="27" />
              </div>

              <div>Search</div>
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
