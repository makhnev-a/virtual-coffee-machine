import React from 'react';
import './App.css';
import {Products} from './components/Products/Products';
import {UserDeposit} from "./components/UserDeposit";
import {MachineDeposit} from './components/MachineDeposit';
import {DepositedAmount} from "./components/DepositedAmount";


function App() {
    return (
        <div className="App">
            <Products/>
            <UserDeposit/>
            <MachineDeposit/>
            <DepositedAmount/>
        </div>
    );
}

export default App;
