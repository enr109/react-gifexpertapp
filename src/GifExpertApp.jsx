import React,{ Fragment, useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    /* const textInput = useRef(); */

    const [categories, setcategories] = useState(['One Punch']);

    // const handleAdd = () => {
    //     /* setcategories( ); */
    //     /* const valor = textInput.current.value; */
    //     // setcategories( cats => [...cats, 'HunterXHunter']);
    // }
    return (
        <Fragment>
            <h2>GifExpertApp</h2>
            <AddCategory setcategories={ setcategories }/>
            <hr/>
            {/* <input type="text" ref={textInput} /> */}
            
            {
                categories.map( category => (
                    <GifGrid 
                        key={ category }
                        category={ category }
                    />
                ))
            }
        </Fragment>
    )
}
