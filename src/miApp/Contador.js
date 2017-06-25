import React, { Component } from 'react';

class Contador extends Component{
  constructor(props){
    super(props);
    const localData = `countOf${props.match.params.item}`;
    let localCount = localStorage.getItem(localData);
    localCount = parseInt(localCount);
    if(isNaN(localCount))
      localCount = 0;
    this.state = {
      count: localCount,
      item: props.match.params.item,
      storageKey: localData
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
    this.setState((prevState) => ({
      count: prevState.count + 1
    }));
    localStorage.setItem(this.state.storageKey, this.state.count);
  }
  render(){
    return (
      <div>
        <h1>Vamo a contar {this.state.item}</h1>
        <p>Hemos contado {this.state.count} {this.state.item}</p>
        <button name='contador' onClick={this.handleClick}>Contemos!</button>
      </div>
    );
  }
}

export default Contador;