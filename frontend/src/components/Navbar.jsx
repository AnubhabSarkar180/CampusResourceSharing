function Navbar() {
  return (
    <div className="border border-slate-200 roboto shadow-sm">
      <nav className="flex min-h-17 items-center justify-between  bg-white  text-indigo-500">
        <div className="flex items-center gap-9  font-semibold">
        <div className="py-1 pl-10 pr-8">
          <h2 className="text-2xl font-bold transition-transform duration-300 hover:scale-110">Campus Sharing Portal</h2>
        </div>
        <div className="hover:cursor-pointer transition-transform duration-300 hover:scale-110 ">
          Marketplace
        </div>
        <div className="hover:cursor-pointer transition-transform duration-300 hover:scale-110">
          Community
        </div>
        <div className="hover:cursor-pointer transition-transform duration-300 hover:scale-110">
          Guidelines
        </div>
        </div>
        <div className="gap-2 flex text-white pr-10 font-semibold">
          <button className="p-1.25 px-3 text-indigo-500 hover:cursor-pointer transition-transform duration-300 hover:scale-110 rounded-lg">
            Sign In
          </button>
          <button className="p-1.25 px-3 bg-indigo-500 hover:cursor-pointer transition-all duration-300 hover:brightness-110 hover:scale-110 rounded-lg">
            Join Now
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;