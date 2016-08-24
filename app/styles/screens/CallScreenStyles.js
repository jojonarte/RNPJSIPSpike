import {StyleSheet} from 'react-native'


const styles = StyleSheet.create({
    container: {flex: 1, alignItems: 'stretch', padding: 20},
    remoteUri: {fontSize: 21, color: "#424242", fontWeight: 'bold'},
    enableKeyboard: {width: 84, backgroundColor: "#CCC", alignItems: 'center'},
    buttonCircle: { width: 28, height: 28, backgroundColor: "#d1d1d1", borderRadius: 28 },
    callControls: {marginTop: 20, flexDirection: 'row', justifyContent: 'space-between'},
    callButtons: {width: 84, backgroundColor: "#CCC", alignItems: 'center'},
    subContainer: {flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: 20, marginBottom: 20},
    circleImage: {borderRadius:96, width: 96, height: 96, backgroundColor: "#cacaca"},
    callerInfo: {marginTop: 20, alignItems: 'center'},
});


export default styles
