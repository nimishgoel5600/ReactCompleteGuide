import React, { Component } from 'react';

import Person from './Person/Person';

class Persons extends Component {

  constructor(props) {
    super(props);
    console.log('[Persons.js] Inside Constructor', props);
    this.lastPersonRef = React.createRef();
  }

  componentWillMount() {
    console.log('[Persons.js] Inside componentWillMount');
  }

  componentDidMount() {
    console.log('[Persons.js] Inside componentDidMount');
  }

  componentWillReceiveProps(nextProps) {
    console.log('[UPDATE Persons.js] Inside componentWillReceiveProps', nextProps);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[UPDATE Persons.js] Inside shouldComponentUpdate', nextProps, nextState);
    // return nextProps.persons !== this.props.persons;
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('[UPDATE Persons.js] Inside componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate() {
    console.log('[Persons.js] Inside componentDidUpdate');
  }

  render() {

    console.log('[Persons.js] Inside render');

    return this.props.persons.map((person, index) => {
      return <Person
        key={person.id}
        name={person.name} 
        age={person.age}
        delete={ () => this.props.personDeleted(index) }
        ref={this.lastPersonRef}
        changed={ (event) => this.props.nameChanged(event, person.id) } />
    });
  }
  
};

export default Persons;
