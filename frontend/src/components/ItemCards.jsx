function itemCards() {
  return (
    <div className="roboto flex flex-col items-center justify-center gap-4">
      <div className="flex flex-col h-full bg-white border-2 border-solid border-slate-300 shadow-sm hover:shadow-custom text-center w-80 rounded-xl overflow-hidden">
        <div className="relative aspect-4/3 h-48 w-full"> {/*Image Container*/}
        <span className="absolute top-3 right-3 bg-indigo-100 text-indigo-700 text-bold tex-xs font-semibold px-2 rounded-md">Available</span>
          <img src="/labcoat.jpeg" alt="Item Image" className="h-full w-full object-cover mix-blend-multiply"/>
        </div>
        <div className="flex relative flex-col grow p-7 ">
            <span className="absolute text-sm top-0 text-slate-500 m-0.5 p-0.5 py-2 left-1.5 font-semibold">LAB WEAR</span>
            <div className="text-left p-2 font-semibold gap-1 text-lg">
                <h3 className=" pb-1.5">Chemistry Lab Coat</h3>
                <h3 className="text-slate-800">Price: $29.99</h3>
            </div>
          <button className=" border-2 border-solid p-1.5 text-sm border-slate-300 rounded-lg bg-white hover:bg-slate-100 transition-bg duration-300 hover:cursor-pointer"> View Details</button>
        </div>
      </div>
    </div>
  );
}

export default itemCards;
