import React, { Component } from 'react';
import CompletedCard from './completedCard';

export default class Completed extends Component {


    render() {
        return (
            <div>
                {this.props.completed.map(comp => {
                    const millisecs = parseInt(comp.end, this.radix);
                    const date = new Date(millisecs)
                    const dateString = date.toDateString()
                        return (<CompletedCard
                        key={comp.id}
                        id={comp.id}
                        title={comp.library.title}
                        finished={dateString}
                        />)
                })}
            </div>
        )

    }
}