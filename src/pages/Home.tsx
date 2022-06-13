import {Button ,Box} from '@mui/material';
import {useState,useEffect} from 'react';
import {styled} from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import {getImg} from '../utils/helper';
import LangSelector from '../components/langSelector';
const Btn = styled(Button)({
  background: 'var(--primary)',
  color:'var(--text-primary)'
})
interface HomeProps{
  theme:string,
  switchTheme:(event:any) => void
}

const Home = ({theme,switchTheme}:HomeProps) => {
  const { t } = useTranslation();
  return(
    <>
        <Box sx={{width:'100%',height:'100vh',background:'var(--secondary)'}}>
          <LangSelector/>
          <Btn onClick={switchTheme}>
            {t('HELLO_WORLD')}
          </Btn>
          <img src={getImg('preview.gif')} alt='design'></img>
          
        </Box>
     
    </>
  );
}

export default Home;