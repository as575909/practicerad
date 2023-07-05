import styled from 'styled-components/native';

export const Container = styled.View`
  height: 50%;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;

export const TinyLogo = styled.Image`
  width: 30px;
  height: 30px;
`;

export const Text = styled.Text`
  flex: 1;
  color: #999;
  font-size: 16px;
`;

export const TimeContainer = styled.TouchableOpacity`
  width: 80%;
  height: 50px;
  flex-direction: row;
  align-items: center;
  border-width: 1px;
  border-color: #ccc;
  border-radius: 20px;
  padding: 10px;
  padding-right: 20px;
`;
