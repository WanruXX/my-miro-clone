"use client"

import { useSelf, useOthersMapped } from "@liveblocks/react/suspense";
import { UserAvatar } from "./user-avatar";
import { connectionIdToColor } from "@/lib/utils";

const MAX_SHOWN_OTHERS = 2;

export const Participants = () => {
    const currentUser = useSelf();
    const others = useOthersMapped((other) => other.info);
    const hasMoreUsers = others.length > MAX_SHOWN_OTHERS;

    return (
        <div className="absolute h-12 top-2 right-2 bg-white rounded-md p-3 flex items-center shadow-md">
            <div className="flex gap-x-2">
                {others.slice(0, MAX_SHOWN_OTHERS).map(([connectionId, info]) => {
                    return (
                        <UserAvatar
                            borderColor={connectionIdToColor(connectionId)}
                            key={connectionId}
                            src={info?.picture}
                            name={info?.name}
                            fallback={info?.name?.[0] || "T"}
                        />
                    );
                })}
                {currentUser && (
                    <UserAvatar
                        borderColor={connectionIdToColor(currentUser.connectionId)}
                        src={currentUser.info?.picture}
                        name={`${currentUser.info?.name} (You)`}
                        fallback={currentUser.info?.name?.[0]}
                    />
                )}
                {hasMoreUsers && (
                    <UserAvatar
                        name={`${others.length - MAX_SHOWN_OTHERS} more`}
                        fallback={`+${others.length - MAX_SHOWN_OTHERS}`} />
                )}

            </div>
        </div>
    );
};

export const ParticipantsSkeleton = () => {
    return (
        <div className="absolute h-12 top-2 right-2 bg-white rounded-md p-3 flex items-center shadow-md w-[100px]" />
    );
};