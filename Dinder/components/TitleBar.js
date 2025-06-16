import { Text } from 'react-native';
import GlobalStyles from '../styles/Global';
import styles from '../styles/HomeScreenStyles';

const TitleBar = ({ name }) => (
	<Text style={[GlobalStyles.title, styles.title]}>{name.toUpperCase()}</Text>
);

export default TitleBar;
