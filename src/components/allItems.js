import React, { Component } from 'react';
import './components.css';

class AllItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allItems: [
        {title: 'Zuuflax',
          value: '4.00',
          userName: 'Anton9000',
          image: 'https://img.cryptokitties.co/0x06012c8cf97bead5deae237070f9587f8e7a266d/1284785.svg',
          dates: 'Nov. 8 - Dec. 31',
        },
        {title: 'GeooThermix',
          value: '25.00',
          userName: 'Anton9000',
          image: 'https://img.cryptokitties.co/0x06012c8cf97bead5deae237070f9587f8e7a266d/1270022.png',
          dates: 'Nov. 20 - Dec. 29',
        },
        {title: 'TwinOfTree',
          value: '6.00',
          userName: 'Anton9000',
          image: 'https://img.cryptokitties.co/0x06012c8cf97bead5deae237070f9587f8e7a266d/1284785.svg',
          dates: 'Nov. 29 - Dec. 26',
        },
        {title: 'FryingFruit',
          value: '8.00',
          userName: 'Anton9000,471',
          image: 'https://img.cryptokitties.co/0x06012c8cf97bead5deae237070f9587f8e7a266d/1270022.png',
          dates: 'Dec. 01 - Dec. 31',
        }
      ],
      numExpanded: 1,
      open: false,
    }
  }

  componentDidMount() {
    //GET all items from contract or DB and set to state
  }

  toggleModal = (num) => {
    this.setState({ 
      numExpanded: num,
      open: true,
     });
  }

  /*
    TODO:
      1. Break the mapping down into seperate component when real data is available
      2. Remove the hacky <br/> tags at the bottom
  */

  render() {
    return (
      <div>
        <div className='section'>
          <div className='container'>
            <div className='columns'>
              {this.state.allItems.map((item, index) => {
                return (
                  <a className="column is-3 has-text-centered" onClick={() => this.toggleModal(index)} >
                    <div className="card trip-card card-height is-shadowless">
                      <div className="card-image zoom-hover">
                        <figure className="image is-128x128" style={{marginLeft: '30%'}}>
                          <img src={this.state.allItems[index].image} alt="Placeholder image"/>
                        </figure>
                      </div>
                      <div className="card-content " style={{paddingLeft: 0}}>
                        <div className="content">
                          <div id="new-title" style={{fontWeight: 800, fontSize: 20}}>{this.state.allItems[index].title}</div>
                          <span className="subtitle is-6" style={{fontWeight: 600}}>
                            <i className="fas fa-dollar-sign" aria-hidden="true" style={{paddingRight: '5px', color: '#22d0b2'}}></i>
                            {this.state.allItems[index].value}
                          </span>
                          <span className="subtitle is-6" style={{paddingLeft: '15px'}}>- {this.state.allItems[index].userName}</span>
                          <br />
                          <div className="subtitle is-6" id="hash-description">{this.state.allItems[index].dates}</div>
                        </div>
                      </div>
                    </div>
                    <a className="button button-small button-blue">View Item</a>
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        <br/>
        <br/>
        <br/>


      </div>
    );
  }
}

export default AllItems;
