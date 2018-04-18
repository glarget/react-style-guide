import { configure } from '@storybook/react';

function loadStories() {
    require('../stories/button.js');
    require('../stories/colors.js');
    require('../stories/documentation.js');
    require('../stories/typography.js');
}

configure(loadStories, module);