import React from 'react';
import { connect } from 'react-redux';
import { createPerson, handleName, handleAge, handleCity } from './action';
import personActions from './action';
import {bindActionCreators} from 'redux';

const CreatePersonForm = (props) => {
  const submitForm = (event) => {
    event.preventDefault();
    props.createPerson(props.name, props.favoriteCity, props.age)
  };
  return (
    <form onSubmit= {submitForm}>
      <input onChange = {(event) => {props.handleName(event.target.value)}} type = 'text' placeholder = 'Name'/>
      <input onChange = {(event) => { props.handleCity(event.target.value)}} type = 'text' placeholder = 'Favorite City'/>
      <input onChange = {(event) => { props.handleAge(event.target.value)}} type = 'text' placeholder = 'Age'/>
      <input type = 'submit' placeholder = 'submit'/>
    </form>
  );
};


const mapStateToProps = state => ({
  name: state.name,
  favoriteCity: state.favoriteCity,
  age: state.age,
});

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({ handleName, handleCity, handleAge, createPerson }, dispatch)
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreatePersonForm)