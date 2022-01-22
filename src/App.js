import React from 'react';
import styled from 'styled-components';
import Sidebar from './components/Sidebar'
import RighSidebar from './components/RightSidebar'
import Dashboard from './components/Dashboard'
function App() {
  return (
    <Div>
      <Sidebar />
      <Dashboard />
      <RighSidebar />
    </Div>
  );
}

export default App;
const Div = styled.div `
position: relative;
`;
