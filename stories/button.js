import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import {
    withKnobs,
    withKnobsOptions,
    text,
    number,
    boolean,
    color,
    select,
    selectV2,
    array,
    date,
    button,
    object,
    files, } from '@storybook/addon-knobs';

import { action } from '@storybook/addon-actions';
import Button from '../components/Button';
import {wInfo} from '../utils/wInfo';
import "../src/UIBase/sass/uibase.scss";

const styles = {
    textAlign: 'center',
    margin: '80px 0 0 0',
    fontWeight: 'bold'
};

const CenterDecorator = (storyFn) => (
    <div style={styles}>
        { storyFn() }
    </div>
);

// ================== BUTTONS ==================

const stories = storiesOf('Buttons', module);

stories.addDecorator(withKnobs);
addDecorator(CenterDecorator);

const GROUP_IDS = {
    DISPLAY: 'DISPLAY',
    GENERAL: 'GENERAL',
    FAVORITES: 'FAVORITES',
};

stories.add('SMALL', () => {
    return (
        <Button className="button button--small" label={text('label', 'Small')}></Button>
    );
})
.add('NORMAL', () => (
    <Button className="button" onClick={action('clicked')} label={text('label', 'Normal')}></Button>
))
.add('SECONDAIRE', () => (
    <Button className="button buttonSecondary" onClick={action('clicked')} label={text('label', 'Secondaire')}></Button>
))

.add('TERTIAIRE',
    wInfo(`Bouton nouveau 3`)(() =>
    <Button className="button buttonTertiary" onClick={action('clicked')} label={text('label', 'Tertiaire')}></Button>
))

.add('FULL', () => (
    <Button className="button button--full" onClick={action('clicked')} label={text('label', 'Full')}></Button>
))

.add('DELETE', () => {
    const backgroundColor = color('background', '#D24A53', GROUP_IDS.DISPLAY);
    const otherStyles = object('Styles', {
        'fontWeight': 'bold',
        'margin': '50px 0 0 20px',
    }, GROUP_IDS.DISPLAY);

    const style = { backgroundColor, ...otherStyles };

    return (
        <Button styleTo={style} className="button buttonDelete" onClick={action('clicked')} label={text('label', 'Delete')}></Button>
    );
})

.add('CLOSE INFO',
    wInfo(`
    bouton de fermeture pour les modales
`)(() =>
        <Button className="button button-close u-mAuto" onClick={action('clicked')}></Button>
    )
);
