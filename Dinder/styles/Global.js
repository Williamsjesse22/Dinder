    import { Dimensions, StyleSheet } from "react-native";
    // COLORS
    const primaryColor = '#F33534';
    const secondaryColor = '#f99a99';

    // FONTS AND SIZES
    const fontFamily = 'VinaSans_400Regular';
    const smallerHeadings = 22;
    const defaultFontSize = 28;
    const subheadingFontSize = 32;
    const subTitle = 50;
    const title = 60;
    const headingFontSize = 80;


    const GlobalStyles = StyleSheet.create({
    mainNecessary: {
        fontFamily: fontFamily,
        flex: 1,
    },
    textbox: {
        height: Dimensions.get('window').width * 0.15,
        width: Dimensions.get('window').width * 0.75,
        borderRadius: 11,
        borderWidth: 3,
        borderColor: '#fff',
        backgroundColor: secondaryColor,
        fontSize: defaultFontSize,
    },

    ColorlessTextbox: {
        height: Dimensions.get('window').width * 0.15,
        width: Dimensions.get('window').width * 0.75,
        borderRadius: 11,
        borderWidth: 3,
        borderColor: '#272727',
        backgroundColor: 'transparent',
        fontSize: defaultFontSize
    },

    ColorlessCheckbox: {
        height: Dimensions.get('window').width * 0.075,
		width: Dimensions.get('window').width * 0.075,
		borderRadius: 7.5,
		borderWidth: 3,
		borderColor: '#272727',
    },

    backbutton: {
        marginLeft: Dimensions.get('window').width * 0.1
    },

    header: {
        fontSize: headingFontSize,
    },

    subHeading: {
        fontSize: subheadingFontSize,
    },

    subText: {
        fontSize: defaultFontSize,
    },

    title: {
        fontSize: title,
    },

    smallerHeadings: {
        fontSize: smallerHeadings
    },

    subTitle: {
        fontSize: subTitle
    }

    });

    export default GlobalStyles;