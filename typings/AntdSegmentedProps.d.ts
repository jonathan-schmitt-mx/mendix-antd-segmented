/**
 * This file was generated from AntdSegmented.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { EditableValue, ListValue, ListAttributeValue, ReferenceValue } from "mendix";

export interface AntdSegmentedContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    enumValue?: EditableValue<string>;
    dsValue?: ListValue;
    dsAttribute?: ListAttributeValue<string>;
    dsReference?: ReferenceValue;
}

export interface AntdSegmentedPreviewProps {
    /**
     * @deprecated Deprecated since version 9.18.0. Please use class property instead.
     */
    className: string;
    class: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    enumValue: string;
    dsValue: {} | { caption: string } | { type: string } | null;
    dsAttribute: string;
    dsReference: string;
}
