import React, { Component } from 'react';
import CounterView from './CounterView';

interface State {
  counter: number;
}

export default class Counter extends Component<{}, State> {
  public state = {
    counter: 0,
  };

  public render() {
    const { counter } = this.state;
    return (
      <CounterView
        counter={counter}
        onDecrement={this.handleDecrement}
        onIncrement={this.handleIncrement}
      />
    );
  }

  private handleDecrement = () => {
    this.setState(({ counter }) => ({ counter: counter - 1 }));
  };

  private handleIncrement = () => {
    this.setState(({ counter }) => ({ counter: counter + 1 }));
  };
}