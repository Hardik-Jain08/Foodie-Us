import React from 'react'
import ItemList from './ItemList';

const ItemCategory = ({ item , showlist, setShowIndex}) => {
    // console.log(item);
    return (
        <div>
            <div onClick={() => {setShowIndex()}} className='bg-white border-b-8 flex justify-between cursor-pointer my-1 p-3'>
                <span className=''>{item?.title}({item?.itemCards?.length})</span>
                <span><i className='fa-solid fa-caret-down'></i></span>
            </div>
            {showlist && item.itemCards.map((itemList, index) => {
                return <ItemList
                    item={itemList}
                />;
            })}
        </div>
    )
}

export default ItemCategory