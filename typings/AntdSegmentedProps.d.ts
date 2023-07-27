/**
 * This file was generated from AntdSegmented.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { ComponentType, ReactNode } from "react";
import { EditableValue, ListValue, ListAttributeValue, ListExpressionValue, ListWidgetValue, ReferenceValue } from "mendix";

export type DsTypeEnum = "enum" | "ds";

export type OptionTypeEnum = "attribute" | "custom";

export type SizeEnum = "small" | "middle" | "large";

export interface AntdSegmentedContainerProps {
    name: string;
    tabIndex?: number;
    id: string;
    dsType: DsTypeEnum;
    enumValue?: EditableValue<string>;
    dsValue?: ListValue;
    optionType: OptionTypeEnum;
    dsAttribute?: ListAttributeValue<string>;
    dsReference?: ReferenceValue;
    dsDisabled?: ListExpressionValue<boolean>;
    content?: ListWidgetValue;
    block: boolean;
    size: SizeEnum;
}

export interface AntdSegmentedPreviewProps {
    readOnly: boolean;
    dsType: DsTypeEnum;
    enumValue: string;
    dsValue: {} | { caption: string } | { type: string } | null;
    optionType: OptionTypeEnum;
    dsAttribute: string;
    dsReference: string;
    dsDisabled: string;
    content: { widgetCount: number; renderer: ComponentType<{ children: ReactNode; caption?: string }> };
    onChangeAction: {} | null;
    block: boolean;
    size: SizeEnum;
}
