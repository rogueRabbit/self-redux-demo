import React, { PureComponent } from 'react';

import './index.css';

class Score extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            scoreList: [
                {class: 'stage-0', selectItem: 0},
                {class: 'stage-0', selectItem: 0},
                {class: 'stage-0', selectItem: 0},
                {class: 'stage-0', selectItem: 0},
                {class: 'stage-0', selectItem: 0},
            ],
        }
    }

    selectScore(selectIndex){
        let { scoreList } = this.state;
        let sumScore = 0;
        scoreList.map((item, index) => {
            if (index <= selectIndex) {
                scoreList[index]['class'] = 'stage-1';
                sumScore++;
            } else {
                scoreList[index]['class'] = 'stage-0';
            }
        });
        this.setState({
            scoreList: [...scoreList],
        })
        this.props.getScore(sumScore);

    }

    render() {
        let { scoreList } = this.state;
        return (
            <div className="scoreList">
                {
                    scoreList.map((item, index) => {
                        return (
                            <span 
                                key={ 'score'+index } 
                                className={ 'score '+item.class } onClick={this.selectScore.bind(this, index)}></span>
                        )
                    })
                }
            </div>
        )
    }
}

export default Score;