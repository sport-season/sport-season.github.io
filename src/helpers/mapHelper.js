export function clearMap(map) {
    map.eachLayer((layer) => {
        const hasEmptyContrib = !(layer.getAttribution && layer.getAttribution());
        const hasNoContrib = !layer.getAttribution;
        if (hasEmptyContrib || hasNoContrib) {
            map.removeLayer(layer);
        }
    })
}
