import React, { Component } from 'react';
import { Link, withRouter } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';
import CreatePersonForm from './createPersonForm';

class DisplayPerson extends Component {
  constructor(props) {
    super(props);
    this.state = {
      updating: false,
      name: props.name,
      age: props.age,
      favoriteCity: props.favoriteCity,
    }
    this.update = this.update.bind(this);
    this.updateInfo = this.updateInfo.bind(this);
    this.delete = this.delete.bind(this);
  }
  componentWillReceiveProps({ name, age, favoriteCity }) {
    this.setState({ name, age, favoriteCity })
  }

  update() {
    this.setState( prevState => ({
      updating: !prevState.updating,
    }));
  }
  updateInfo({name, age, favoriteCity}) {
    this.setState(prevState => ({
      name,
      age,
      favoriteCity,
      updating: !prevState.updating,
    }))
  }
  delete() {
    const id = this.props.params.personId || this.props.id;
    axios.delete(`/api/person/${id}`)
    .then(() => {
      this.props.router.push('/')
    })
    .catch((error) => {
      console.log(error);
    });
  }

  render () {
    const { id, listPerson } = this.props;
    const { updating, name, age, favoriteCity, } = this.state;
    return (
      <li className={listPerson ? 'list_person' : 'show_person'}>
        { updating
        ? <CreatePersonForm id={id} update updateParent={this.updateInfo} />
        : (
          <div>
            <Link to= {`/getPersonById/${id}`}>{name}</Link>
            <p>{age}</p>
            <p>{favoriteCity}</p>
          </div>
        )}
        <button onClick={this.update}>{updating ? 'Cancel' : 'Update'}</button>
        <button onClick={this.delete}>Delete</button>
      </li>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  name: ownProps.name || state.name,
  age: ownProps.age || state.age,
  favoriteCity: ownProps.favoriteCity || state.favoriteCity,
});

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({

  }, dispatch)
);

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(DisplayPerson));
