import React from 'react';
import { JitsiMeeting } from '@jitsi/react-sdk';

const JitsiCall = ({ roomName, displayName }) => {
    return (
        <div className="w-full">
            <JitsiMeeting
                domain="meet.jit.si"
                roomName={roomName}
                configOverwrite={{
                    startWithAudioMuted: true,
                    disableModeratorIndicator: true,
                    startScreenSharing: true,
                    allowAnonymousInMeeting: true, 
                    requireDisplayName: false,
                    enableEmailInStats: false,
                    openBridgeChannel: true, 
                }}
                interfaceConfigOverwrite={{
                    DISABLE_JOIN_LEAVE_NOTIFICATIONS: true,
                }}
                userInfo={{
                    displayName: displayName,
                }}
                onApiReady={(externalApi) => {
                   
                }}
                getIFrameRef={(iframeRef) => {
                    if (iframeRef) {
                        iframeRef.style.height = '400px';
                    }
                }}
            />
        </div>
    );
};

export default JitsiCall;
