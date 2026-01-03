import { createContext } from "react";
import { products } from "../assets/assets";

export const ShopContext = createContext();
const ShopContextProvider = (props) => {
    const value = {
        products

    }
    return(
        <ShopContext.Provider>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider
