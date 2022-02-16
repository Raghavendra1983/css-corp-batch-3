import AuthStore from './AuthStore';
import ErrorStore from './ErrorStore';
import LoadingStore from './LoadingStore';
import AuthService from '../services/AuthService';
import { productStore } from './productStore';

export default class RootStore {
  authStore: AuthStore;
  errorStore: ErrorStore;
  loadingStore: LoadingStore;
  productStore: productStore;

  constructor() {
    this.authStore = new AuthStore(this, new AuthService());
    this.errorStore = new ErrorStore(this);
    this.loadingStore = new LoadingStore(this);
    this.productStore = new productStore(this);
  }
}
