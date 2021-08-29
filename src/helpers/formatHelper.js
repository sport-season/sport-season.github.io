export function formatDistance(d) {
    if (!(d > 0)) { return '-'; }
    return d > 1000 ? `${parseFloat(d / 1000).toFixed(2)}\u202fкм` : `${parseFloat(d).toFixed()}\u2009м`;
}
