import React from 'react'
import { Button as BtnAntd, Input } from "antd";
import productApi from '../../api/productApi';
import { useNavigate } from 'react-router-dom';

function SearchNavbar() {
    const navigate = useNavigate();

    const onSearch = value => {
        console.log(value);
        navigate(`/search-result?product=${value}`, {state : value })
    }
  return (
    <Input.Search  placeholder="input search text" onSearch={onSearch} allowClear style={{ width: "70%" }} />
  )
}

export default SearchNavbar