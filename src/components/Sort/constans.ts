import {TSortItem} from "../../redux/slices/filters/types";

export const sortList: TSortItem[] = [{name: '▲ popularity', sortProperty: 'rating', order: 'asc'}, {
    name: '▼ popularity', sortProperty: 'rating', order: 'desc'
}, {name: '▲ price', sortProperty: 'price', order: 'asc'}, {
    name: '▼ price', sortProperty: 'price', order: 'desc'
}, {name: '▲ title', sortProperty: 'title', order: 'asc'}, {
    name: '▼ title', sortProperty: 'title', order: 'desc'
},];