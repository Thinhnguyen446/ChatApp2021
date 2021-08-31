import React from 'react'
import styled from 'styled-components'
import CreateIcon from '@material-ui/icons/Create';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import SidebarOption from './SidebarOption';
import CommentOutlinedIcon from '@material-ui/icons/CommentOutlined';

function Sidebar() {
    return <SidebarContainer>
        <SidebarHeader>
            <SidebarInfo>
                <h2>username</h2>
                <h3><FiberManualRecordIcon/> email@gmail.com</h3>
            </SidebarInfo>
            <CreateIcon onClick={()=>{}} />
        </SidebarHeader>

        <SidebarOption Icon={CommentOutlinedIcon} title="Thread" />
        <SidebarOption Icon={CommentOutlinedIcon} title="Mention and Reactions" />
        <SidebarOption Icon={CommentOutlinedIcon} title="Save item" />
        <SidebarOption Icon={CommentOutlinedIcon} title="Channel Browser" />
        <SidebarOption Icon={CommentOutlinedIcon} title="Show less" />
        <hr/>
        <SidebarOption Icon={CommentOutlinedIcon} title="Add chanel" />
        <hr/>
        <SidebarOption Icon={CommentOutlinedIcon} title="Channels" />
        {/* Example channels */}
        <SidebarOption title="Channel examples 1" />
        <SidebarOption title="Channel examples 2" />
        <SidebarOption title="Channel examples 3" />
    </SidebarContainer>
}

export default Sidebar

const SidebarContainer = styled.div`
    background-color: var(--main-color);
    flex: 0.2;
    border-top: 1px solid #49274b;
    color: white;
    margin-top:46px;
    >hr{
        margin-top: 10px;
        margin-bottom: 10px;
        border: 1px solid #49274b;
    }
`;

const SidebarHeader = styled.div`
    display: flex;
    border-bottom: 1px solid #49274b;
    padding: 13px;
    > .MuiSvgIcon-root {
        padding: 8px;
        color: white;
        font-size: 18px;
        background-color: grey;
        border-radius: 999px;
        cursor: pointer;
    }
`;
const SidebarInfo = styled.div`
    flex: 1;
    > h2 {
        font-size: 15px;
        font-weight: 600;
        margin-bottom: 5px;
    }
    > h3 {
        display: flex;
        font-size: 13px;
        font-weight: 600;
        align-items: center;
    }
    > h3 > .MuiSvgIcon-root {
        font-size: 14px;
        margin-top: 1px;
        margin-right: 2px;
        color: green;
    }
`;

