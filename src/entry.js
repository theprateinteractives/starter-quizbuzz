import preact from 'preact';
import Personality from './Personality';
import Checklist from './Checklist';

import './style.css';

preact.render(
    (
        <div>
            <h1>Personality Quiz: What Peep Show character are you?</h1>
            <Personality />

            <h1>Checklist Quiz: Are you a student?</h1>
            <Checklist />
        </div>
    ), interactiveManager.init()
);



