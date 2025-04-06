import React, { useEffect, useState } from 'react'

export default function Products() {
    var[products, setProducts] = useState([])
    // fetch or axios (fetch is inbuilt function , whereas axios is external package)
    function fetchData(){
        fetch('https://fakestoreapi.com/products')
        .then((result) => {
            return result.json();
        })
        .then((data)=> {
            console.log(data);
            setProducts(data);
        })
        .catch()
    }
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            {
                products.map((products) => {
                    return(
                        <div>
                            <h1> {products.title}</h1>
                            <p>{products.description}</p>
                        </div>
                        
                    )
                })
            }
        </div>
    )
}
