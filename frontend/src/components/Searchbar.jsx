function Searchbar() {
  return (
    <div className="roboto">
      <div className=" text-center bg-white mt-4 max-w-4xl w-full items-center mx-auto p-5 rounded-lg shadow-custom border border-double max-h-full border-slate-400">
        <h1 className="text-4xl font-semibold pt-3 pb-1">
          YOUR CAMPUS. YOUR GEAR.
        </h1>
        <h1 className="text-4xl font-semibold pt-1 pb-3">SIMPLIFIED.</h1>
        <p className="text-md text-slate-600">
          Borrow, lend and trade essential academic items safely and efficiently.
        </p>{" "}
        <br></br>
        <div className="flex flex-row w-full max-w-2xl mx-auto mt-4 justify-center  rounded-lg transition-all duration-300 ease-in-out hover:scale-110 pb-3 ">
        <div className="relative ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            value=""
            type="text"
            name="search"
            placeholder="Search for drafters, lab coats, components,..."
            className="border border-r-0 border-double border-slate-400 min-w-lg p-2 pl-10 bg-grey-200 rounded-l-full outline-none shadow-md transition-all duration-200 hover:shadow-md focus:border-indigo-400 focus:shadow-lg focus:shadow-blue-500/20"
          />
        </div>
        <button
          type="submit"
          className="bg-indigo-500 text-sm text-white border border-double border-slate-400 p-2.5 rounded-r-full font-small shrink-0 shadow-md  focus:border-indigo-400 focus:border-3  transistion-all duration-100 hover:shadow-lg hover:shadow-blue-500/20 "
        >
          Search
        </button>
        </div>
      </div>
    </div>
  );
}

export default Searchbar;
