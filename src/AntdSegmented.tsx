import { ReactElement, createElement, Fragment, useState, useEffect } from "react";
import { Segmented } from "antd";

import { AntdSegmentedContainerProps } from "../typings/AntdSegmentedProps";

import "./ui/AntdSegmented.scss";

export function AntdSegmented({
    dsValue,
    dsAttribute,
    dsReference,
    enumValue
}: AntdSegmentedContainerProps): ReactElement {
    const [options, setOptions] = useState<Map<string, any>>(); // any is an ObjectItem, please find and import :)
    useEffect(() => {
        const map = new Map();
        if (dsValue?.status === "available" && dsValue.items && dsAttribute) {
            dsValue.items.forEach(item => map.set(dsAttribute.get(item).displayValue, item));
            setOptions(map);
        }
    }, [dsValue]);

    if (dsValue?.status === "available" && dsValue.items && dsReference && options) {
        return (
            <Segmented
                options={Array.from(options.keys()) || ["defaultDSList"]}
                disabled={dsReference.readOnly}
                value={dsReference.value ? dsAttribute?.get(dsReference.value).displayValue : ""}
                onChange={value => {
                    const selectedObject = options?.get(value.toString());
                    dsReference.setValue(selectedObject);
                }}
            />
        );
    } else if (enumValue) {
        return (
            <Segmented
                options={enumValue.universe?.map(value => enumValue.formatter.format(value)) || ["defaultEnumList"]}
                value={enumValue.displayValue || ""}
                disabled={enumValue.readOnly}
                onChange={value => {
                    const selectedValue = enumValue.universe?.find(
                        keyValue => enumValue.formatter.format(keyValue) === value
                    );
                    enumValue.setValue(selectedValue);
                }}
            />
        );
    }
    return <Fragment />;
}
