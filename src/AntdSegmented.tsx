import { ReactElement, createElement, Fragment, useState, useEffect } from "react";
import { Segmented, Skeleton } from "antd";
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
    content,
    size,
    block
}: AntdSegmentedContainerProps): ReactElement {
    const [options, setOptions] = useState<SegmentedLabeledOption[]>([]);

    useEffect(() => {
        if (dsValue?.status === "available" && dsValue.items) {
            setOptions(
                dsValue.items.map(item => ({
                    label: optionType === "custom" ? content?.get(item) : dsAttribute?.get(item).displayValue,
                    value: item.id,
                    disabled: dsDisabled && dsDisabled.get(item).value
                }))
            );
        }
    }, [dsValue, dsAttribute, content, dsDisabled, optionType]);

    if (dsValue) {
        if (dsValue.status === "available" && dsReference) {
            if (options) {
                return (
                    <Segmented
                        options={options}
                        disabled={dsReference.readOnly}
                        value={
                            dsReference.value ? options.find(item => item.value === dsReference.value!.id)?.value : ""
                        }
                        onChange={value => {
                            if (dsValue.items) {
                                const selectedObject = dsValue.items.find(item => item.id === value);
                                dsReference.setValue(selectedObject);
                            }
                        }}
                        size={size}
                        block={block}
                    />
                );
            } else {
                return <div>No Items Found</div>;
            }
        } else {
            return (
                <Skeleton.Input active size={size === "large" || size === "small" ? size : "default"} block={block} />
            );
        }
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
                size={size}
                block={block}
            />
        );
    }
    return <Fragment />;
}
