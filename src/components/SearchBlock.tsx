import React, {useState} from 'react';
import { Link } from 'react-router-dom';

const SearchBlock = () => {
    const [isSearch, setSearch] = useState<any>("")

    const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
        
    }
    const addSearch = () => {
        if(isSearch !== undefined && isSearch !== "") {
            setSearch("")
        }else {
            alert("검색어를 입력해주세요")
        }
    }
    return (
        <div className='productSearch'>
            <input type="text" placeholder='검색어를 입력해주세요' value={isSearch} onChange={onChange}/>
            {isSearch !== undefined && isSearch !== "" ?  
            <Link to={`/searchPage/${isSearch}`} ><span onClick={addSearch}>Search</span></Link>:
            <span onClick={addSearch}>Search</span>
            }
        </div>
    );
};

export default SearchBlock;