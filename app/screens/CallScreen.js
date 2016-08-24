import React, { Component, PropTypes } from 'react';
import {
    TouchableHighlight,
    Text,
    TextInput,
    Image,
    View
} from 'react-native'
import {connect} from 'react-redux'
import ButtonStyles from '../styles/common/ButtonStyles'
import s from '../styles/screens/HomeScreenStyles';
import {
    hangupCall,
    muteCall,
    unmuteCall,
    holdCall,
    unholdCall,
    enableSpeaker,
    disableSpeaker,
    enableVideo,
    disableVideo,
    makeTransfer,
    sendDTMF
} from '../reducers/calls'

class CallScreen extends Component {

    constructor(props) {
        super(props);

        this.state = {
            duration: props.call.getFormattedDuration()
        }
    }

    componentDidMount() {
        this.timer = setInterval(this.tick.bind(this), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    tick() {
        this.setState({
            duration: this.props.call.getFormattedDuration()
        });
    }

    render() {
        const {dispatch, call} = this.props;


        return (
            <View style={s.container}>
                <View style={s.subContainer}>
                    <View style={s.circleImage} />
                      <View style={s.callerInfo}>
                          <Text style={s.remoteUri}>{call.get('remoteUri')}</Text>
                          <Text ref="durationText" style={{fontSize: 16, color: "#666", marginTop: 5}}>{this.state.duration}</Text>
                          <Text style={{fontSize: 12, color: "#999", marginTop: 2}}>{call.get('state')}</Text>
                      </View>
                    </View>

                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <TouchableHighlight onPress={() => dispatch(muteCall(call))}>
                        <View style={s.callButtons}>
                            <View style={s.buttonCircle} />
                            <Text>Mute</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => dispatch(enableSpeaker(call))}>
                        <View style={s.callButtons}>
                            <View style={s.buttonCircle} />
                            <Text>Speaker</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => dispatch(enableVideo(call))}>
                        <View style={s.callButtons}>
                            <View style={s.buttonCircle} />
                            <Text>Video</Text>
                        </View>
                    </TouchableHighlight>
                </View>

                <View style={s.callButtons}>
                    <TouchableHighlight>
                        <View style={transfer}>
                            <View style={s.buttonCircle} />
                            <Text>Transfer</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => holdCall(call)}>
                        <View style={s.callButtons}>
                            <View style={s.buttonCircle} />
                            <Text>Hold</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight>
                        <View style={s.callButtons}>
                            <View style={s.buttonCircle} />
                            <Text>Keyboard</Text>
                        </View>
                    </TouchableHighlight>
                </View>

                <TouchableHighlight style={{marginTop: 40}} onPress={() => dispatch(hangupCall(call))}>
                    <View style={ButtonStyles.actionButtonWithPadding}>
                        <Text pointerEvents="none" style={ButtonStyles.text}>
                            Hangup
                        </Text>
                    </View>
                </TouchableHighlight>
            </View>
        )
    }
}

CallScreen.propTypes = {
    dispatch: PropTypes.func,
    call: PropTypes.object
};


function mapStateToProps(state) {
    const {current} = state.navigation;
    return {
        call: current.call
    }
}

export default connect(mapStateToProps)(CallScreen)
