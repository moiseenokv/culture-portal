import React from 'react';
import { Link } from 'gatsby';
import MyMap from '../components/mapWidget';

const AuthorPage = () => {
    return (
        <div>  
            <div key="/"><Link to='/'>На Главную</Link></div>
            <MyMap data={[[54.000361, 27.028653], [54.034945, 28.037390], [54.033028, 28.539078], [54.067857, 28.330841]]} />
        </div>
        
    )
}

export default AuthorPage;