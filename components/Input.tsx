import React from 'react'
import styled from 'styled-components';
import { TextInput } from 'react-native';

export default function Input() {
  return (
    <InputSearch 
        placeholder="Search"
        placeholderTextColor="rgba(0, 0, 0, 0.5)"
        autoCompleteType="off"
        autoCorrect={false}
        autoCapitalize="none"
        spellCheck={false}
        autoFocus={false}
        keyboardType="default"
        returnKeyType="search"
        clearButtonMode="while-editing"
        enablesReturnKeyAutomatically={true}
        keyboardAppearance="default"
        maxLength={30}
        multiline={false}
        numberOfLines={1}
        secureTextEntry={false}
        textContentType="none"
        underlineColorAndroid="transparent"
        selectionColor="rgba(0, 0, 0, 0.5)"
        />
  )
  
}

const InputSearch = styled.TextInput`
  color: currentcolor;
  border: 0px;
  box-sizing: content-box;
  height: 1.4375em;
  margin: 0px;
  -webkit-tap-highlight-color: transparent;
  display: block;
  min-width: 0px;
  width: 100%;
  animation-name: mui-auto-fill-cancel;
  animation-duration: 10ms;
  padding: 16.5px 14px 16.5px 0px;
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
`;
