export const getLatLonAsGpx = (latlon, name = 'stravastat') => {
    const str = `
<?xml version="1.0" encoding="UTF-8" standalone="no" ?>
<gpx xmlns="http://www.topografix.com/GPX/1/1" creator="https://stravastat.github.io" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.topografix.com/GPX/1/1 http://www.topografix.com/GPX/1/1/gpx.xsd" version="1.1">
    <metadata>
        <time>2021-09-15T19:05:49.078Z</time>
    </metadata>
    <trk>
        <name>${name}</name>
        <trkseg>
            ${latlon.map(([lat, lon]) => `<trkpt lat="${lat}" lon="${lon}"><time>1970-01-01T00:00:01.000Z</time></trkpt>`).join('\r\n')}
        </trkseg>
    </trk>
</gpx>`;


    const url = 'data:application/gpx+xml;charset=utf-8,' + str.trim();
    return url;
}

export const getGPXFileAsync = (latlon, name = 'stravastat') => {
    return fetch(getLatLonAsGpx(latlon, name))
        .then(res => res.blob())
        .then(blob => {
            const file = new File([blob], name,{ type: "plain/text" })
            return file
        })
}


export const downloadLatLonAsGpx = (latlon, name = 'stravastat') => {
    const url = getLatLonAsGpx(latlon, name);
    const link = document.createElement('a');
    link.download = `${name}.gpx`;
    link.href = url;
    link.click();
}
