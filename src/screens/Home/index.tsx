import {Box, Center, Text, Checkbox, useToast} from 'native-base';
import React, {useState} from 'react';
import Button1 from '../../components/Button1';

const Home: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);

  const toast = useToast();

  function handleConsoleMessage() {
    if (isChecked === true) {
      console.log('Hello World!');
    } else {
      toast.show({
        status: 'error',
        title: 'Erro ao pressionar o botão',
        description: 'Você precisa selecionar o checkbox para prosseguir!',
      });
    }
  }

  function handleAlertApp() {
    if (isChecked === true) {
      toast.show({
        status: 'success',
        title: 'Sucesso 🚀',
        description: 'Você ativou o botão com sucesso!',
      });
    } else {
      toast.show({
        status: 'error',
        title: 'Erro ao pressionar o botão',
        description: 'Você precisa selecionar o checkbox para prosseguir!',
      });
    }
  }

  const handleCheckBox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <Box p={12} flex={1} bg={'blue.800'}>
      <Box
        justifyContent={'center'}
        rounded={'xl'}
        mt={200}
        h={300}
        bg={'gray.200'}>
        <Center>
          <Box alignItems={'center'} flexDir={'row'}>
            <Text fontSize={15}>Marque o checkbox:</Text>
            <Checkbox
              onChange={handleCheckBox}
              isChecked={isChecked}
              value={'true'}
              ml={1}
            />
          </Box>
          <Button1
            onPress={handleConsoleMessage}
            bgColor={'blue.300'}
            title="Mensagem no console"
          />
          <Button1
            onPress={handleAlertApp}
            bgColor={'red.500'}
            title="Advance"
          />
        </Center>
      </Box>
    </Box>
  );
};

export default Home;
