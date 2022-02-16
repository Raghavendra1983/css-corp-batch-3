import Product from '@components/Product';
import { useRootStore } from 'context/rootStoreContext';
import { observer } from 'mobx-react';
import React, { memo, useEffect } from 'react';
import { LoadRequestActionType } from 'reducers/actionTypes';
import { LoadingType } from 'types/customTypes';
import { ProductType } from 'types/productsTypes';

/*
type Props = {
  products: ProductType[];
  loadProducts: () => void;
  loadCart: () => void;
  loading: any;
};*/

const Home = () => {
  const { productStore, loadingStore } = useRootStore();
  let products: ProductType[] | void = [];

  useEffect(() => {
    productStore.getProducts().then(result => {
      console.log(result);
      products = result
    });
  }, []);

  return (
    <div className="relative">

      {products?.map((product) => {
        return <Product key={product.id} {...product} />;
      })}
    </div>
  );
};

export default observer(Home);
