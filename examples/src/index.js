import React from 'react';
import {render} from 'react-dom';

import KamePlayer from '../../src';

const App = () => (
    <KamePlayer/>
);

render(<App/>, document.getElementById('root'));