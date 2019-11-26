import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import useDebounce from './use-debounce';

function App() {
  const [chosenColor, setChosenColor] = useState('');
  let userProfile = {
    id: '00023_sequential-int-shame',
    name: 'John Smith',
    handle: 'johnny',
    address: '123 Drury Ln.',
    city: 'Austin',
    state: 'TX',

    color: '#20B2AA'
  };  

  let approvedColors = [
    '#d7816a',
    '#bd4f6c',
    '#abe9cd',
  ];

  const Layout = styled.div`
    margin-top: 200px;  

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  `;

  const Profile = styled.div`
    padding-left: 50px;
  
    display: flex;
    flex-direction: column

    button {
      margin-top: 20px;
    }
  `;

  // background: radial-gradient(${chosenColor} 0%, white 100%);

  const ProfileImage = styled.div`
    width: 100px;
    height: 100px;
    background-color: ${chosenColor};
    border-radius: 50%;
    

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  `;

  const handleColorPreview = () => {
    console.log(chosenColor);
  }

  const handleColorChange = ({ target }) => {
    console.log(target.value);
    setChosenColor(target.value);
  }

  const saveChanges = () => {
    console.log('Save Changes clicked');
  }

  
  return (
    <div className="App">

      <Layout>
        <ProfileImage>
          <img src="https://img.icons8.com/ios/50/000000/user.png" />
        </ProfileImage>
        <Profile>
          
        </Profile>
      </Layout>

      <div>{userProfile.name}</div>
          <div>{userProfile.handle}</div>
          <div>Current color: {chosenColor}</div>
          <div>
            <span>New color: </span>
            <input 
              name="colorInput"
              placeholder="Enter new color..."
              onChange={handleColorChange} 
              value={chosenColor} />
            <button onClick={handleColorPreview}>Preview</button>
          </div>

          <button onClick={saveChanges}>Save Changes</button>

    </div>
  );
}

export default App;
