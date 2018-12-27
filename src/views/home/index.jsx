import React, { Component } from 'react';
import Header from '../../components/header/index';

export default class Home extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <div className="scenicContainer">
                    <ul className="scenicUl">
                        <li>
                            <div className="scenicDeatil">
                                <div className="leftImage">
                                    <img src="https://youimg1.c-ctrip.com/target/fd/tg/g2/M00/8B/CD/CghzgFWw42SAYc4cACy_qgHAOG0303_C_130_130_Q60.jpg" alt="logo" className="scenicPictiure" />
                                </div>
                                <div className="rightContent">
                                    <div className="rightProduct">
                                        <p className="proName">中华恐龙园</p>
                                        <div className="proTktSpot">
                                            <span>常州</span>
                                            <span>5A景区</span>
                                        </div>
                                        <div className="proActInfo">
                                            <span className="listScore">4.6分</span>
                                            <span className="proSaleText">已售12.9万+</span>
                                        </div>
                                        <div className="tagList">
                                            <span className="tag">可订明天</span>
                                        </div>
                                    </div>
                                    <div className="proPrice">
                                        <div>
                                            <span className="priceInfo">
                                                <dfn>￥</dfn>
                                                <i>90</i>
                                            </span>
                                            <span className="proText">
                                                起
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}