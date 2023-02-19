export type TKeyboard = {
    id: number;
    imageUrl: string;
    title: string;
    types: number[];
    sizes: string[];
    price: number;
    category: string;
    rating: number;
}


export type TKeyboardShopItem = TKeyboard & { activeSize: string, activeType: number }