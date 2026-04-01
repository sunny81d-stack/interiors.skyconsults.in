export interface ProjectMedia {
    thumbnail: string;
    gallery: string[];
    video: {
        youtube: string;
        vimeo: string;
    };
    model3d: string;
}

export interface Testimonial {
    quote: string;
    clientName: string;
    rating: number;
}

export interface Project {
    id: string;
    title: string;
    description: string;
    category: string;
    location: string;
    year: number;
    projectType: string;
    area: string;
    duration: string;
    budget: string;
    media: ProjectMedia;
    testimonial: Testimonial;
    highlights: string[];
    featured: boolean;
}
// ... keep all existing types (Project, ProjectMedia, Testimonial)

export type Tier = 'essential' | 'premium' | 'luxury';

export interface CalculatorInput {
    bedrooms: number;
    halls: number;
    dining: number;
    kitchens: number;
    tier: Tier;
}

export interface BreakdownRow {
    room: string;
    count: number;
    sqFt: number;
    dryAreaCost: number;
    wetAreaCost: number;
    subtotal: number;
    grade: string;
    finish: string;
}

export interface CalculatorResult {
    tier: string;
    breakdown: BreakdownRow[];
    subtotal: number;
    gstAmount: number;
    grandTotal: number;
}

export interface AreaPricing {
    rate: number;
    grade: string;
    finish: string;
}

export interface RoomPricing {
    dryArea: AreaPricing;
    wetArea?: AreaPricing;
}

export interface TierConfig {
    label: string;
    defaultSqFt: {
        bedroom: number;
        hall: number;
        dining: number;
        kitchen: number;
    };
    pricePerSqFt: {
        bedroom: RoomPricing;
        hall: RoomPricing;
        dining: RoomPricing;
        kitchen: RoomPricing & { wetArea: AreaPricing };
    };
}

export interface PricingData {
    gstRate: number;
    tiers: Record<Tier, TierConfig>;
}