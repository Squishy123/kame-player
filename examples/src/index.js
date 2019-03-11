import React from 'react';
import {render} from 'react-dom';

import KamePlayer from '../../src/kameplayer/kameplayer';

import './main.scss';

const App = () => (
    <div>
        <div className="main">
        <h1>KamePlayer Demo</h1>
        <KamePlayer sources={
            [{src: 'https://storage.googleapis.com/coverr-main/mp4/Espresso-Lungo.mp4', type: 'video/mp4'}]
        }/>
        </div>
    </div>
);

render(<App/>, document.getElementById('root'));