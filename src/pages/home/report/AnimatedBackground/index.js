import React from 'react';
import {Image} from 'react-native';
import EmptyStateBackgroundImage from '../../../../../assets/images/empty-state_background-fade.png';
import * as StyleUtils from '../../../../styles/StyleUtils';
import {propTypes, defaultProps} from './propTypes';
import withWindowDimensions from '../../../../components/withWindowDimensions';

const AnimatedBackground = props => (
    <Image
        pointerEvents="none"
        source={EmptyStateBackgroundImage}
        style={[StyleUtils.getReportWelcomeBackgroundImageStyle(props.isSmallScreenWidth)]}
    />
);

AnimatedBackground.displayName = 'AnimatedBackground';
AnimatedBackground.propTypes = propTypes;
AnimatedBackground.defaultProps = defaultProps;

export default withWindowDimensions(AnimatedBackground);
