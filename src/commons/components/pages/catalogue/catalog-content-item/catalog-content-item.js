import React, { Component } from 'react';
// CSS
import './catalog-content-item.css';

export default class CatalogContentItem extends Component {
  render() {
    const { listItem, img, musicName, artist, price } = this.props;
    return (

      <li key={ listItem }>
        <img src="" alt="" />
        <div>{ musicName }</div>
        <div>{ artist }</div>
        <div>{ price }</div>
        <a href="#">basket</a>
        <a href="#">buy</a>
        <a href="#">info</a>
      </li>

    )
  }
}
