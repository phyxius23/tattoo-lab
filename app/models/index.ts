export interface HomeState {
    coverSection: CoverState;
    studioSection: BiographyState;
    crewSection: CrewState;
    worksSection: GalleryState;
    piercingSection: JumbotronState;
    contactSection: JumbotronState;
}

export interface CrewState {
    coverSection: CoverState;
    biographySection: BiographyState;
    worksSection: GalleryState;
    sketchesSection: GalleryState;
    piercingSection: JumbotronState;
    contactSection: JumbotronState;
}

export interface PageState {
    coverSection: CoverState;
    biographySection?: BiographyState;
    worksSection?: GalleryState;
    crewSection: CrewState;
    piercingSection: JumbotronState;
    contactSection?: JumbotronState;
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

export interface FormState {
    name: string;
    email: string;
    message: string;
    privacy: boolean;
}

// export interface StudioSectionState {
//     title: string;
//     image?: ImageState;
//     mediaText: MediaTextState[]
// }

// export interface SketchesSection {
//     title: string;
//     images: ImageState[];
// }

// export interface ContactState {
//     id: String;
//     title: String;
//     btnHref: String;
//     btnText: String;
// }

// export interface MediaTextProps {
//     media: string;
//     data: MediaText[];
//     addClass: string;
// }