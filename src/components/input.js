import React from "react";
import styled from "styled-components/native";
import { Dimensions } from "react-native";
import reactDom from "react-dom";
import theme from "../theme";
import PropTypes from 'prop-types';
// import { useWindowDimensions } from "react-native";


const StyledInput = styled.TextInput.attrs(
    ({placeholder}) => ({
            placeholder: placeholder,
            // placeholderTextColor: 'red'
            placeholderTextColor: theme.main
    })
)`
    width: ${({width}) => width - 50}px;
    height: 60px;
    margin: 3px 0;
    padding: 15px 20px;
    border-radius: 10px;
    background-color: ${({theme}) => theme.itemBackground};
    font-size: 25px;
    color: ${({theme}) => theme.text};
`;

const Input = ({placeholder,value,onChangeText,onSubmitEditing,onBlur}) => {
    const width = Dimensions.get('window').width;
    // const width = useWindowDimensions().width;

    return (
        <StyledInput
            width={width}
            placeholder={placeholder}
            maxLength={5}
            autoCapitalize="none"
            returnKeyType="done"
            keyboardAppearance="dark"
            // multiline={true}
            // numberOfLines={3}
            value={value}
            onChangeText={onChangeText}
            onSubmitEditing={onSubmitEditing}
            onBlur={onBlur}
        />
    );
};

Input.defaultProps = {
    value:'기본값'
}

Input.propTypes = {
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string,
    onChangeText: PropTypes.func.isRequired,
    onSubmitEditing: PropTypes.func.isRequired,
    onBlur:PropTypes.func.isRequired
}
export default Input;