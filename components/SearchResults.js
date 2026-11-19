import PaginationButtons from "./PaginationButtons";

function SearchResults({ results }) {
  return (
    <main className="min-h-[calc(100vh-9rem)] bg-white text-gray-900 transition-colors dark:bg-gray-900 dark:text-gray-100">
      <div className="mx-auto w-full max-w-7xl px-5 pb-16 pt-7 sm:px-8 sm:pl-56 lg:pl-64">
        {results.searchError && (
          <div role="status" className="mb-7 max-w-2xl rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4 text-sm leading-6 text-amber-900 dark:border-amber-900/70 dark:bg-amber-950/40 dark:text-amber-200">
            <p className="font-semibold">Search needs attention</p>
            <p className="mt-1">{results.searchError}</p>
          </div>
        )}
        {results.searchInformation && (
          <p className="mb-7 text-xs text-gray-500 dark:text-gray-400">
            About {results.searchInformation.formattedTotalResults} results
            {results.searchInformation.formattedSearchTime && ` (${results.searchInformation.formattedSearchTime} seconds)`}
          </p>
        )}

        <div className="max-w-2xl space-y-7">
          {results.items?.map((result) => (
            <article key={result.link} className="group">
              <a href={result.link} target="_blank" rel="noreferrer" className="inline-flex max-w-full items-center gap-2 text-xs text-gray-500 hover:text-blue-700 dark:text-gray-400 dark:hover:text-blue-300">
                <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-gray-100 text-[10px] font-semibold text-gray-500 dark:bg-gray-800 dark:text-gray-300">{(result.displayLink || "W").charAt(0).toUpperCase()}</span>
                <span className="truncate">{result.displayLink || result.formattedUrl}</span>
              </a>
              <a href={result.link} target="_blank" rel="noreferrer" className="mt-1 block">
                <h2 className="text-lg font-medium leading-6 text-blue-700 decoration-2 underline-offset-2 group-hover:underline dark:text-blue-300 sm:text-xl">{result.title}</h2>
              </a>
              <p className="mt-1.5 text-sm leading-6 text-gray-600 dark:text-gray-300">{result.snippet}</p>
            </article>
          ))}
        </div>

        {!results.searchError && !results.items?.length && <p className="text-sm text-gray-600 dark:text-gray-400">No results found. Try another search.</p>}
        {!results.searchError && results.items?.length > 0 && <PaginationButtons />}
      </div>
    </main>
  );
}

export default SearchResults;
