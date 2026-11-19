import Head from "next/head";
import { SearchIcon, SparklesIcon } from "@heroicons/react/outline";
import Footer from "../components/Footer";
import { useRef } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (event) => {
    event.preventDefault();
    const term = searchInputRef.current.value.trim();
    if (term) router.push(`/search?term=${encodeURIComponent(term)}`);
  };

  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-900 transition-colors dark:bg-gray-900 dark:text-gray-100">
      <Head>
        <title>Searchify — Search made simple</title>
        <meta name="description" content="A clean, simple web search experience." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="flex items-center justify-between px-6 py-5 sm:px-10">
        <a href="/" className="flex items-center gap-2 text-lg font-semibold tracking-tight" aria-label="Searchify home">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-white"><SearchIcon className="h-5 w-5" /></span>
          Searchify
        </a>
        <a href="https://github.com/garvitsingh1336/searchify" className="rounded-full px-4 py-2 text-sm font-medium text-gray-600 transition hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white">
          GitHub <span aria-hidden="true">↗</span>
        </a>
      </header>

      <main className="flex flex-1 flex-col items-center px-5 pb-16 pt-20 text-center sm:pt-28">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs font-medium text-blue-700 dark:border-blue-900 dark:bg-blue-950/60 dark:text-blue-300">
          <SparklesIcon className="h-4 w-4" /> A clearer way to explore the web
        </div>
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
          Find what you&apos;re <span className="text-blue-600 dark:text-blue-400">looking for.</span>
        </h1>
        <p className="mt-5 max-w-lg text-base leading-7 text-gray-500 dark:text-gray-400 sm:text-lg">
          Search the web with a clean, focused experience. Type a question, topic, or URL to get started.
        </p>

        <form onSubmit={search} className="mt-9 w-full max-w-2xl">
          <div className="group flex items-center rounded-2xl border border-gray-200 bg-white p-2 shadow-lg shadow-gray-200/60 transition focus-within:border-blue-400 focus-within:shadow-xl focus-within:shadow-blue-100/60 dark:border-gray-700 dark:bg-gray-900 dark:shadow-black/20 dark:focus-within:border-blue-500 dark:focus-within:shadow-blue-950/40">
            <SearchIcon className="ml-3 h-5 w-5 flex-shrink-0 text-gray-400" />
            <input
              ref={searchInputRef}
              type="search"
              aria-label="Search the web"
              placeholder="What would you like to find?"
              className="min-w-0 flex-1 bg-transparent px-4 py-3 text-base text-gray-900 outline-none placeholder:text-gray-400 dark:text-white sm:text-lg"
            />
            <button type="submit" className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 dark:focus:ring-offset-gray-900">
              Search
            </button>
          </div>
          <p className="mt-3 text-xs text-gray-400">Fast, simple, and focused on what matters.</p>
        </form>

        <div className="mt-14 grid w-full max-w-2xl grid-cols-1 gap-3 text-left sm:grid-cols-3">
          {[
            ["01", "Ask anything", "Look up a topic or question."],
            ["02", "Explore results", "Browse useful pages from the web."],
            ["03", "Go deeper", "Use pagination to keep exploring."],
          ].map(([number, title, description]) => (
            <div key={number} className="rounded-2xl border border-gray-100 bg-gray-50/80 p-4 dark:border-gray-800 dark:bg-gray-900/70">
              <span className="text-xs font-semibold tracking-wider text-blue-600 dark:text-blue-400">{number}</span>
              <h2 className="mt-3 text-sm font-semibold text-gray-800 dark:text-gray-100">{title}</h2>
              <p className="mt-1 text-xs leading-5 text-gray-500 dark:text-gray-400">{description}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
