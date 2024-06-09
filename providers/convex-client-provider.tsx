"use client"

import { ClerkProvider, useAuth } from "@clerk/nextjs";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { AuthLoading, Authenticated, Unauthenticated, ConvexReactClient } from "convex/react";
import { use } from "react";
import { Loading } from "@/components/auth/loading";
import { SignInButton, UserButton } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";

interface ConvexClientProviderProps {
    children: React.ReactNode;
};

const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL!;

const convex = new ConvexReactClient(convexUrl);

export const ConvexClientProvider = ({
    children,
}: ConvexClientProviderProps) => {
    return (
        <ClerkProvider publishableKey="pk_test_dXNlZnVsLW9hcmZpc2gtNzIuY2xlcmsuYWNjb3VudHMuZGV2JA">
            <ConvexProviderWithClerk useAuth={useAuth} client={convex}>
                <Unauthenticated>
                    <div className="h-full w-full flex flex-col justify-center items-center">
                    <SignInButton>
                        <Button >Sign in</Button>
                    </SignInButton>
                    </div>
                </Unauthenticated>
                <Authenticated>
                    {children}
                </Authenticated>
                <AuthLoading>
                    <Loading />
                </AuthLoading>
            </ConvexProviderWithClerk>
        </ClerkProvider>
    );
};