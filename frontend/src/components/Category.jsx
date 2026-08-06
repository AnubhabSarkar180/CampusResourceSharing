function Category() {
  return (
    <div className="grid grid-cols-3 auto-rows-[minmax(150px,1fr)]  text-center gap-2 border mt-5 border-slate-200 rounded-xl hover:shadow-sm transition-shadow duration-300ms cursor-pointer bg-white p-4">
      <div className="flex flex-col items-center justify-center p-6 border border-slate-200 rounded-xl hover:shadow-sm transition-shadow duration-300ms cursor-pointer bg-white">
        <div className="bg-slate-100 p-4 rounded-full mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-slate-700 transition-colors duration-300 ease-in-out hover:text-white hover:bg-[#6366F1] rounded-full"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <circle cx="12" cy="12" r="10" />
            <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
          </svg>
        </div>
        <span className="text-sm font-semibold text-slate-800 ">
          Drafters & Tools
        </span>
      </div>
      <div className="flex flex-col items-center justify-center p-6 border border-slate-200 rounded-xl hover:shadow-sm transition-shadow duration-300ms  cursor-pointer bg-white">
        <div className="bg-slate-100 p-4 rounded-full mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-slate-700 transition-colors duration-300 ease-in-out hover:text-[#6366F1]"
            fill="currentColor"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
          </svg>
        </div>
        <span className="text-sm font-semibold text-slate-800">
          Core Textbooks
        </span>
      </div>
      <div className="flex flex-col items-center justify-center p-6 border border-slate-200 rounded-xl hover:shadow-sm transition-shadow duration-300ms cursor-pointer bg-white">
        <div className="bg-slate-100 p-4 rounded-full mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-slate-700 transition-colors duration-300 ease-in-out hover:text-[#6366F1]"
            fill="currentColor"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="16" height="16" x="4" y="4" rx="2" />
            <rect width="6" height="6" x="9" y="9" rx="1" />
            <path d="M15 2v2M15 20v2M2 15h2M2 9h2M20 15h2M20 9h2M9 2v2M9 20v2" />
          </svg>
        </div>
        <span className="text-sm font-semibold text-slate-800">
          Electrical Components
        </span>
      </div>
      <div className="flex flex-col items-center justify-center p-6 border border-slate-200 rounded-xl hover:shadow-sm transition-shadow duration-300ms cursor-pointer bg-white col-span-4">
        <div className="bg-slate-100 p-4 rounded-full mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-slate-700 transition-colors duration-300 ease-in-out hover:text-[#6366F1]"
            fill="currentColor"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M10 2v7.31L4.5 17.5A2 2 0 0 0 6.2 21h11.6a2 2 0 0 0 1.7-3.5L14 9.31V2" />
            <path d="M8.5 2h7M14 9.3a6.5 6.5 0 1 1-4 0" />
            <path d="M5.52 16h12.96" />
          </svg>
        </div>
        <span className="text-sm font-semibold text-slate-800">
          Lab Wear & Safety
        </span>
      </div>
    </div>
  );
}

export default Category;
