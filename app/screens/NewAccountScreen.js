import React, { Component, PropTypes} from 'react';
import {
    TouchableHighlight,
    Text,
    TextInput,
    Image,
    View
} from 'react-native'
import {connect} from 'react-redux'
import * as Navigation from '../reducers/navigation'
import ButtonStyles from '../styles/common/ButtonStyles'
import AccountConfiguration from '../components/AccountConfiguration'
import {createAccount} from '../reducers/accounts'

class NewAccountScreen extends Component {

    constructor(props) {
        super(props);

        this.state = {
            configuration: {
                username: '4212',
                password: 'f5eacba564a3d90129e7d5f284d8688d',
                host: '10.2.0.11',
                realm: '10.2.0.11'
            },
            configurationValid: true
        }
    }

    handleConfigurationChange(config) {
        var valid = true;

        this.setState({
            configuration: config,
            configurationValid: valid
        })
    }

    handleSubmit() {
        if (!this.state.configurationValid) {
            return;
        }

        this.props.dispatch(createAccount(this.state.configuration));
    }

    render() {
        const {dispatch} = this.props;
        return (
            <View style={{padding: 20}}>
                <AccountConfiguration configuration={this.state.configuration} onChange={this.handleConfigurationChange.bind(this)} />

                <TouchableHighlight style={{marginTop: 30}} onPress={this.handleSubmit.bind(this)}>
                    <View style={this.state.configurationValid ? ButtonStyles.actionButton : ButtonStyles.actionButtonDisabled}>
                        <Text pointerEvents="none" style={ButtonStyles.text}>
                            Submit
                        </Text>
                    </View>
                </TouchableHighlight>
            </View>
        )
    }
}

NewAccountScreen.propTypes = {
    dispatch: PropTypes.func
};

export default connect()(NewAccountScreen)
