import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/header/index';
import ScenicItem from './scenicItem/index';
import { connect } from 'react-redux';

import './index.css';

class Home extends Component {
    static propTypes = {
        formData: PropTypes.array.isRequired,
    }
    render() {
        let { formData } = this.props;
        return (
            <div>
                <Header showRight={true} showLeft={false}></Header>
                <div className="scenicContainer">
                    <ul className="scenicUl">
                        {
                            formData.length > 0 ? (
                                formData.map((item, index) => {
                                    return (
                                        <ScenicItem {...item} key={index} />
                                    )
                                })
                            ) : <p className="emptyList">没有任何景区信息，请先去添加吧!</p>
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

export default connect(state => ({
    formData: state.formData,
}), {})(Home);