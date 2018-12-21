import React, {Component} from 'react'
import {Image} from 'react-native'

const ImagesExample = () => (
    <Image source={require('./AssistyvFoxLogo.jpg')}
           style={{width: 200, height: 200}}
    />
);
export default ImagesExample