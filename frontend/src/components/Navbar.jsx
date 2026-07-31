function Navbar({listingCount}) {
  return (
    <div>
      <nav class="flex min-h-17 items-center justify-around  bg-slate-900 text-white">
        <div class="py-1">
          <h3 class="text-lg ">Campus Sharing Portal</h3>
          <h3 class="text-sm text-slate-400">
            Buy,sell, or trade academic essentials with peers
          </h3>
        </div>
        <div class="">
          <button class="p-1.25 bg-blue-500 rounded-lg">
            Active Listings: {listingCount}
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;