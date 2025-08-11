import { TextInput, TextInputProps } from 'react-native';
import { styles } from './styles';

type InputProps = TextInputProps & {
  value: string;
  onChangeText: (text: string) => void;
};

export const Input = ({ value, onChangeText, ...rest }: InputProps) => {
  return (
    <TextInput
      style={styles.input}
      value={value}
      onChangeText={onChangeText}
      placeholderTextColor="#999"
      {...rest}
    />
  );
};