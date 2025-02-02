export interface product{
    _id: string;
    productName:string;
    _type: string;
    image?:{
        asset:{
            _ref: string;
            _type: string;
        }
    };
    price: number;
    description:'text' ;
    slug:{
        _type: 'slug';
        current?: string;
    };
    inventory:number;
}