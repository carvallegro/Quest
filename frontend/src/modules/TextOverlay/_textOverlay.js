import {inherits, calculateSize} from '../_common-gmap-objects';
import {toggleDOMDefault, onRemoveDefault} from '../_defaults';

/*global google*/
export default () => {
    if (window.textOverlay) {
        return window.textOverlay;
    }

    const textOverlay = function (map, position, text, textSize) {
        this.text_ = text;
        this.textSize_ = textSize ? textSize : 5;
        this.map_ = map;
        this.position_ = position;
        this.elem_ = null;

        this.setMap(map);
    };
    inherits(textOverlay, google.maps.OverlayView);
    textOverlay.prototype.onRemove = onRemoveDefault;
    textOverlay.prototype.toggleDOM = toggleDOMDefault;

    textOverlay.prototype.onAdd = function () {
        let title = document.createElement('h1');
        title.innerHTML = this.text_;
        title.style.position = 'absolute';
        title.className = 'text-overlay';

        this.elem_ = title;
        let panes = this.getPanes();
        panes.overlayLayer.appendChild(this.elem_);
    };

    textOverlay.prototype.draw = function () {
        let overlayProjection = this.getProjection();
        let pos = overlayProjection.fromLatLngToDivPixel(this.position_);

        if (this.map_) {
            let size = this.textSize_ / 10;
            calculateSize(pos, this.map_, size, this.elem_);
        }
    };

    window.textOverlay = textOverlay;
    return textOverlay;
};
