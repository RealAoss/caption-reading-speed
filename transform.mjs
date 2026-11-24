function fail(message) {
    throw new Error(message);
}
const lines = text => text.split(/\r?\n/).map(line => line.trim()).filter(Boolean);
export function transform(s) {
    if (!s.trim()) fail('Enter some source text.');
    const [limit, ...cues] = lines(s);
    if (!(Number(limit) > 0) || !cues.length) fail('Enter a positive limit and at least one cue');
    return cues.map((line, i) => {
        const k = line.indexOf('|'),
            d = Number(line.slice(0, k)),
            caption = line.slice(k + 1).trim();
        if (k < 0 || !(d > 0) || !caption) fail('Invalid cue ' + (i + 1));
        const cps = Array.from(caption).length / d;
        return (i + 1) + ': ' + cps.toFixed(1) + ' CPS · ' + (cps > Number(limit) ? 'Review' : 'Within limit')
    }).join('\n')
}
