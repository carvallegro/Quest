import {inherits, calculateSize} from '../_common-gmap-objects';
import {toggleDOMDefault, onRemoveDefault} from '../_defaults';

/*global google*/
export default () => {
    if (window.placeMarker) {
        return window.placeMarker;
    }

    const placeMarker = function (map, position, type = 'pin', onClick = null) {
        this.position_ = position;
        this.type_ = type;
        this.map_ = map;
        this.onClick_ = onClick;
        this.elem_ = null;
        this.setMap(map);


    };


    inherits(placeMarker, google.maps.OverlayView);
    placeMarker.prototype.onRemove = onRemoveDefault;
    placeMarker.prototype.toggleDOM = toggleDOMDefault;

    placeMarker.prototype.onAdd = function () {
        let self = this;
        let marker = document.createElement('i');
        marker.style.position = 'absolute';
        marker.className = 'post-marker fi flaticon-' + this.type_;

        google.maps.event.addDomListener(marker, "click", function () {
            console.log('TODO click');
            if (self.onClick_) {
                self.onClick_();
            }
        });

        google.maps.event.addDomListener(marker, "mouseover", function () {
            marker.classList.add('hover');

        });
        google.maps.event.addDomListener(marker, "mouseleave", function () {
            marker.classList.remove('hover');

        });


        this.elem_ = marker;
        let panes = this.getPanes();
        panes.overlayMouseTarget.appendChild(this.elem_);
    };

    placeMarker.prototype.draw = function () {
        let overlayProjection = this.getProjection();
        let pos = overlayProjection.fromLatLngToDivPixel(this.position_);

        if (this.map_) {
            let size = 5 / 10;
            calculateSize(pos, this.map_, size, this.elem_);
        }
    };

    window.placeMarker = placeMarker;
    return placeMarker;
};