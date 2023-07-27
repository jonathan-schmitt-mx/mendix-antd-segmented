import { ReactElement, createElement, Fragment, useState, useEffect } from "react";
import { Segmented } from "antd";

import { AntdSegmentedContainerProps } from "../typings/AntdSegmentedProps";

import "./ui/AntdSegmented.scss";
import { SegmentedLabeledOption } from "antd/es/segmented";

export function AntdSegmented({
    dsValue,
    dsAttribute,
    dsReference,
    dsDisabled,
    enumValue,
    optionType,
    content
}: AntdSegmentedContainerProps): ReactElement {
    const [options, setOptions] = useState<SegmentedLabeledOption[]>([]);

    useEffect(() => {
        if (dsValue?.items && dsAttribute) {
            setOptions(
                dsValue.items.map((item) => ({
                    label: optionType === "custom" ? content?.get(item) : dsAttribute.get(item).displayValue,
                    value: item.id,
                    disabled: dsDisabled && dsDisabled.get(item).value
                }))
            );
        }
    }, [dsValue, dsAttribute]);

    if (dsValue?.status === "available" && dsValue.items && dsReference && dsAttribute) {
        return (
            <Segmented
                options={options}
                disabled={dsReference.readOnly}
                value={
                    dsReference.value
                        // find another options to dereference other than label
                        ? options.find(item => (item.value === dsReference.value!.id))?.value
                        : ""
                }
                onChange={value => {
                    if (dsValue.items) {
                        const selectedObject = dsValue.items.find(item => item.id === value);
                        dsReference.setValue(selectedObject);
                    }
                }}
            />
        );
    } else if (enumValue) {
        return (
            <Segmented
                options={enumValue.universe?.map(value => enumValue.formatter.format(value)) || []}
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
