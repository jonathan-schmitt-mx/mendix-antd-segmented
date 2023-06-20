import { ReactElement, createElement, Fragment } from "react";
import { Segmented } from "antd";

import { AntdSegmentedContainerProps } from "../typings/AntdSegmentedProps";

import "./ui/AntdSegmented.css";

export function AntdSegmented({ dsValue, dsAttribute, enumValue }: AntdSegmentedContainerProps): ReactElement {
    if (dsValue?.status === "available" && dsValue.items) {
        return <Segmented options={dsValue.items.map(item => dsAttribute?.get(item).displayValue || 'defaultValue') || ['defaultDSList']} />;
    } else if (enumValue) {
        return <Segmented options={enumValue.universe || ['defaultEnumList']} />;
    }
    // misconfigured, this will be caught at dev time by editorConfig
    return <Fragment></Fragment>;
}
