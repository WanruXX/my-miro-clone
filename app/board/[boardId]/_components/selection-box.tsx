"use client"

import { useSelectionBounds } from "@/hooks/use-selection-bounds";
import { LayerType, Side, XYHW } from "@/types/canvas";
import { useSelf, useStorage } from "@liveblocks/react/suspense";
import { memo } from "react";

interface SelectionBoxPros {
    onResizeHandlePointerDown: (corner: Side, initialBounds: XYHW) => void;
};

const HANDLE_WIDTH = 8;

export const SelectionBox = memo(({
    onResizeHandlePointerDown,
}: SelectionBoxPros) => {
    const soleLayerId = useSelf((me) =>
        me.presence.selection.length === 1 ? me.presence.selection[0] : null
    );

    const isShowingHandler = useStorage((root) =>
        soleLayerId && root.layers.get(soleLayerId)?.type != LayerType.Path
    );

    const bounds = useSelectionBounds();
    if (!bounds) {
        return null;
    }

    return (
        <>
            <rect
                className="fill-transparent stroke-blue-500 stroke-2 pointer-events-none"
                style={{
                    transform: `translate(${bounds.x}px, ${bounds.y}px)`,
                }}
                x={0}
                y={0}
                height={bounds.height}
                width={bounds.width}
            />
            {isShowingHandler && (
                <>
                    <rect
                        className="fill-white stroke-blue-500 stroke-2"
                        style={{
                            cursor: "nwse-resize",
                            width: `${HANDLE_WIDTH}px`,
                            height: `${HANDLE_WIDTH}px`,
                            transform: `translate(${bounds.x - HANDLE_WIDTH / 2}px, ${bounds.y - HANDLE_WIDTH / 2}px)`,
                        }}
                        x={0}
                        y={0}
                        onPointerDown={(e) => {
                            e.stopPropagation();
                        }}
                    />
                    <rect
                        className="fill-white stroke-blue-500 stroke-2"
                        style={{
                            cursor: "ns-resize",
                            width: `${HANDLE_WIDTH}px`,
                            height: `${HANDLE_WIDTH}px`,
                            transform: `translate(${bounds.x + bounds.width / 2 - HANDLE_WIDTH / 2}px, ${bounds.y - HANDLE_WIDTH / 2}px)`,
                        }}
                        x={0}
                        y={0}
                        onPointerDown={(e) => {
                            e.stopPropagation();
                        }}
                    />
                    <rect
                        className="fill-white stroke-blue-500 stroke-2"
                        style={{
                            cursor: "nesw-resize",
                            width: `${HANDLE_WIDTH}px`,
                            height: `${HANDLE_WIDTH}px`,
                            transform: `translate(${bounds.x + bounds.width - HANDLE_WIDTH / 2}px, ${bounds.y - HANDLE_WIDTH / 2}px)`,
                        }}
                        x={0}
                        y={0}
                        onPointerDown={(e) => {
                            e.stopPropagation();
                        }}
                    />
                    <rect
                        className="fill-white stroke-blue-500 stroke-2"
                        style={{
                            cursor: "ew-resize",
                            width: `${HANDLE_WIDTH}px`,
                            height: `${HANDLE_WIDTH}px`,
                            transform: `translate(${bounds.x + bounds.width - HANDLE_WIDTH / 2}px, ${bounds.y + bounds.height / 2 - HANDLE_WIDTH / 2
                                }px)`,
                        }}
                        x={0}
                        y={0}
                        onPointerDown={(e) => {
                            e.stopPropagation();
                        }}
                    />
                    <rect
                        className="fill-white stroke-blue-500 stroke-2"
                        style={{
                            cursor: "nwse-resize",
                            width: `${HANDLE_WIDTH}px`,
                            height: `${HANDLE_WIDTH}px`,
                            transform: `translate(${bounds.x + bounds.width - HANDLE_WIDTH / 2}px, ${bounds.y + bounds.height - HANDLE_WIDTH / 2}px)`,
                        }}
                        x={0}
                        y={0}
                        onPointerDown={(e) => {
                            e.stopPropagation();
                        }}
                    />
                    <rect
                        className="fill-white stroke-blue-500 stroke-2"
                        style={{
                            cursor: "ns-resize",
                            width: `${HANDLE_WIDTH}px`,
                            height: `${HANDLE_WIDTH}px`,
                            transform: `translate(${bounds.x + bounds.width / 2 - HANDLE_WIDTH / 2}px, ${bounds.y + bounds.height - HANDLE_WIDTH / 2}px)`,
                        }}
                        x={0}
                        y={0}
                        onPointerDown={(e) => {
                            e.stopPropagation();
                        }}
                    />
                    <rect
                        className="fill-white stroke-blue-500 stroke-2"
                        style={{
                            cursor: "nesw-resize",
                            width: `${HANDLE_WIDTH}px`,
                            height: `${HANDLE_WIDTH}px`,
                            transform: `translate(${bounds.x - HANDLE_WIDTH / 2}px, ${bounds.y + bounds.height - HANDLE_WIDTH / 2}px)`,
                        }}
                        x={0}
                        y={0}
                        onPointerDown={(e) => {
                            e.stopPropagation();
                        }}
                    />
                    <rect
                        className="fill-white stroke-blue-500 stroke-2"
                        style={{
                            cursor: "ew-resize",
                            width: `${HANDLE_WIDTH}px`,
                            height: `${HANDLE_WIDTH}px`,
                            transform: `translate(${bounds.x - HANDLE_WIDTH / 2}px, ${bounds.y + bounds.height / 2 - HANDLE_WIDTH / 2}px)`,
                        }}
                        x={0}
                        y={0}
                        onPointerDown={(e) => {
                            e.stopPropagation();
                        }}
                    />
                </>
            )}
        </>
    );
});

SelectionBox.displayName = "SelectionBox";