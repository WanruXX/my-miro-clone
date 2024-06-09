"use client"

import { EmptyBoards } from "./empty-boards";
import { EmptyFavorites } from "./empty-favorites";
import { EmptySearch } from "./empty-search";

interface BoardListProps {
    orgId: string;
    query: {
        search?: string;
        favorites?: string;
    };
};

export const BoardList = ({
    orgId,
    query,
}: BoardListProps) => {
    const data = [];

    if (!data?.length && query.search) {
        return (
            <div className="h-full">
                <EmptySearch />
            </div>
        );
    };

    if(!data?.length && query.favorites) {
        return (
            <div className="h-full">
                <EmptyFavorites />
            </div>
        );
    };

    if (!data?.length) {
        return (
            <div className="h-full">
                <EmptyBoards />
            </div>
        );
    };

    return (
        <div>
            {JSON.stringify(query)}
        </div>
    );
};