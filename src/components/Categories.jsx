import classes from '../modules/Categories.module.scss'

import axios from "axios";
import {useEffect, useState} from "react";
import {Link} from "react-router";

const Categories = ()=>{
    const [categories, setCategories] = useState([])



    useEffect(() => {

        axios.get('http://localhost:5000/categories')
            .then(response => {
                setCategories(response.data);
                console.log('categories:', response.data);
                console.log(Array.isArray(categories));
            })
            .catch(error => {
                console.error('Error fetching data', error);
            });
    }, []);


    return(
        <>
            <div className={classes['main-wrapper']}>
                <div className={classes['title']}>
                    <h1>Browse By Category</h1>
                </div>

                <div className={classes['items']}>
                    <div className={classes['box']}>
                        <ul>
                            {categories.map((category, index) => {
                                return (

                                    <li key={index}>
                                        <p>
                                            {category.name}
                                        </p>

                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                </div>


            </div>


        </>
    )
}

export default Categories