import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setFilter,removeExtension,toggleExtension } from "../store/ExtensionSlice";
const ExtensionControls = () => {
  const theme = useSelector((state) => state.theme);
  const allExtensions = useSelector((state) => state.extensions.allExtensions);
  const filter = useSelector((state) => state.extensions.filter);
  const dispatch = useDispatch();
  
  const filteredData = allExtensions.filter((ext) => {
    if (filter === "Active") return ext.isActive;
    else if (filter === "Inactive") return !ext.isActive;
    return true;
  });

  return (
    <div>
      <div className="flex flex-row items-center justify-between mt-2">
        <p
          className={`${
            theme === "dark" ? "text-white" : "text-black"
          } text-xl sm:text-2xl font-semibold`}
        >
          Extensions List
        </p>
        <div className={`flex flex-row gap-3 items-center justify-between`}>
          {["All", "Active", "Inactive"].map((text, index) => (
            <button
              onClick={() => dispatch(setFilter(text))}
              className={`rounded-full px-2 cursor-pointer ${
                theme === "dark"
                  ? filter === text
                    ? "bg-red-500 text-white"
                    : "bg-neutral-500 text-white"
                  : filter === text
                  ? "bg-red-500 text-white"
                  : "bg-neutral-200 text-black border-1 border-red-500"
              }`}
              key={index}
            >
              {text}
            </button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 mt-5">
        {filteredData.map((ext, index) => (
          <div className={`${
            theme === "dark" ? "text-neutral-300 bg-neutral-900" : "text-black"
          } w-full shadow-lg rounded-lg p-4`} key={index}>
            <div className="flex flex-row gap-3">
              <img src={ext.logo} alt="" />
              <div>
                <p className=" font-semibold">{ext.name}</p>
                <p>{ext.description}</p>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mt-4">
                <button
                onClick={()=>dispatch(removeExtension(ext.name))}
                  className={`rounded-full px-4 py-1 text-sm font-medium border ${
                    theme === "dark"
                      ? "text-white border-white hover:bg-red-600"
                      : "text-black border-black hover:bg-red-500 hover:text-white"
                  }`}
                >
                  Remove
                </button>
                {filter==="All" && <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={ext.isActive}
                    readOnly
                    onChange={() => dispatch(toggleExtension(ext.name))}
                    
                  />
                  <div
                    className={`w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer ${
                      ext.isActive ? "peer-checked:bg-red-500" : "bg-gray-400"
                    } peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all`}
                  ></div>
                </label>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExtensionControls;
