import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { SearchIcon } from "@heroicons/react/outline";

function HeaderOptions() {
  const router = useRouter();
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggleTheme = () => {
    const nextDark = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", nextDark);
    window.localStorage.setItem("searchify-theme", nextDark ? "dark" : "light");
    setDark(nextDark);
  };

  return (
    <nav aria-label="Search options" className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-8">
      <div className="flex gap-6">
        <a href={router.asPath} className="flex items-center gap-2 border-b-2 border-blue-600 px-1 pb-3 text-sm font-medium text-blue-700 dark:text-blue-300">
          <SearchIcon className="h-4 w-4" /> All results
        </a>
      </div>
      <button type="button" className="mb-3 rounded-full px-3 py-1.5 text-xs font-medium text-gray-500 transition hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white" onClick={toggleTheme} aria-pressed={dark}>
        {dark ? "☀ Light mode" : "☾ Dark mode"}
      </button>
    </nav>
  );
}

export default HeaderOptions;
