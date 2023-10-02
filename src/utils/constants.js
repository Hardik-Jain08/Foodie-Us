// Swiggy API to get Restaurant data
export const RES_API = 'https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.593690&lng=77.095320&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING#';

// Image CDN URL for Restaurant card
export const IMG_CDN_URL =
    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_400,c_fill/";

// Image for contact page
export const IMG_CONTACT = 
    "https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg"

// Image for apple store
export const IMG_APPSTORE = 
    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-AppStore_lg30tv"

// Image for apple store
export const IMG_PLAYSTORE = 
    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-GooglePlay_1_zixjxl"

// Image CDN URL for Restaurant Menu
export const ITEM_IMG_CDN_URL =
    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/";

// Swiggy API to get Restaurant data with corsproxy
export const swiggy_api_URL =
    "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING";

// Swiggy API to get Restaurant Menu data with corsproxy
export const swiggy_menu_api_URL =
    "https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId=";

// shimmer card unit
export const shimmer_card_unit = 20;

// shimmer Menu card unit
export const shimmer_menu_card_unit = 4;

// Github - username
export const Github_UserName = "ChetanNada";
export const Github_Repository_Name = "Namaste-React";

// Github API for User
export const Github_API_User = "https://api.github.com/users/";

// Social Media Links
export const Linkedin_Link = "https://www.linkedin.com/in/chetannada/";
export const Twitter_Link = "https://twitter.com/ChetanNada";
export const Github_Link = "https://github.com/chetannada";
export const Email_Link = "mailto:call2chetannada@gmail.com";

// Github Authorization Token
export const options = {
    method: "GET",
    headers: {
        Authorization: "",
    },
};

// menu items api card type key
export const MENU_ITEM_TYPE_KEY =
    "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
export const RESTAURANT_TYPE_KEY =
    "type.googleapis.com/swiggy.presentation.food.v2.Restaurant";
