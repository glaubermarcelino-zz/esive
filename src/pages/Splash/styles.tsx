import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled(LinearGradient).attrs({
  colors: ['#5684B7' , '#263F91', '#263F91'],
  start: { x: 1.0, y: -0.1 },
  end: { x: -0.1, y: 0.65 }
})`
  flex: 1;
`;

export const Logo = styled.Image`
  src: '../assets/e-sive-white.png';
`;
