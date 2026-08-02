function Navbar({listingCount}) {
  return (
    <div>
      <nav className="flex min-h-17 items-center justify-around  bg-slate-900 text-white">
        <div className="py-1">
          <h3 className="text-lg ">Campus Sharing Portal</h3>
          <h3 className="text-sm text-slate-400">
            Buy,sell, or trade academic essentials with peers
          </h3>
        </div>
        <div>
          <button className="p-1.25 bg-blue-500 rounded-lg">
            Active Listings: {listingCount}
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;