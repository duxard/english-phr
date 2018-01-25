import React from 'react';

import MainTable from './MainTable';
import Navigation from './Navigation';

export default class MainComponent extends React.Component {
    render(){
        return(
            <div>
                <header>
                    <nav>
                        <Navigation />
                    </nav>
                </header>
                <main>
                    <MainTable />
                </main>
                <footer></footer>
            </div>
        );
    }
}
