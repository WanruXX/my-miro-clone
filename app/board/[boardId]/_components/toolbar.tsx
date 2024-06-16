"use client"

export const Toolbar = () => {
    return (
        <div className="absolute top-[50%] -translate-y-[50%] left-2 flex flex-col gap-y-4">
            <div className="bg-white rounded-md p-1.5 flex gap-y-4 flex-col items-center shadow-md">
                <div>
                    pencil
                </div>
                <div>
                    brush
                </div>
                <div>
                    square
                </div>
                <div>
                    circle
                </div>
            </div>
            <div className="bg-white rounded-md p-1.5 flex flex-col items-center shadow-md">
                <div>
                    undo
                </div>
                <div>
                    redo
                </div>
            </div>
        </div>
    );
};

Toolbar.Skeleton = function ToolbarSkeleton() {
    return (
        <div className="absolute top-[50%] -translate-y-[50%] left-2 flex flex-col gap-y-4 bg-white h-[360px] w-[52px] shadow-md rounded-md" />
    );
};