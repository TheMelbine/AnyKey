export type TSortItem = {
    name: string;
    sortProperty: string;
    order: string;
}

export type TFilterSlice = {
    searchValue: string;
    categoryId: string;
    sort: TSortItem;
}