import { ReactElement, createElement } from "react";

export function preview(): ReactElement {
    return <div>AntdSegmentedPreviewProps</div>;
}

export function getPreviewCss(): string {
    return require("./ui/AntdSegmented.scss");
}
