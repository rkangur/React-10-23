import React from 'react'

function SortButtons(props) {

    const sortAZ = () => {
        props.products.sort((a, b) => a.name.localeCompare(b.name));
        props.setProducts(props.products.slice());
      }
    
      const sortZA = () => {
        props.products.sort((a, b) => b.name.localeCompare(a.name));
        props.setProducts(props.products.slice());
      }
    
      const sortPriceAsc = () => {
        props.products.sort((a, b) => a.price - b.price);
        props.setProducts(props.products.slice());
      }
    
      const sortPriceDesc = (a,b) => {
        props.products.sort((a,b) => b.price - a.price);
        props.setProducts(props.products.slice());
      }

    return (
        <div>
            <button onClick={sortAZ}>Sorteeri kasvavalt</button>
            <button onClick={sortZA}>Sorteeri kahanevalt</button>
            <button onClick={sortPriceAsc}>Sorteeri hinna järgi kasvavalt</button>
            <button onClick={sortPriceDesc}>Sorteeri hinna järgi kahanevalt</button>
        </div>
    )
}

export default SortButtons