import React, { Component } from 'react';
import { View, Image } from 'react-native';

export default function ChillestMonkey(props) {
  return (
    <Image
      style={{...props.style}}
      source={require('./monkey.gif')}/>
  );
}
