export default function bs_list(haystack: number[], needle: number): boolean {
    let low: number = 0;
    let high: number = haystack.length;
    while (low < high) {
        let mid: number = Math.floor(low + (high - low) / 2);
        if (haystack[mid] === needle) return true;
        else if (haystack[mid] > needle) high = mid;
        else if (haystack[mid] < needle) low = mid + 1;
    }
    return false;
}
