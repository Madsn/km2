import React from 'react';

Bookings = React.createClass({
  render() {
    return (
      <div className="page-about">
        <h1>{this.props.app_data.title}</h1>
        <p>React about page!</p>
      </div>
    );
  }
});