import React, {  Fragment } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';
// import { getGifs } from '../helpers/getGifs';

export const GifGrid = ({ category }) => {

    const { data:images ,loading } = useFetchGifs( category );
    
    /* const [images, setimages] = useState([]);

    useEffect( () => {
        getGifs( category )
            .then( setimages );
    },[ category ]) */

    


    
    return (
        <Fragment>
            <h3 className="animate__animated animate__fadeIn">{ category }</h3>
            { loading && <p className="animate__animated animate__flash">Loading</p>}
            
                <div className="card-grid">
                    {
                        images.map( img => (
                            <GifGridItem
                                key = { img.id}
                                { ...img }
                            />
                        ))
                    }
                </div>
        </Fragment>
    )
}
