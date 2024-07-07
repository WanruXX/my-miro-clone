"use client";

import { LiveblocksProvider } from "@liveblocks/react";

interface LiveblocksProviderProps {
    children: React.ReactNode;
};

export const LiveblocksClientProvider = ({
    children,
}: LiveblocksProviderProps) => {
    return (
        <LiveblocksProvider
            throttle={16}
            authEndpoint="/api/liveblocks-auth"
        >
            {children}
        </LiveblocksProvider>
    );
}