import { Animated } from 'react-native';
import styled from "styled-components/native";

export const Container = styled(Animated.View)`
  margin-bottom: 20px;
  height: 100px;
  margin-top: 20px;
`;

export const TabContainer = styled.ScrollView.attrs({
  horizontal: true,
  contentContainerStyle: { paddingLeft: 10, paddingRight: 20 },
  showsHorizontalScrollIndicator: false,
})``;

export const TabItem = styled.View`
  width: 100px;
  height: 100px;
  background: rgba(255, 255, 255, .2);
  border-radius: 3px;
  margin-left: 10px;
  padding: 10px;
  justify-content: space-between;
`;

export const TabText = styled.Text`
  font-size: 13px;
  color: #FFF;
`;
