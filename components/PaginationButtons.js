import { useRouter } from "next/router";
import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";

function PaginationButtons() {
  const router = useRouter();
  const startIndex = Math.max(1, Number(router.query.start) || 1);
  const term = encodeURIComponent(typeof router.query.term === "string" ? router.query.term : "");

  return (
    <nav aria-label="Search result pages" className="mt-10 flex max-w-2xl items-center justify-between border-t border-gray-100 pt-5 dark:border-gray-800">
      {startIndex > 1 ? (
        <Link href={`/search?term=${term}&start=${Math.max(1, startIndex - 10)}`} className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium text-gray-600 transition hover:bg-gray-100 hover:text-blue-700 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-blue-300">
          <ChevronLeftIcon className="h-4 w-4" /> Previous
        </Link>
      ) : <span />}
      <span className="text-xs text-gray-400">Showing {startIndex}–{startIndex + 9}</span>
      <Link href={`/search?term=${term}&start=${startIndex + 10}`} className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700">
        Next <ChevronRightIcon className="h-4 w-4" />
      </Link>
    </nav>
  );
}

export default PaginationButtons;
