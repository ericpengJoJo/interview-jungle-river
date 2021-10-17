import React, {useContext} from "react";
import { ProductContext } from "../../context/ProductContext";
import { ReactComponent as GridIcon} from './icon-grid.svg';
import { ReactComponent as ListIcon} from './icon-list.svg';
import { ListContainer } from "../ListContainer";
import loadGif from './loading.gif'

export const ProductsPage = () => {

  const {toggle, setToggle, loading} = useContext(ProductContext)

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
            data-testid="list-icon"
            onClick={e=> !toggle?setToggle(true):null}
            />
          <GridIcon 
            className="icon" 
            title="grid"
            data-testid="grid-icon"
            onClick={e=> toggle?setToggle(false):null}
            />
        </div>
      </div>
      {
        loading?
        <ListContainer />
        :
        <div className="loading">
          <img src={loadGif} alt="loading..." />
        </div>
      }
      
    </div>
  );
};
