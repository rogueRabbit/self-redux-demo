import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './index.css';

const propTypes = {
    title: PropTypes.string,
    showLeft: PropTypes.bool,
    showRight: PropTypes.bool,
}

const defaultProps = {
    title: '首页',
    showLeft: false,
    showRight: false,
}

export default class Header extends Component {
    render() {
        let { showLeft, showRight } = this.props;
        return (
            <div className="header">
                {
                    showLeft ? (
                        <span className="leftBtn">
                            <Link to="/scenicList">首页</Link>
                        </span>
                    ) : null
                }
                <p>{this.props.title}</p>
                {
                    showRight ? (
                        <span className="rightBtn">
                            <Link to="/">+添加景区</Link>
                        </span>
                    ) : null
                }
            </div>
        )
    }
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;