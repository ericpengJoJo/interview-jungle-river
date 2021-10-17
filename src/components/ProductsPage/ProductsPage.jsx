import React, {useContext} from "react";
import { ProductContext } from "../../context/ProductContext";
import { ReactComponent as GridIcon} from './icon-grid.svg';
import { ReactComponent as ListIcon} from './icon-list.svg';
// import "./ProductsPage.css";

export const ProductsPage = () => {

  const {toggle, setToggle} = useContext(ProductContext)

  return (
    <div className="container">
      <div data-testid="product-page-heading" className="page-heading">
        Jungle River
      </div>
      <div className="nav">
        <div className="page-sub-heading">Products</div>
        <div className="icons">
          <ListIcon 
            className="icon" 
            title="list"
            onClick={e=> !toggle?setToggle(true):null}
            />
          <GridIcon 
            className="icon" 
            title="grid"
            onClick={e=> toggle?setToggle(false):null}
            />
        </div>
      </div>
      
    </div>
  );
};
