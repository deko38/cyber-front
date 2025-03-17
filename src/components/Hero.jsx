import classes from '../modules/Hero.module.scss'
import banner from '../assets/Banner.svg'
import macbook from '../assets/macbook.svg'
import playstation from '../assets/playstation5.svg'
import airpods from '../assets/airpods.svg'
import visionpro from '../assets/Square Banner.svg'
 const Hero = () => {
    return (
        <>

            <div>
                <img src={banner} className={classes['banner']}/>
            </div>
<div className={classes['multiple-wrapper']}>

    <div className={classes['1']}>

        <div className={classes['playstation']}>
            <img src={playstation}/>
        </div>
        <div className={classes['left-wrapper']}>

            <div className={classes['airpods']}>
                <img src={airpods}/>
            </div>

            <div className={classes['visionpro']}>
                <img src={visionpro}/>
            </div>
        </div>
    </div>
    <div className={classes['2']}>
        <img src={macbook} className={classes['macbook']}/>
    </div>
</div>

        </>
    )
}
export default Hero
