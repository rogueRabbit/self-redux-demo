import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { saveScenic } from 'stores/scenicItem/action';
import Header from 'components/header';
import Dialog from 'components/dialog';
import Score from 'components/score';

import './index.scss';

class ScenicForm extends Component {
    static propTypes = {
        formData: PropTypes.array.isRequired,
        saveScenic: PropTypes.func.isRequired,
    }

    constructor(props) {
        super(props);
        this.state = {
            title: '添加景区',
            alertTips: '',
            alertStatus: false,
            scenicObj: {
                scenicName: '',
                address: '',
                grade: 1,
                score: 0,
                saleCount: '',
                tag: '',
                price: '',
            }
        }
    }

    getScore(score) {
        let { scenicObj } = this.state;
        scenicObj['score'] = score;
        this.setState({
            scenicObj: {...scenicObj},
        })
    }

    handleInput(type, event) {
        let { scenicObj } = this.state;
        let value = event.target.value;
        scenicObj[type] = value;
        this.setState({
            scenicObj: scenicObj,
        })
    }

    submitForm = (e) => {
        e.preventDefault();
        let { scenicObj } = this.state;
        let alertTips = '';
        if (!scenicObj.scenicName.toString().length) {
            alertTips = "请输入景区名称";
        } else if(!scenicObj.address.toString().length) {
            alertTips = "请输入景区地址";
        }  else if(scenicObj.score === 0) {
            alertTips = "请设置景区评分";
        } else if(!scenicObj.saleCount.toString().length) {
            alertTips = "请输入已售票数";
        } else if(!scenicObj.tag.toString().length) {
            alertTips = "请输入景区标签";
        } else if(!scenicObj.price.toString().length) {
            alertTips = "请输入景区价格";
        } else {
            alertTips = "景区成功，请去首页预览吧！";
            this.props.saveScenic(scenicObj);
            this.setState({
                scenicObj: {
                    scenicName: '',
                    address: '',
                    grade: 1,
                    score: 0,
                    saleCount: '',
                    tag: '',
                    price: '',
                }
            })
        }
        this.setState({
            alertStatus: true,
            alertTips
        })
    }

    closeDialog = () => {
        this.setState({
            alertStatus: false,
        })
    }
    

    render() {
        let { title, alertTips, alertStatus, scenicObj } = this.state;
        return (
            <div>
                <Header title={title} showRight={false} showLeft={true}></Header>
                <div className="formContent">
                    <form>
                        <ul className="contentUl">
                            <li>
                                <div className="scenicItem">
                                    <div className="scenicLabel">
                                        景区名称：
                                    </div>
                                    <div className="scenicContent">
                                        <input 
                                            type="text" 
                                            maxLength="10"
                                            className="inputParams" 
                                            placeholder="请输入景区名称" 
                                            onChange={this.handleInput.bind(this, 'scenicName')}
                                            value={scenicObj.scenicName} />
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="scenicItem">
                                    <div className="scenicLabel">
                                        景区地址：
                                    </div>
                                    <div className="scenicContent">
                                        <input 
                                            type="text" 
                                            maxLength="10"
                                            className="inputParams" 
                                            placeholder="请输入景区地址" 
                                            onChange={this.handleInput.bind(this, 'address')}
                                            value={scenicObj.address} />
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="scenicItem">
                                    <div className="scenicLabel">
                                        景区级别：
                                    </div>
                                    <div className="scenicContent">
                                        <select 
                                            className="selectParams" 
                                            value={scenicObj.grade}
                                            onChange={this.handleInput.bind(this, 'grade')}
                                            >
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                        </select>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="scenicItem">
                                    <div className="scenicLabel">
                                        景区评分：
                                    </div>
                                    <div className="scenicContent">
                                        <Score getScore={this.getScore.bind(this)}/>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="scenicItem">
                                    <div className="scenicLabel">
                                        已售票数：
                                    </div>
                                    <div className="scenicContent">
                                        <input 
                                            type="text" 
                                            maxLength="5"
                                            className="inputParams" 
                                            placeholder="请输入已售票数"
                                            onChange={this.handleInput.bind(this, 'saleCount')}
                                            value={scenicObj.saleCount} />
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="scenicItem">
                                    <div className="scenicLabel">
                                        标签：
                                    </div>
                                    <div className="scenicContent">
                                        <input 
                                            type="text" 
                                            className="inputParams" 
                                            placeholder="请输入标签"
                                            onChange={this.handleInput.bind(this, 'tag')}
                                            value={scenicObj.tag} />
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="scenicItem">
                                    <div className="scenicLabel">
                                        价格：
                                    </div>
                                    <div className="scenicContent">
                                        <input
                                            maxLength="4"
                                            type="text" 
                                            className="inputParams" 
                                            placeholder="请输入价格" 
                                            onChange={this.handleInput.bind(this, 'price')}
                                            value={scenicObj.price} />
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <button className="submitBtn" onClick={this.submitForm}>提交</button>
                    </form>
                </div>
                <Dialog tip={alertTips} status={alertStatus} closeAlert={this.closeDialog} />
            </div>
        )
    }
}

export default connect(state => ({
    formData: state.formData,
}), {
    saveScenic,
})(ScenicForm);