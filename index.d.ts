export declare const Preset: {
    iOS: {
        r1: number;
        r2: number;
    };
    KakaoTalk: {
        r1: number;
        r2: number;
    };
};
export declare function calcSuperEllipsePath(w: number, h: number, r1: number, r2: number): string;
export declare function getSuperEllipsePathAsDataUri(w: number, h: number, r1: number, r2: number): {
    id: string;
    svg: string;
    dataUri: string;
};
export declare function svg2DataUri(data: string): string;
