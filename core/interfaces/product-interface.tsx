export interface Product {
    id: number;
    productImage: string;
    isVerified: boolean;
    isBookMarked: boolean;
    productName: string;
    productMinPrice: string;
    productMaxPrice: string;
    productCurrency: string;
    productMinOrderUnit: string;
    productCategories: string[];
}