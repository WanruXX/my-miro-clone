"use client"

import { LayerType } from "@/types/canvas";
import { useStorage } from "@liveblocks/react/suspense";
import { memo } from "react";
import { Rectangle } from "./layer-rectangle";
import { Ellipse } from "./layer-ellipse";
import { Text } from "./layer-text";
import { Note } from "./layer-note";

interface LayerPreviewProps {
    id: string;
    onLayerPointerDown: (e: React.PointerEvent, layerId: string) => void;
    selectionColor?: string;
};
export const LayerPreview = memo(({
    id,
    onLayerPointerDown,
    selectionColor,
}: LayerPreviewProps) => {
    const layer = useStorage((root) => root.layers.get(id));
    if (!layer) {
        return null;
    }
    switch (layer.type) {
        case LayerType.Note:
            return (
                <Note
                    id={id}
                    layer={layer}
                    onPointerDown={onLayerPointerDown}
                    selectionColor={selectionColor} />
            );
        case LayerType.Text:
            return (
                <Text
                    id={id}
                    layer={layer}
                    onPointerDown={onLayerPointerDown}
                    selectionColor={selectionColor} />
            );
        case LayerType.Ellipse:
            return (
                <Ellipse
                    id={id}
                    layer={layer}
                    onPointerDown={onLayerPointerDown}
                    selectionColor={selectionColor} />
            );
        case LayerType.Rectangle:
            return (
                <Rectangle
                    id={id}
                    layer={layer}
                    onPointerDown={onLayerPointerDown}
                    selectionColor={selectionColor} />
            );
        default:
            console.warn("Unknown layer type: " + layer.type);
            return null;
    };
});
LayerPreview.displayName = "Layer Preview";