import styles from './App.css';

import React, { Component } from 'react';

import Logo from './0-Logo/Logo';
import Dropdown from './0-Logo/Dropdown';
import ScopedSelectorsDemo from './1-ScopedSelectors/ScopedSelectorsDemo';
import GlobalSelectorsDemo1 from './2-GlobalSelectors/GlobalSelectorsDemo';
import ClassCompositionDemo from './3-ClassComposition/ClassCompositionDemo';
import CompositionOverridesDemo from './4-CompositionOverrides/CompositionOverridesDemo';
import ScopedAnimationsDemo from './5-ScopedAnimations/ScopedAnimationsDemo';
import GriddleDemo from './Griddle/GriddleDemo';
// import AutoFillForm from './Griddle/reactAutofillDemo';
import EmployeeAutoComplete from './Griddle/employeeSearch'; //<GriddleDemo />

export default class App extends Component {

  render() {
    return (
      <div className={styles.app}>
        <Logo />
        <Dropdown />


        <hr className={styles.hr} />
        <EmployeeAutoComplete />
      </div>
    );
  }

};
