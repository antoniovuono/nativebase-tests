import {Button} from 'native-base';
import React from 'react';

interface IButtonProps {
  title: string;
  bgColor: string;
  onPress: () => void;
}

const Button1: React.FC<IButtonProps> = ({
  title,
  bgColor,
  ...rest
}: IButtonProps) => {
  return (
    <Button
      {...rest}
      _text={{
        fontSize: 'md',
        fontWeight: 'medium',
        color: 'warmGray.50',
        textAlign: 'center',
      }}
      bg={bgColor}
      p={5}
      width={'260'}
      mt={2}>
      {title}
    </Button>
  );
};

export default Button1;
