export type Language = 'zh' | 'en';

export type ViewState = 'home' | 'exhibition-detail' | 'artists' | 'art-fairs' | 'about' | 'exhibitions-2022' | 'exhibitions-2023' | 'exhibitions-2024' | 'exhibitions-2025';

export interface Artwork {
  id: string;
  title: string;
  year: string;
  medium: string;
  dimensions: string;
  imageUrl: string;
  layoutConfig: {
    width: string;
    align: 'self-start' | 'self-center' | 'self-end';
    marginTop: string;
  };
}

export interface Artist {
  id: string;
  name: string;
  oneLiner: string;
  bio: string;
  imageUrl: string;
}

export interface ArtFair {
  id: string;
  title: string;
  location: string;
  date: string;
  imageUrl: string;
}

export interface Exhibition {
  id: string;
  title: string;
  artist: string;
  date: string;
  year: number;
  imageUrl: string;
}

export interface HeroContent {
  title: string;
  artist: string;
  date: string;
  description: string;
  buttonText: string;
  imageUrl: string;
}

export interface NavItem {
  label: string;
  action?: string;
  subLinks?: Array<{
    label: string;
    action?: string;
    targetId?: string;
    href?: string;
  }>;
}

export interface AboutContent {
  title: string;
  paragraphs: string[];
  contactInfo: {
    addressLabel: string;
    address: string;
    hoursLabel: string;
    hours: string;
    contactLabel: string;
    phone: string;
    email: string;
  };
  mapImageUrl: string;
}

export interface ExhibitionDetailContent {
  title: string;
  artist: string;
  date: string;
  backText: string;
  curatorialStatement: string[];
  artworks: Artwork[];
}

export interface FooterContent {
  contact: string;
  copyright: string;
}

export interface SiteContent {
  brandName: string;
  logoUrl: string;
  nav: {
    exhibitions: NavItem;
    artists: NavItem;
    artFairs: NavItem;
    about: NavItem;
  };
  hero: HeroContent;
  currentExhibitionsTitle: string;
  exhibitions: Exhibition[];
  artists: Artist[];
  artFairs: ArtFair[];
  about: AboutContent;
  exhibitionDetail: ExhibitionDetailContent;
  footer: FooterContent;
}
