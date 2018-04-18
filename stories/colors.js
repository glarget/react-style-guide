import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import Colors from '../components/Colors';
import { withNotes } from '@storybook/addon-notes';

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
import "../src/UIBase/sass/uibase.scss";


const colors = storiesOf('Colors', module);

colors.addDecorator(withKnobs);

const GROUP_IDS = {
    DISPLAY: 'DISPLAY',
    GENERAL: 'GENERAL',
    FAVORITES: 'FAVORITES'
};



colors.add('HBM', withNotes("[HBM] [WORK IN PROGRESS] Couleurs générées")(() => {
    return (
        <div>
            <ul className="color-list">
                <li>
                    <Colors bgColor={{'backgroundColor': '#FBDF30'}} className='common-style' hexa="#FBDF30"></Colors>
                </li>
                <li>
                    <Colors bgColor={{'backgroundColor': '#56C2E5'}} className='common-style' hexa="#56C2E5"></Colors>
                </li>
                <li>
                    <Colors bgColor={{'backgroundColor': '#606060'}} className='common-style' hexa="#606060"></Colors>
                </li>
                <li>
                    <Colors bgColor={{'backgroundColor': '#616565'}} className='common-style' hexa="#616565"></Colors>
                </li>
                <li>
                    <Colors bgColor={{'backgroundColor': '#DFF0D8'}} className='common-style' hexa="#DFF0D8"></Colors>
                </li>
                <li>
                    <Colors bgColor={{'backgroundColor': '#EDEDED'}} className='common-style' hexa="#EDEDED"></Colors>
                </li>
            </ul>

        </div>

    );
}));

colors.add('Grey', () => {
    return (
        <div>
            <ul className="color-list">
                <li>
                    <Colors reference="Off Black" bgColor={{'backgroundColor': '#222'}} className='common-style' hexa="#222"></Colors>
                </li>
                <li>
                    <Colors reference="Dark grey"  bgColor={{'backgroundColor': '#808080'}} className='common-style' hexa="#808080"></Colors>
                </li>
                <li>
                    <Colors reference="Medium grey" bgColor={{'backgroundColor': '#b6b6b6'}} className='common-style' hexa="#b6b6b6"></Colors>
                </li>
                <li>
                    <Colors reference="Grey" bgColor={{'backgroundColor': '#d0d0d0 '}} className='common-style' hexa="#d0d0d0"></Colors>
                </li>
                <li>
                    <Colors reference="Light grey" bgColor={{'backgroundColor': '#eee'}} className='common-style' hexa="#eee"></Colors>
                </li>
                <li>
                    <Colors reference="Off white" bgColor={{'backgroundColor': '#fafafa'}} className='common-style' hexa="#fafafa"></Colors>
                </li>
                <li>
                    <Colors reference="White" bgColor={{'backgroundColor': '#ffffff'}} className='common-style' hexa="#ffffff"></Colors>
                </li>
            </ul>
        </div>

    );
});

colors.add('Link Color', () => {
    return (
        <div>
            <ul className="color-list">
                <li>
                    <Colors reference="Standard link" bgColor={{'backgroundColor': '#0000ff'}} className='common-style' hexa="#0000ff"></Colors>
                </li>
                <li>
                    <Colors reference="Visited link" bgColor={{'backgroundColor': '#800080'}} className='common-style' hexa="#800080"></Colors>
                </li>
            </ul>

        </div>
    );
});

colors.add('Brand Color', () => {
    return (
        <div>
            <ul className="color-list">
                <li>
                    <Colors reference="Accent default" bgColor={{'backgroundColor': '#407AB1'}} className='common-style' hexa="#407AB1"></Colors>
                </li>
                <li>
                    <Colors reference="Accent active" bgColor={{'backgroundColor': '#333366'}} className='common-style' hexa="#333366"></Colors>
                </li>
                <li>
                    <Colors reference="Accent hover" bgColor={{'backgroundColor': '#eeeeee'}} className='common-style' hexa="#eeeeee"></Colors>
                </li>
                <li>
                    <Colors reference="Accent alt default" bgColor={{'backgroundColor': '#fecd2f'}} className='common-style' hexa="#fecd2f"></Colors>
                </li>
                <li>
                    <Colors reference="Accent alt active" bgColor={{'backgroundColor': '#ffb000'}} className='common-style' hexa="#ffb000"></Colors>
                </li>
            </ul>
        </div>

    );
});