import { ReactElement, createElement, Fragment, useState, useEffect } from "react";
import { Segmented } from "antd";

import { AntdSegmentedContainerProps } from "../typings/AntdSegmentedProps";

import "./ui/AntdSegmented.css";

export function AntdSegmented({
    dsValue,
    dsAttribute,
    dsReference,
    enumValue
}: AntdSegmentedContainerProps): ReactElement {
    const [options, setOptions] = useState<Map<string, any>>();
    useEffect(() => {
        const map = new Map();
        if (dsValue?.status === "available" && dsValue.items && dsAttribute) {
            dsValue.items.forEach(item => map.set(dsAttribute.get(item).displayValue, item));
            setOptions(map);
        }
    }, [dsValue]);

    if (dsValue?.status === "available" && dsValue.items && dsReference) {
        return (
            <Segmented
                options={
                    dsValue.items.map(item => dsAttribute?.get(item).displayValue || "defaultValue") || [
                        "defaultDSList"
                    ]
                }
                value={dsReference.value ? dsAttribute?.get(dsReference.value).displayValue : ""}
                onChange={value => dsReference.setValue(options?.get(value.toString()))}
            />
        );
    } else if (enumValue) {
        return (
            <Segmented
                options={enumValue.universe || ["defaultEnumList"]}
                value={enumValue.value}
                onChange={value => enumValue.setValue(value.toString())}
            />
        );
    }
    return <Fragment />;
}
