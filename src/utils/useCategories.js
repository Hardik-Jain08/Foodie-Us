import { MENU_ITEM_TYPE_KEY } from "./constants";

const useCategories = (itemCards) => {
  return (
      itemCards.filter((item) => {
          return item?.card?.card?.["@type"] === MENU_ITEM_TYPE_KEY;
      })
  )
}

export default useCategories