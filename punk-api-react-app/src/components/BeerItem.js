import React, { Component } from 'react';

class BeerItem extends Component {

    state = {
        liked: false
    };

    LikePost = () => this.setState({ liked: !this.state.liked})
        render() {
            return (
                <div style={{ border: '1px solid black', padding: '50px'}}>
                    <p>{this.props.info.name}</p>
                    <span style={{ color: 'red' }}>{this.props.info.brewers_tips}</span>
                    <button>like</button>
             </div>
            )
         }
    
};

export default BeerItem