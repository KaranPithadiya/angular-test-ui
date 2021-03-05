export interface ProductType {
    id : string,
    size : number,
    price : number,
    face : string,
    date : string
}

export interface ProductTypeObj {
    [index: number]: { ProductType: ProductType };
}