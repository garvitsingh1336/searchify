import { useRouter } from "next/router";
import { useRef } from "react";
import { SearchIcon, XIcon } from "@heroicons/react/outline";
import HeaderOptions from "./HeaderOptions";

function Header() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (event) => {
    event.preventDefault();
    const term = searchInputRef.current.value.trim();
    if (term) router.push(`/search?term=${encodeURIComponent(term)}`);
  };

  return (
    <header className="sticky top-0 z-10 border-b border-gray-100 bg-white/95 backdrop-blur dark:border-gray-800 dark:bg-gray-950/95">
      <div className="mx-auto flex w-full max-w-7xl items-center gap-4 px-4 py-4 sm:px-8">
        <button type="button" onClick={() => router.push("/")} className="flex flex-shrink-0 items-center gap-2 text-lg font-semibold tracking-tight text-gray-900 dark:text-white" aria-label="Searchify home">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-white"><SearchIcon className="h-5 w-5" /></span>
          <span className="hidden sm:inline">Searchify</span>
        </button>
        <form onSubmit={search} className="flex min-w-0 max-w-2xl flex-1 items-center rounded-full border border-gray-200 bg-white px-4 py-2 shadow-sm transition focus-within:border-blue-400 focus-within:shadow-md dark:border-gray-700 dark:bg-gray-900">
          <input ref={searchInputRef} defaultValue={typeof router.query.term === "string" ? router.query.term : ""} aria-label="Search the web" className="min-w-0 flex-1 bg-transparent text-sm text-gray-900 outline-none placeholder:text-gray-400 dark:text-white sm:text-base" type="search" placeholder="Search the web" />
          {router.query.term && <button type="button" aria-label="Clear search" className="mr-2 text-gray-400 hover:text-gray-700 dark:hover:text-white" onClick={() => { searchInputRef.current.value = ""; searchInputRef.current.focus(); }}><XIcon className="h-5 w-5" /></button>}
          <button type="submit" aria-label="Submit search" className="rounded-full p-2 text-blue-600 transition hover:bg-blue-50 dark:text-blue-400 dark:hover:bg-gray-800"><SearchIcon className="h-5 w-5" /></button>
        </form>
      </div>
      <HeaderOptions />
    </header>
  );
}

export default Header;
