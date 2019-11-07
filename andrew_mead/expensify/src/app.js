import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
// import './styles/styles.scss';
// import 'normalize.css/normalize.css';


const store = configureStore();

store.dispatch(addExpense({ description: 'water bill', amount: 125, createdAt: 1000 }))
store.dispatch(addExpense({ description: 'gas bill', amount: 2000, createdAt: 0 }))
store.dispatch(setTextFilter('bill'))

const state = store.getState()
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
// console.log('visible expenses', visibleExpenses);


// console.log('state', (store.getState()))

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
ReactDOM.render(jsx, document.getElementById('app'));

