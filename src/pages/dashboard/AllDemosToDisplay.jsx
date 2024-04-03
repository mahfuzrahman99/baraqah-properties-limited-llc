/* eslint-disable react/prop-types */
import AllDemosRow from "./AllDemosRow";

const AllDemosToDisplay = ({ demosToDisplay, refetch }) => {
  // const demosArray = Array.isArray(demosToDisplay) ? demosToDisplay : Object.values(demosToDisplay);

  // console.log( demosToDisplay );
  // console.log( typeof(demosToDisplay) );
  return (
    <div className="max-w-5xl mx-auto w-[95vw] md:w-auto h-[65vh]">
      <div className="bg-gray-100 md:p-4 py-4 md:py-0">
        <h1 className="text-xl md:text-3xl mb-2 font-bold bg-gradient-to-r from-indigo-500 via-[#3a3271] to-[#E91E63] bg-clip-text text-transparent">
          Total Demos: {demosToDisplay?.length}
        </h1>
        <div
          className=" overflow-x-auto h-[60vh] md:h-[65vh] overflow-y-auto"
          style={{ scrollbarWidth: "thin", scrollbarColor: "#a9a3cf #f1f1f1" }}
        >
          <table className="min-w-full bg-gray-300">
            <thead className="rounded-t-xl bg-[#a9a3cf] text-white text-xs md:text-base">
              <tr className="rounded-t-xl bg-[#a9a3cf]">
                <th className="py-2 px-4 border-b">NO</th>
                <th className="py-2 px-4 border-b">Before image</th>
                <th className="py-2 px-4 border-b">After image</th>
                <th className="py-2 px-4 border-b">Demo Name</th>
                <th className="py-2 px-4 border-b">Demo category</th>
                <th className="py-2 px-4 border-b">Description</th>
                <th className="py-2 px-4 border-b">Update</th>
                <th className="py-2 px-4 border-b">Delete</th>
              </tr>
            </thead>
            <tbody className="">
              {demosToDisplay?.map((demo, i) => (
                <AllDemosRow
                  key={demo._id}
                  demo={demo}
                  refetch={refetch}
                  i={i}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllDemosToDisplay;
