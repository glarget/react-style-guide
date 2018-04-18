import React from 'react';
import { storiesOf } from '@storybook/react';
import Typography from '../components/Typography';

storiesOf('Typography', module)
    .add('Font family chart', () => (
        <ul className="color-list">
            <li>
                <Typography family={{'fontFamily': 'Arial'}} className='border-grey common-style' familyName='Arial'></Typography>
            </li>
            <li>
                <Typography family={{'fontFamily': 'Verdana'}} className='border-grey common-style' familyName='Verdana'></Typography>
            </li>
            <li>
                <Typography family={{'fontFamily': 'Helvetica'}} className='border-grey common-style' familyName='Helvetica'></Typography>
            </li>
            <li>
                <Typography family={{'fontFamily': 'Times N Roman'}} className='border-grey common-style' familyName='Times N Roman'></Typography>
            </li>
            <li>
                <Typography family={{'fontFamily': 'Palatino Linotype'}} className='border-grey common-style' familyName='Palatino Lino'></Typography>
            </li>
            <li>
                <Typography family={{'fontFamily': 'Comic Sans MS'}} className='border-grey common-style' familyName='Comic Sans MS'></Typography>
            </li>

        </ul>
    ));