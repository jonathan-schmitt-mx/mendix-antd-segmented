// import { hidePropertiesIn, hideNestedPropertiesIn } from "@mendix/pluggable-widgets-tools";
// import { Properties } from './AntdSegmented.editorConfig';
import { AntdSegmentedPreviewProps } from "../typings/AntdSegmentedProps";

export type Platform = "web" | "desktop";

export type Properties = PropertyGroup[];

type PropertyGroup = {
    caption: string;
    propertyGroups?: PropertyGroup[];
    properties?: Property[];
};

type Property = {
    key: string;
    caption: string;
    description?: string;
    objectHeaders?: string[]; // used for customizing object grids
    objects?: ObjectProperties[];
    properties?: Properties[];
};

type ObjectProperties = {
    properties: PropertyGroup[];
    captions?: string[]; // used for customizing object grids
};

export type Problem = {
    property?: string; // key of the property, at which the problem exists
    severity?: "error" | "warning" | "deprecation"; // default = "error"
    message: string; // description of the problem
    studioMessage?: string; // studio-specific message, defaults to message
    url?: string; // link with more information about the problem
    studioUrl?: string; // studio-specific link
};

type BaseProps = {
    type: "Image" | "Container" | "RowLayout" | "Text" | "DropZone" | "Selectable" | "Datasource";
    grow?: number; // optionally sets a growth factor if used in a layout (default = 1)
};

type ImageProps = BaseProps & {
    type: "Image";
    document?: string; // svg image
    data?: string; // base64 image
    property?: object; // widget image property object from Values API
    width?: number; // sets a fixed maximum width
    height?: number; // sets a fixed maximum height
};

type ContainerProps = BaseProps & {
    type: "Container" | "RowLayout";
    children: PreviewProps[]; // any other preview element
    borders?: boolean; // sets borders around the layout to visually group its children
    borderRadius?: number; // integer. Can be used to create rounded borders
    backgroundColor?: string; // HTML color, formatted #RRGGBB
    borderWidth?: number; // sets the border width
    padding?: number; // integer. adds padding around the container
};

type RowLayoutProps = ContainerProps & {
    type: "RowLayout";
    columnSize?: "fixed" | "grow"; // default is fixed
};

type TextProps = BaseProps & {
    type: "Text";
    content: string; // text that should be shown
    fontSize?: number; // sets the font size
    fontColor?: string; // HTML color, formatted #RRGGBB
    bold?: boolean;
    italic?: boolean;
};

type DropZoneProps = BaseProps & {
    type: "DropZone";
    property: object; // widgets property object from Values API
    placeholder: string; // text to be shown inside the dropzone when empty
    showDataSourceHeader?: boolean; // true by default. Toggles whether to show a header containing information about the datasource
};

type SelectableProps = BaseProps & {
    type: "Selectable";
    object: object; // object property instance from the Value API
    child: PreviewProps; // any type of preview property to visualize the object instance
};

type DatasourceProps = BaseProps & {
    type: "Datasource";
    property: object | null; // datasource property object from Values API
    child?: PreviewProps; // any type of preview property component (optional)
};

export type PreviewProps =
    | ImageProps
    | ContainerProps
    | RowLayoutProps
    | TextProps
    | DropZoneProps
    | SelectableProps
    | DatasourceProps;

export function getProperties(
    _values: AntdSegmentedPreviewProps,
    defaultProperties: Properties /* , target: Platform*/
): Properties {
    const datasourceGroup = defaultProperties
        .find(group => group.caption === "General")
        ?.propertyGroups?.find(group => group.caption === "Data source");
    if (datasourceGroup) {
        if (_values.dsType === "ds") {
            datasourceGroup.properties = datasourceGroup?.properties?.filter(property => property.key !== "enumValue");
        }
        if (_values.dsType === "enum") {
            datasourceGroup.properties = datasourceGroup?.properties?.filter(
                property =>
                    property.key !== "dsValue" && property.key !== "dsAttribute" && property.key !== "dsReference"
            );
        }
    }

    return defaultProperties;
}

export function check(_values: AntdSegmentedPreviewProps): Problem[] {
    const errors: Problem[] = [];
    if (_values.dsValue) {
        if (!_values.dsAttribute) {
            errors.push({
                property: `dsAttribute`,
                message: `The value of 'dsAttribute' is required for a datasource type.`
            });
        }
        if (!_values.dsReference) {
            errors.push({
                property: `dsReference`,
                message: `The value of 'dsReference' is required for a datasource type.`
            });
        }
    }
    if (_values.dsType === "ds" && !_values.dsValue) {
        errors.push({
            property: `dsValue`,
            message: `Data source is required.`
        });
    }
    if (_values.dsType === "enum" && !_values.enumValue) {
        errors.push({
            property: `enumValue`,
            message: `Enum is required.`
        });
    }

    return errors;
}

// export function getPreview(values: AntdSegmentedPreviewProps, isDarkMode: boolean, version: number[]): PreviewProps {
    
//     return {
//         type: "Container",
//         children: [
//             {
//                 type: "RowLayout",
//                 columnSize: "grow",
//                 padding: 5,
//                 borders: true,
//                 borderWidth: 1,
//                 borderRadius: 5,
//                 children: [
//                     {
//                         type: "Container",
//                         grow: 1,
//                         children: [
//                             {
//                                 type: "Text",
//                                 fontSize: 10,
//                                 content: "Datetime Value"
//                             }
//                         ]
//                     },
                    
//                         {
//                             type: "DropZone",
//                             property: values.content,
//                             placeholder: "Drop your custom date render content here"
//                         }
                    
//                 ]
//             }
//         ]
//     }
// }

// export function getCustomCaption(values: AntdSegmentedPreviewProps, platform: Platform): string {
//     return "AntdSegmented";
// }
