import React from 'react';
import './App.css';
import {Products} from './components/Products/Products';
import {UserDeposit} from "./components/UserDeposit/UserDeposit";
import {MachineDeposit} from './components/MachineDeposit';
import {DepositedAmount} from "./components/DepositedAmount";


function App() {
    return (
        <div className="App">
            <div className="wrapper">
                <Products/>
                <section className={'userBlock'}>
                    <UserDeposit/>
                    <MachineDeposit/>
                    {/*<Title text={'Внесенная сумма'} />*/}
                    <DepositedAmount/>
                </section>
            </div>
        </div>
    );
}

export default App;
