import { AppDispatch, RootState } from 'types/commonTypes';
import { connect } from 'react-redux';
import Home from './Home';
import {
  LoadCartRequestAction,
  LoadProductRequestAction,
} from 'reducers/loadingReducer';
import { useRootStore } from 'context/rootStoreContext';

/*
const mapStateToProps = (store: RootState) => {
  const { productStore } = useRootStore();
  return {
    products: productStore.getProducts(),
    loading: store.loading,
  };
};

const mapDispatchToProps = (dispatch: AppDispatch) => {
  return {
    loadProducts: () => dispatch(LoadProductRequestAction()),
    loadCart: () => dispatch(LoadCartRequestAction()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);*/
export default Home;
