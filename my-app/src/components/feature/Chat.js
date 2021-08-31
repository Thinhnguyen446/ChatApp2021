import React from 'react'
import styled from 'styled-components'
//import Header from '../common/Header'
import Message from './Message'

function Chat() {
    return (
        <ChatContainer>
            this is chat components
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
        </ChatContainer>
    )
}

export default Chat

const ChatContainer = styled.div`
    flex: 0.7;
    margin-top: 60px;
    flex-grow: 1;
    overflow-y: scroll;
`;
