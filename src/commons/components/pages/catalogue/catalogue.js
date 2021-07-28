import React, { Component } from "react";
import CatalogContentItem from "./catalog-content-item/catalog-content-item";

export default class Catalogue extends Component {
  render() {
    return (
    <>
      <section> This is Catalogue section</section>
      <CatalogContentItem/>
    </>
    )
  }
}