/**
 * Created by gomes on 16/10/16.
 */
// theme settings
import {
    blueGrey500, blueGrey700,
    pinkA200,
    grey100, grey300, grey400, grey500,
    white, darkBlack, fullBlack,
} from 'material-ui/styles/colors';
import {fade} from 'material-ui/utils/colorManipulator';
import spacing from 'material-ui/styles/spacing';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

export const theme = getMuiTheme({
    spacing: spacing,
    fontFamily: 'Roboto, sans-serif',
    palette: {
        primary1Color: blueGrey500,
        primary2Color: blueGrey700,
        primary3Color: grey400,
        accent1Color: pinkA200,
        accent2Color: grey100,
        accent3Color: grey500,
        textColor: darkBlack,
        alternateTextColor: white,
        canvasColor: white,
        borderColor: grey300,
        disabledColor: fade(darkBlack, 0.3),
        pickerHeaderColor: blueGrey500,
        clockCircleColor: fade(darkBlack, 0.07),
        shadowColor: fullBlack,
    },
});

import {initializeApp} from 'firebase';

const FIREBASE_CONFIG = {
    apiKey: "AIzaSyDLDSbImu46aQQsxs7M8YYB6UsseT3Z2dU",
    authDomain: "backend-example.firebaseapp.com",
    databaseURL: "https://backend-example.firebaseio.com",
    storageBucket: "backend-example.appspot.com",
    messagingSenderId: "767591657518"
};
export const Firebase = initializeApp(FIREBASE_CONFIG);