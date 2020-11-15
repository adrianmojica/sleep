import { render, screen } from '@testing-library/react';
import App from './App';
import SleepForm from './SleepForm';
import {MemoryRouter} from 'react-router-dom';


it('renders without crashing', ()=>{
  render(<App/>);
})


it('renders form without crashing', ()=>{
  render(<MemoryRouter><SleepForm/></MemoryRouter>);
})


