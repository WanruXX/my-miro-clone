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
            authEndpoint="/api/liveblocks-auth"
        >
            {children}
        </LiveblocksProvider>
    );
}