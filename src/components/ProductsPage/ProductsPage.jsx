import React from "react";
import { ReactComponent as GridIcon} from './icon-grid.svg';
import { ReactComponent as ListIcon} from './icon-list.svg';
// import "./ProductsPage.css";

export const ProductsPage = () => {
  return (
    <div className="container">
      <div data-testid="product-page-heading" className="page-heading">
        Jungle River
      </div>
      <div className="nav">
        <div className="page-sub-heading">Products</div>
        <div className="icons">
          <ListIcon className="icon" title="list" />
          <GridIcon className="icon" title="grid" />
        </div>
      </div>
      
    </div>
  );
};
