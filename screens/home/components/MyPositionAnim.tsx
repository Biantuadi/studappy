import React, { useEffect, useRef } from 'react';
import { Animated } from 'react-native';
import styled from 'styled-components/native';


const MyPositionAnim = () => {
  const animation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(animation, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true
      })
    ).start();
  }, [animation]);

  const opacity = animation.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, 0.8, 0] // Commence et termine à 0, atteint 0.8 au centre
  });

  return (
    <ContainerPosition>
      <AnimatedView style={{ opacity }} />
      <Dot />
    </ContainerPosition>
  );
};


const ContainerPosition = styled.View`
  justify-content: center;
  align-items: center;
  background: rgba(3, 34, 80, 0.2);
  border-radius: 50px;
  width: 50px;
  height: 50px;
  overflow: hidden; 
`;

const Dot = styled.View`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  border: 2px solid #fff;
  background-color: #1d1f24;
`;

const AnimatedView = Animated.createAnimatedComponent(styled.View`
  position: absolute;
  border-radius: 25px;
  background-color: #1d1f2433;
  width: 50px;  
  height: 50px; 
  opacity: 0;
`);

export default MyPositionAnim;
