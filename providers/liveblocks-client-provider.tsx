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
            publicApiKey="pk_dev_Sr35EARd4AunT7RNAIo6RBli0ZUZFq1jKeORdvUxWf6LK133C70PeA6IDw2oFp4o"
        >
            {children}
        </LiveblocksProvider>
    );
}