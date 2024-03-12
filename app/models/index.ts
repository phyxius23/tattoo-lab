export interface PageState {
    coverSection: CoverState;           // home, tobia, tommy, piercing, contatti
    studioSection?: BiographyState;     // home
    crewSection?: CrewState;            // home, contatti, piercing
    worksSection?: GalleryState;        // home, tobia, tommy, piercing
    piercingSection?: JumbotronState;   // home, tobia, tommy, contatti
    contactSection?: JumbotronState;    // home, tobia, tommy, piercing
    biographySection?: BiographyState;  // tobia, tommy, piercing
    sketchesSection?: GalleryState;     // tobia, tommy
}

export interface CoverState {
    title: string;
    subtitle?: string;
    link?: LinkState;
    image: ImageState;
}

export interface BiographyState {
    title: string;
    image?: ImageState;
    mediaText: MediaTextState[],
}

export interface CrewState {
    title: string;
    image: ImageState;
    artists: ArtistState[];
}

export interface GalleryState {
    title: string;
    images: ImageState[];
}

export interface JumbotronState {
    title: string;
    image?: ImageState;
    description?: string;
    link: LinkState;
}

export interface MediaTextState {
    id?: number;
    addClass: string;
    image: ImageState;
    title?: string;
    paragraphs: Paragraphs[];
}

export interface ImageState {
    id?: number;
    url: string;
    alt: string;
    height?: number;
    width?: number;
    title?: string;
}

export interface LinkState {
    id?: number;
    href: string;
    alt: string;
    text: string;
}

export interface Paragraphs {
    id: number;
    text: string;
}

export interface ArtistState {
    id?: number;
    title: string;
    description: string;
    image: ImageState;
}