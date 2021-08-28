import React from 'react'
import str1 from './stories/story1.jpg'
import str2 from './stories/story2.jpg'
import str3 from './stories/story3.jpg'
import str4 from './stories/story4.jpg'
const Stories = () => {
    return (
        <div className = "content-main">
            <div >
                <h3 className="content-title"> <span className="span-name">Popular Stories</span> </h3>
            </div>
            <div className="stories">
                <a className="news" href="https://sneakernews.com/2021/08/27/nike-air-max-95-navy-do6704-400-release-info/"> 
                    <figure >
                        <img src={str1} ></img>
                        <figcaption>The Mini-Swooshed NIke Air Max 95 Arrives In Navy Blues</figcaption>
                    </figure>
                </a>
                <a className="news" href="https://sneakernews.com/2021/08/23/adidas-yeezy-boost-350-v2-uv-yarn-light-gy3438-gy3439-gy3440/"> 
                    <figure >
                        <img src={str2}></img>
                        <figcaption>adidas YEEZY BOOST 350 V2 “Light” Confirmed For August 28th; Raffles Now Open</figcaption>
                    </figure>
                </a>
                <a className="news" href="https://sneakernews.com/2021/08/27/air-jordan-1-mid-siempre-la-familia-release-info/"> 
                    <figure >
                        <img src={str3}></img>
                        <figcaption>Air Jordan 1 Mid “Siempre La Familia” Returns With Newly Decorated Uppers</figcaption>
                    </figure>
                </a>
                <a  className="news" href="https://sneakernews.com/2021/08/20/air-jordan-4-lightning-ct8527-700-store-list/"> 
                    <figure> 
                        <img src={str4}></img>
                        <figcaption>Where To Buy The Air Jordan 4 “Lightning”</figcaption>
                    </figure>
                </a>
            </div>
        </div>
    )
}

export default Stories