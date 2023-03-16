import React from 'react';
import Animated, {
    SensorType,
    useAnimatedSensor,
    useAnimatedStyle,
    useSharedValue,
    withSpring,
} from 'react-native-reanimated';
import EmptyStateBackgroundImage from '../../../../../assets/images/empty-state_background-fade.png';
import * as StyleUtils from '../../../../styles/StyleUtils';
import {defaultProps, propTypes} from './propTypes';
import withWindowDimensions from '../../../../components/withWindowDimensions';

const AnimatedBackground = (props) => {
    // Get data from phone rotation sensor and prep other variables for animation
    const animatedSensor = useAnimatedSensor(SensorType.ROTATION);
    const offsetX = useSharedValue((-props.windowWidth / 2));
    const offsetY = useSharedValue(50);

    // Apply data to create style object
    const animatedStyles = useAnimatedStyle(() => {
        const {qx, qy} = animatedSensor.sensor.value;
        return {
            transform: [
                // The x vs y here seems wrong but is the way to make it feel right to the user
                {translateX: withSpring(offsetX.value - (qy * 65))},
                {translateY: withSpring(offsetY.value - (qx * 65))},
            ],
        };
    });

    return (
        <Animated.Image
            pointerEvents="none"
            source={EmptyStateBackgroundImage}
            style={[StyleUtils.getReportWelcomeBackgroundImageStyle(props.isSmallScreenWidth), animatedStyles]}
        />
    );
};

AnimatedBackground.displayName = 'AnimatedBackground';
AnimatedBackground.propTypes = propTypes;
AnimatedBackground.defaultProps = defaultProps;

export default withWindowDimensions(AnimatedBackground);
