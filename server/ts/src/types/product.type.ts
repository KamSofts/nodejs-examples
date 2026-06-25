// isExpired used for grocery, food, etc.,
// model and spec optional. used for mobile, laptop, etc.,
type Variant = {
    mrp: number,
    price: number,
    isExpired?: boolean
    model?: string,
    spec?: string
};

export type Product = {
    item: string,
    group: string,
    variant: Variant[]
};