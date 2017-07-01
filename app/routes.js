// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business
import { getAsyncInjectors } from 'utils/asyncInjectors';
import App from 'containers/App';

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};

function createChildRoutes(store) {
  // create reusable async injectors using getAsyncInjectors factory
  const { injectReducer, injectSagas } = getAsyncInjectors(store); // eslint-disable-line no-unused-vars
  let previousPath = false;
  return [
    {
      path: '/',
      name: 'home',
      getComponent(nextState, cb) {
        if (nextState.location.pathname === previousPath) {
          return;
        }

        const importModules = Promise.all([
          import('containers/HomePage/reducer'),
          import('containers/HomePage/sagas'),
          import('containers/HomePage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('home', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
        previousPath = nextState.location.pathname;
      },
    }, {
      path: '/product/:sku',
      name: 'productdetail',
      getComponent(nextState, cb) {
        if (nextState.location.pathname === previousPath) {
          return;
        }

        const importModules = Promise.all([
          import('containers/ProductDetailPage/reducer'),
          import('containers/ProductDetailPage/sagas'),
          import('containers/ProductDetailPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('productdetail', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
        previousPath = nextState.location.pathname;
      },
    }, {
      path: '*',
      getComponent(nextState, cb) {
        import('containers/NotFoundPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
  ];
}

// Set up the router, wrapping all Routes in the App component
export default function createRootRoute(store) {
  return {
    component: App,
    childRoutes: createChildRoutes(store),
  };
}
