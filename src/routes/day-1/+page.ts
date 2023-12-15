import type { PageLoad } from './$types';

async function getElvesTallyData(fetch: (input: RequestInfo, init?: RequestInit) => Promise<Response>) {
    try {
        const response = await fetch('https://advent.sveltesociety.dev/data/2023/day-one.json');
        if (response.ok) {
            return response.json()
        }
    } catch (e) {
        console.log(e);
        return []
    }
}

export const load : PageLoad = (async ({fetch}) => {
    return {
        childrens: getElvesTallyData(fetch)
    };
}) satisfies PageLoad;