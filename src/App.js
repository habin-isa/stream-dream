import React from 'react';

import PageTitle from '../src/components/PageTitle';
// import Chart from '../src/components/Chart';
import PageVideoList from '../src/components/PageVideoList';
import './App.css';

function App() {
    return (
        <div className="App">
            <PageTitle />
            {/* <Chart /> */}
            <PageVideoList />
        </div>
    );
}

export default App;
