import React from 'react';
import { storiesOf } from '@storybook/react';

const imageAlt = 'Color chart';

storiesOf('Documentation', module)
    .add('Grey color chart', () => (
        <img src="color-chart.jpg" alt={imageAlt} />
    ));