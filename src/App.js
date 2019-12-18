import React from 'react';

import Routes from '../src/components/Routes';
import PageTitle from '../src/components/PageTitle';
import Chart from '../src/components/Chart';
import PageVideoList from '../src/components/PageVideoList';
import './App.css';

function App() {
    return (
        <div className="App">
            <Routes />
            <PageTitle />
            <Chart />
            <PageVideoList />
        </div>
    );
}

export default App;
