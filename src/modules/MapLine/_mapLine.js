/*global google*/
export default () => {

    if (window.testLine) {
        return window.testLine;
    }

    function mapLine(map, from, to) {
        this.map_ = map;
        let calcGeodesic = geodesicPolyline(from, to, 100);
        this.polyline = new google.maps.Polyline({
            path: calcGeodesic,
            geodesic: false,
            strokeColor: "#ffc107",
            strokeOpacity: 1,
            strokeWeight: 4,
            map: map
        });
        this.path_ = this.polyline.getPath();
        this.polyline.setPath(new google.maps.MVCArray());
        this.setMap(map);
    }

    mapLine.prototype.setMap = function (map) {
        this.map_ = map;
        this.polyline.setMap(map);
    };

    mapLine.prototype.removeLine = async function (interval = 0) {
        const path = this.polyline.getPath();
        let length = path.getLength();
        console.log(length);
        for (let i = 0; length > 0; length = path.getLength()) {
            await sleep(interval);
            path.removeAt(i);
            this.polyline.setPath(path);
        }
    };

    mapLine.prototype.drawLine = function (interval = 0) {
        const promise = new Promise(async(resolve, reject) => {
            const newPath = new google.maps.MVCArray();
            const path = this.path_;

            for (let i = 0; i < path.getLength(); ++i) {
                await sleep(interval);
                newPath.push(path.getAt(i));
                this.polyline.setPath(newPath);
            }
            resolve();
        });

        return promise;
    };

    window.testLine = mapLine;
    return mapLine;
}

/*
 * Thank you http://www.geocodezip.com/ !
 */
function geodesicPolyline(start, end, numberOfPoints = 50) {
    var geodesicPoints = [];
    let angle = 180;
    var lat1 = start.lat() * (Math.PI / angle);
    var lon1 = start.lng() * (Math.PI / angle);
    var lat2 = end.lat() * (Math.PI / angle);
    var lon2 = end.lng() * (Math.PI / angle);

    let dLat = lat1 - lat2;
    let dLon = lon1 - lon2;
    var d = 2 * Math.asin(
            Math.sqrt(
                Math.pow((Math.sin(dLat / 2)), 2)
                + Math.cos(lat1)
                * Math.cos(lat2)
                * Math.pow((
                    Math.sin(dLon / 2)), 2)));

    for (var n = 0; n <= numberOfPoints; n++) {
        var f = (1 / numberOfPoints) * n;
        var A = Math.sin((1 - f) * d) / Math.sin(d);
        var B = Math.sin(f * d) / Math.sin(d);

        var x = A * Math.cos(lat1) * Math.cos(lon1)
            + B * Math.cos(lat2) * Math.cos(lon2);
        var y = A * Math.cos(lat1) * Math.sin(lon1)
            + B * Math.cos(lat2) * Math.sin(lon2);
        var z = A * Math.sin(lat1)
            + B * Math.sin(lat2);

        var latN = Math.atan2(z, Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2)));
        var lonN = Math.atan2(y, x);
        var p = new google.maps.LatLng(latN / (Math.PI / angle), lonN / (Math.PI / angle));
        geodesicPoints.push(p);
    }
    return geodesicPoints;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}