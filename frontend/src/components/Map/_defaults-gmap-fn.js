export function toggleDOMDefault() {
    if (this.getMap()) {
        this.setMap(null);
    } else {
        this.setMap(this.map_);
    }
}
export function onRemoveDefault() {
    this.elem_.parentNode.removeChild(this.elem_);
    this.elem_ = null;
}

export function updatePositionDefault(position) {
    this.position_ = position;
}