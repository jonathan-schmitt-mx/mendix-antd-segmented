/**
 * This file was generated from AntdSegmented.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { EditableValue, ListValue, ListAttributeValue, ReferenceValue } from "mendix";

export type DsTypeEnum = "enum" | "ds";

export type SizeEnum = "small" | "middle" | "large";

export interface AntdSegmentedContainerProps {
    name: string;
    tabIndex?: number;
    id: string;
    dsType: DsTypeEnum;
    enumValue?: EditableValue<string>;
    dsValue?: ListValue;
    dsAttribute?: ListAttributeValue<string>;
    dsReference?: ReferenceValue;
    block: boolean;
    size: SizeEnum;
}

export interface AntdSegmentedPreviewProps {
    readOnly: boolean;
    dsType: DsTypeEnum;
    enumValue: string;
    dsValue: {} | { caption: string } | { type: string } | null;
    dsAttribute: string;
    dsReference: string;
    onChangeAction: {} | null;
    block: boolean;
    size: SizeEnum;
}
