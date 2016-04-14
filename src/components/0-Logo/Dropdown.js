import styles from './Dropdown.css';

import React, { Component } from 'react';

export default class DropdownMenu extends Component {

  render() {
    return (
      <div>
        <h2>Hoverable Dropdown</h2>
        <div className={styles.dropdown}>
          <span>Mouse over me</span>
            <div className={styles.dropdown_content}>
              <p>Hello World!</p>
            </div>
        </div>
      </div>
    );

    //         <div className="styles.dropdown">
    //           <span>Mouse over me</span>

    //         </div>);
  }

};
