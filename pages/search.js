import Head from "next/head"
import Header from "../components/Header"
import { API_KEY, CONTEXT_KEY } from "../keys";
import {useRouter} from "next/router";
import SearchResults from "../components/SearchResults";

function Search({results}){
    const router = useRouter();
    return <div>
        <Head>
            <title>{router.query.term} - Searchify</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header />
        {/*Search Results*/}
        <SearchResults results={results}/>

    </div>;
}

export default Search;

export async function getServerSideProps(context) {
    const term = typeof context.query.term === "string" ? context.query.term : "";
    const requestedStart = Number.parseInt(context.query.start, 10);
    const startIndex = Number.isFinite(requestedStart) && requestedStart >= 1 ? requestedStart : 1;
    let data = null;

    if (API_KEY && CONTEXT_KEY && term) {
        try {
            const params = new URLSearchParams({ key: API_KEY, cx: CONTEXT_KEY, q: term, start: String(startIndex) });
            const response = await fetch(`https://www.googleapis.com/customsearch/v1?${params}`);
            const liveData = await response.json();

            if (response.ok && Array.isArray(liveData.items)) {
                data = liveData;
            } else if (liveData.error) {
                data = { searchError: `Google Search API error (${liveData.error.code || response.status}): ${liveData.error.message || "request failed"}` };
            } else {
                data = { searchError: `Google Search API returned no usable results (HTTP ${response.status}).` };
            }
        } catch {
            data = { searchError: "Google Search API could not be reached. Check your connection and try again." };
        }
    } else if (!term) {
        data = { searchError: "Enter a search term to search." };
    } else {
        data = { searchError: "Search is not configured yet. Add GOOGLE_API_KEY and GOOGLE_CSE_ID to .env.local, then restart the dev server." };
    }

     //After server rendered -> Pass results to client
    return{
        props: {
          results: data
        },
    };
}
