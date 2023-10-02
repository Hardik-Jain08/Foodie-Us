import { React, useState} from 'react'

const Search = ({searchDataFun, filterData}) => {
    const [searchText, setSearchText] = useState('');
    return (
        <div className='px-12'>
            <input type="text" className='border-2 w-72 h-10' value={searchText} placeholder="Search" onChange={(e) => {
                setSearchText(e.target.value);
                searchDataFun(e.target.value);
            }} />
            <button className='bg-gray-700 text-white px-4 py-2 rounded' onClick={() => {
                filterData();
            }} >Search</button>
        </div>
    )
}

export default Search