import { toast } from "react-toastify";
import * as actionType from "../actions/actionType";


const initialState = {
    cartAr: [],



    // cartAr: localStorage.getItem("cart") ?
    // JSON.parse(localStorage.getItem("cart")) : [],


    // if (cartAr) {
    //     cartAr = localStorage.setItem('cart', JSON.stringify(cartAr))
    // }
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.BUY_PRODUCT:
            const productInCart = state.cartAr.find(
                (p) => p.id === action.payload.id,
                toast.success(" thêm sp vào giỏ hàng thành công "),
                localStorage.setItem('cart', JSON.stringify(action.payload))

            );
            if (!productInCart) {
                return {
                    cartAr: [...state.cartAr, action.payload],
                };
            } else {
                let newcart = state.cartAr;
                const objIndex = newcart.findIndex(
                    (obj) => obj.id === action.payload.id
                );
                if (newcart[objIndex].quantity === undefined) {
                    newcart[objIndex].quantity = 2;
                } else {
                    newcart[objIndex].quantity = newcart[objIndex].quantity + 1;
                }

                return { cartAr: [...newcart] };
            }
        case actionType.DELETE_PRODUCT:
            let newcart = state.cartAr;
            const objIndex = newcart.findIndex((obj) => obj.id === action.payload.id);
            newcart.splice(objIndex, 1);
            console.log(">>newcart", newcart);
            return { cartAr: [...newcart], totalprice: 0 };

        default:
            return state;
    }
};

export default cartReducer;