export default function two_crystal_balls(breaks: boolean[]): number {
    const n = Math.floor(Math.sqrt(breaks.length));
    let broken = 0;
    for (let i = n; i < breaks.length; i += n) {
        if (breaks[i]) {
            broken = i;
            break;
        }
    }

    for (let j = broken - n; j < broken; j++) {
        if (breaks[j]) return j;
    }
    return -1;
}
