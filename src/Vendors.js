import React, { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom';
import './App.scss';

const Vendors = () => {
    const [vendors, setVendors] = useState([]);
    
    const fetchVendors = async () => {
        const vendorsQuery = await fetch("https://localhost:7124/api/vendors");
        if(vendorsQuery.ok) {
            const vendorJson = await vendorsQuery.json();
            setVendors(vendorJson);
        }
    }
    
    useEffect(() => {
       fetchVendors();
    },[]);

    return (
        <div className='vendorsContainer'>
            <h1>My Vendors</h1>
            {vendors.length > 0 ? 
            vendors.map((vendor,index)=> {
                return (
                    <div key={index} className='vendorResults'>
                        <h3>{vendor.name}</h3>
                        <span>Products:</span>
                        <ul>
                            {vendor.products.map((product,index) => {
                                return <li key={index}>{product.name}</li>
                            })}
                        </ul>
                    </div>
                )
            }) 
            : <span>Sorry, no vendors found</span>}
            <Link to="/">Return to Home</Link>
        </div>
    )
}

export default Vendors;