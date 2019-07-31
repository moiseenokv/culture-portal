import React from 'react';
import { Link } from 'gatsby';
import MyMap from '../components/mapWidget';
import MyVideo from '../components/videoWidget'

const AuthorPage = () => {
    return (
        <div>  
            <div key="/"><Link to='/'>На Главную</Link></div>
            <MyMap data={[[54.000361, 27.028653], [54.034945, 28.037390], [54.033028, 28.539078], [54.067857, 28.330841]]} />
        <div>
            <MyVideo url='https://www.youtube.com/embed/vkEscYr-tfU' title="Karatkevich" />
        </div>
        
        </div>
        
    )
}

export default AuthorPage;