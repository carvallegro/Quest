export function inherits(child, parent) {
    function ghost() {
    }

    ghost.prototype = parent.prototype;
    child.prototype = new ghost();
    child._super = parent.prototype;
}

export function calculateSize(pos, map, size, DOMElem) {
    let zoom = map.getZoom();
    let fontSize = 10 * Math.pow(2, zoom) * size;

    let div = DOMElem;
    div.style.left = pos.x + 'px';
    div.style.top = pos.y + 'px';
    div.style.fontSize = fontSize + 'px';
};
