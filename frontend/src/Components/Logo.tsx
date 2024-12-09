import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTree, faChampagneGlasses } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="flex items-center justify-center p-4">
      <Link
        to="/"
        className="flex items-center space-x-2 text-xl font-bold text-gray-800"
      >
        <FontAwesomeIcon
          icon={faChampagneGlasses}
          className="text-yellow-500"
        />
        <span>Glitter & Gran</span>
        <FontAwesomeIcon icon={faTree} className="text-green-500" />
      </Link>
    </div>
  );
};

export default Logo;
