import FormGroup from '@mui/material/FormGroup';
import './App.css';
import MySelect from './MySelect';
import MyTextInput from './MyTextInput';
function App() {
  return (
    <FormGroup style={{width:200,margin:10}} >
      <MySelect />
      <MyTextInput />
    </FormGroup>
  );
}

export default App;
