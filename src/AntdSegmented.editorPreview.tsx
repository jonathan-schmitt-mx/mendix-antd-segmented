import { ReactElement, createElement } from "react";

export function preview(): ReactElement {
    return <div>Antd Segmented</div>;
}

export function getPreviewCss(): string {
    return require("./ui/AntdSegmented.scss");
}
