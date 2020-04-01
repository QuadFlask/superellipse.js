"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Preset = {
    iOS: {
        r1: 0.093,
        r2: 0.247,
    },
    KakaoTalk: {
        r1: 0.14,
        r2: 0.5
    }
};
function calcSuperEllipsePath(w, h, r1, r2) {
    r1 = Math.min(r1, r2);
    return "M 0," + r2 + "\nC 0," + r1 + " " + r1 + ",0 " + r2 + ",0\nL " + (w - r2) + ",0\nC " + (w - r1) + ",0 " + w + "," + r1 + " " + w + "," + r2 + "\nL " + w + "," + (h - r2) + "\nC " + w + "," + (h - r1) + " " + (w - r1) + "," + h + " " + (w - r2) + "," + h + "\nL " + r2 + "," + h + "\nC " + r1 + "," + h + " 0," + (h - r1) + " 0," + (h - r2) + "\nL 0," + r2;
}
exports.calcSuperEllipsePath = calcSuperEllipsePath;
function getSuperEllipsePathAsDataUri(w, h, r1, r2) {
    var id = "se-" + w + "-" + h + "-" + r1 + "-" + r2;
    var svg = "<svg width=\"" + w + "\" height=\"" + h + "\" viewBox=\"0 0 " + w + " " + h + "\">\n<defs><clipPath id=\"" + id + "\"><path fill=\"#000\" d=\"" + calcSuperEllipsePath(w, h, r1, r2) + "\"/></clipPath></defs>\n<g clip-path=\"url(#" + id + ")\"><rect width=\"" + w + "\" height=\"" + h + "\" fill=\"#000\"/></g></svg>";
    return { id: id, svg: svg, dataUri: svg2DataUri(svg) };
}
exports.getSuperEllipsePathAsDataUri = getSuperEllipsePathAsDataUri;
function svg2DataUri(data) {
    if (data.indexOf('http://www.w3.org/2000/svg') < 0)
        data = data.replace(/<svg/g, "<svg xmlns='http://www.w3.org/2000/svg'");
    data = data.replace(/"/g, '\'')
        .replace(/>\s+</g, "><")
        .replace(/\s{2,}/g, " ")
        .replace(/[\r\n%#()<>?[\\\]^`{|}]/g, encodeURIComponent);
    return "data:image/svg+xml," + data;
}
exports.svg2DataUri = svg2DataUri;
