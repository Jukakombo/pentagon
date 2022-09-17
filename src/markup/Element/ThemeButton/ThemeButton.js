import React, { Component } from 'react';

export default class ThemeButton extends Component {
  render() {
    return (
      <>
        <a href="/contact" className="bt-support-now theme-btn">
          <i className="ti-headphone-alt"></i>
          <span>Support</span>
        </a>
      </>
    );
  }
}
