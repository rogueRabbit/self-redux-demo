import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import CommonBtn from 'components/commonBtn/index';

import './index.scss';

export default class Dialog extends Component {
    static propsTypes = {
        tip: PropTypes.string.isRequired,
        status: PropTypes.bool.isRequired,
        closeAlert: PropTypes.func.isRequired,
    }

    confirm = () => {
        this.props.closeAlert();
    }

    render() {
        return (
            <ReactCSSTransitionGroup
                component='div'
                transitionName='dialog'
                transitionEnterTimeout={300}
                transitionLeaveTimeout={300}>
                {
                    this.props.status && <div className="dialog-con">
                        <div className="dialog-context">
                            <div className="content-detail">{this.props.tip}</div>
                            <CommonBtn className="confirm-btn" clickCallback={this.confirm} />
                        </div>
                    </div>
                }   
        </ReactCSSTransitionGroup>
        )
    }
}