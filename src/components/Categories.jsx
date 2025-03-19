import classes from '../modules/Categories.module.scss'
import  phones from '../assets/Phones.svg'
import cameras from '../assets/Cameras.svg'
import computers from '../assets/Computers.svg'
import smartWatches from '../assets/Smart-Watches.svg'
import gaming from '../assets/Gaming.svg'
import headphones from '../assets/Headphones.svg'
import axios from "axios";
import {useEffect, useState} from "react";


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

    const getCategoryImage = (categoryName) => {
        switch (categoryName.toLowerCase()) {
            case 'phones':
                return phones;
            case 'smart watches':
                return smartWatches;
            case 'cameras':
                return cameras;
            case 'headphones':
                return headphones;
            case 'computers':
                return computers;
            case 'gaming':
                return gaming;
            default:
                return null;
        }
    }


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
                                const categoryImage = getCategoryImage(category.name);
                                return (

                                    <li key={index} className={classes['category-item']}>
                                        {categoryImage && (
                                            <div  className={classes['category-image']}>
                                                <img src={categoryImage} alt={category.name}
                                                     className={classes['category-image']}/>
                                            </div>

                                        )}
                                        <p>{category.name}</p>
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