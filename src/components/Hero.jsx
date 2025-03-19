import classes from '../modules/Hero.module.scss'
import iphone from '../assets/iphone-image.svg'
import playstation from '../assets/PlayStation.svg'
import airpods from '../assets/airpods.svg'
import visionPro from '../assets/vision-pro.svg'
import macbook from '../assets/macbook.svg'

 const Hero = () => {
    return (
        <>
            <div className={classes['banner']}>
                <div className={classes['iphone-text']}>
                    <div className={classes['iphone-text-inside']}>
                        <p>Pro.Beyond</p>
                        <br/> <h1>IPhone 14 <span>Pro</span></h1>
                        <br/> <h5>Created to change everything for the better. For everyone</h5>
                        <br/>
                        <button className={classes['btn']}> Shop Now</button>
                    </div>

                </div>
                <div className={classes['iphone-14']}>
                    <img src={iphone} className={classes['iphone-14']}/>
                </div>
            </div>

            <div className={classes['smaller-banner']}>

                <div className={classes['left-banner']}>
                    <div className={classes['wide-square']}>

                        <div className={classes['wide-square-img']}>
                            <img src={playstation}/>

                        </div>

                        <div className={classes['wide-square-text']}>
                            <div className={classes['wide-square-text-content']}>
                                <h1>Playstation 5</h1>
                                <p>Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your
                                    PlayStation experience.</p>
                            </div>

                        </div>

                    </div>

                    <div className={classes['mini-squares']}>

                        <div className={classes['mini']}>
                            <div className={classes['mini-img']}>
                                <img src={airpods}/>
                            </div>

                            <div className={classes['mini-text']}>
                                <div className={classes['mini-text-content']}>
                                    <h1>Apple AirPods <span>Max</span></h1>
                                    <p>Computational audio. Listen, it's powerful</p>
                                </div>

                            </div>
                        </div>

                        {/*    visionrpo*/}
                        <div className={classes['mini-right']}>
                            <div className={classes['mini-img']}>
                                <img src={visionPro}/>
                            </div>

                            <div className={classes['mini-text']}>
                                <div className={classes['mini-text-content']}>
                                    <h1>Apple   Vision <span>Pro</span></h1>
                                    <p>An immersive way to experience entertainment</p>
                                </div>

                            </div>
                        </div>

                    </div>


                </div>


                <div className={classes['right-banner']}>

<div className={classes['macbook-text']}>
    <div className={classes['macbook-text-content']}>
        <h1>Macbook <span>Air</span></h1>
        <p>The new 15‑inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.</p>
        <button className={classes['btn']}> Shop Now</button>
    </div>
</div>
                    <div className={classes['macbook-img']}>
                        <img src={macbook}/>
                    </div>

                </div>

            </div>

        </>
    )
 }
export default Hero
