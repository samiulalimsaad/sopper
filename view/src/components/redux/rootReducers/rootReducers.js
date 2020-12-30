import { combineReducers } from "redux";
import { aboutReducer } from "../reducers/aboutReducer";
import { cartsReducer } from "../reducers/cartReducer";
import { checkOutReducer } from "../reducers/checkOutReducer";
import { contactReducer } from "../reducers/contactReducer";
import { digitalReducer } from "../reducers/digitalReducer";
import { furnitureReducer } from "../reducers/furnitureReducer";
import { homeReducer } from "../reducers/homeReducer";
import { kidsReducer } from "../reducers/kidsReducer";
import { menReducer } from "../reducers/menReducer";
import { myAccountReducer } from "../reducers/myAccountReducer";
import { otherServiceReducer } from "../reducers/otherServiceReducer";
import { womenReducer } from "../reducers/womenReducer";
import { cartCount } from "../reducers/cartCount";
import { view } from "../reducers/viewReducer";

export const rootReducer = combineReducers({
    about: aboutReducer,
    cart: cartsReducer,
    checkOut: checkOutReducer,
    contact: contactReducer,
    digital: digitalReducer,
    furniture: furnitureReducer,
    home: homeReducer,
    kids: kidsReducer,
    men: menReducer,
    myAccount: myAccountReducer,
    otherService: otherServiceReducer,
    women: womenReducer,
    cartCount,
    view,
});
