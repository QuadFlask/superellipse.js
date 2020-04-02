export const Preset = {
    iOS: {
        r1: 0.0586,
        r2: 0.332,
    },
    KakaoTalk: {
        r1: 0.14,
        r2: 0.5
    }
};

export function calcSuperEllipsePath(w: number, h: number, r1: number, r2: number) {
    r1 = Math.min(r1, r2);
    return `M 0,${r2}
C 0,${r1} ${r1},0 ${r2},0
L ${w - r2},0
C ${w - r1},0 ${w},${r1} ${w},${r2}
L ${w},${h - r2}
C ${w},${h - r1} ${w - r1},${h} ${w - r2},${h}
L ${r2},${h}
C ${r1},${h} 0,${h - r1} 0,${h - r2}
L 0,${r2}`;
}

export function getSuperEllipsePathAsDataUri(w: number, h: number, r1: number, r2: number) {
    const id = `se-${w}-${h}-${r1}-${r2}`;
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
<defs><clipPath id="${id}"><path fill="#000" d="${calcSuperEllipsePath(w, h, r1, r2)}"/></clipPath></defs>
<g clip-path="url(#${id})"><rect width="${w}" height="${h}" fill="#000"/></g></svg>`;

    return {id, svg, dataUri: svg2DataUri(svg)};
}

export function svg2DataUri(data: string) {
    return `data:image/svg+xml,${data.replace(/"/g, '\'')
        .replace(/>\s+</g, "><")
        .replace(/\s{2,}/g, " ")
        .replace(/[\r\n%#()<>?[\\\]^`{|}]/g, encodeURIComponent)}`
}
