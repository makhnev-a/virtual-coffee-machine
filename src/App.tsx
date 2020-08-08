import React from 'react';
import './App.css';
import {Product} from "./components/Product";
import {UserDeposit} from "./components/UserDeposit";
import {MachineDeposit} from "./components/MachineDeposit";
import {DepositedAmount} from "./components/DepositedAmount";
import {Products} from "./components/Products";

function App() {
    return (
        <div className="App">
            <Products />
            <Product/>
            <UserDeposit />
            <MachineDeposit />
            <DepositedAmount />
        </div>
    );
}

export default App;
