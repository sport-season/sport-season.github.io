export function formatDistance(d, destructure = false) {
    if (!d) { return '-'; }
    const parts = d > 1000
        ? [parseFloat(d / 1000).toFixed(2), 'км']
        : [parseFloat(d).toFixed(2), 'м'];

    return destructure ? parts : parts.join('\u202f');
}
