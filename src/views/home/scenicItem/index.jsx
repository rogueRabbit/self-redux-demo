import React from 'react';

const ScenicItem = (props) => {
    return (
        <li>
            <div className="scenicDeatil">
                <div className="leftImage">
                    <img src="https://youimg1.c-ctrip.com/target/fd/tg/g2/M00/8B/CD/CghzgFWw42SAYc4cACy_qgHAOG0303_C_130_130_Q60.jpg" alt="logo" className="scenicPictiure" />
                </div>
                <div className="rightContent">
                    <div className="rightProduct">
                        <p className="proName">{props.scenicName}</p>
                        <div className="proTktSpot">
                            <span>{props.address}</span>
                            <span>{props.grade}A景区</span>
                        </div>
                        <div className="proActInfo">
                            <span className="listScore">{props.grade}分</span>
                            <span className="proSaleText">已售{props.saleCount}+</span>
                        </div>
                        <div className="tagList">
                            <span className="tag">可订明天</span>
                        </div>
                    </div>
                    <div className="proPrice">
                        <div>
                            <span className="priceInfo">
                                <dfn>￥</dfn>
                                <i>{props.price}</i>
                            </span>
                            <span className="proText">
                                起
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default ScenicItem;