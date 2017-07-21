const API_KEY = '2765c51be4accd2bed78b763897bcb74';

export function searchTerm(term) {
    console.log(term);
    return {
        type: 'SEARCH_TERM',
        payload: {term, API_KEY}
    }
}