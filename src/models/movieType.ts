// types.d.ts
export interface Movie {
    id: string;
    titleText: {
        text: string;
    };
    primaryImage?: {
        url: string;
    };
    validImage?: boolean;
    genres: {
        genres: {
            text: string;
        }[];
    };
    ratingsSummary: {
        aggregateRating: number;
    };
    runtime: {
        seconds: number;
    };
    plot: {
        plotText: {
            plainText: string;
        };
    };
    releaseDate: {
        day: number;
        month: number;
        year: number;
    };
}
