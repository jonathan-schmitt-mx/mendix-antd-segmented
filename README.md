## AntdSegmented
AntdSegmented is an input that allows for selection of one value from a list of possible enum, or association values with highlighting and animations.
![image](https://github.com/jonathan-schmitt-mx/mendix-antd-segmented/assets/98909328/9ac27eac-cd4e-48b3-9e73-72ea1bd6f6ec)

## Features
1. Supports enum attribute.
2. Supports association.
3. Supports block display.
4. Supports all or some disabled options.
5. Supports custom content.
6. Supports on change actions.
7. Supports 3 size options.

## Usage

### 1. Add this widget to the Mendix Project

1. Download the mpk file from [here](https://github.com/jonathan-schmitt-mx/mendix-antd-segmented/releases).
2. Copy the mpk file to your Mendix Project directory `{YourMendixProjectFolder}/widgets/`.
3. Open your Mendix Project with Mendix Studio Pro and click on the menu `Menu > App > Synchronize App Directory`.

### 2. Set properties

#### Enumeration
* Select Type "Enumeration".
* Select Enumeration attribute.
![image](https://github.com/jonathan-schmitt-mx/mendix-antd-segmented/assets/98909328/2f71377c-a47d-4508-9b8e-327501916be9)

#### Association
* Select Type "List".
* Select Datasource of available options.
* Select Display Options
    - Attribute
        * Select Option Type "attribute"
        * Select attribute to display
          ![image](https://github.com/jonathan-schmitt-mx/mendix-antd-segmented/assets/98909328/1641ff92-db64-4611-9d48-4722f38a6652)
    - Custom Content
        * Select Option Type "custom"
        * Enter widgets into custom content dataview
          ![image](https://github.com/jonathan-schmitt-mx/mendix-antd-segmented/assets/98909328/9611d8d3-38de-405b-ba7b-7d6033ff8e7e)
* Select association between available options and context
* Optionally enter disabled expression (if this expression resolves to true, the option will be disabled)

### 3. Run 🙂

## Demo project
1. You can access the online demo from [here](https://demo-antdwidgets100.apps.ap-2a.mendixcloud.com) to show the features of this widget.   
2. You can also download the demo project from [here](https://github.com/zjh1943/mendx-antd-widgets-show) to run it on your own PC.

## Issues, suggestions and feature requests
Submit [here](https://github.com/jonathan-schmitt-mx/mendix-antd-segmented/issues).

## Property Details
See Usage Section

### Comparison with Antd Segmented features

| Property | Description | Supported | Remarks |
| --- | --- | --- | --- |
| block | Option to fit width to its parent\'s width | Y |  |
| defaultValue | Default selected value | N | Implicit by Mendix attribute value |
| disabled | Disable all segments | Y | Only supported for Type: List |
| onChange | The callback function that is triggered when the state changes | Y |  |
| options | Set children optional | Y | Supports list of mendix objects or enumeration values |
| size | The size of the Segmented. | Y | Updated naming of `middle` to `medium` |
| value | Currently selected value | Y | Mendix attribute value |

## Development and contribution

1. Install NPM package dependencies by using: `npm install`. If you use NPM v7.x.x, which can be checked by executing `npm -v`, execute: `npm install --legacy-peer-deps`.
1. Run `npm start` to watch for code changes. On every change:
    - the widget will be bundled;
    - the bundle will be included in a `dist` folder in the root directory of the project;
    - the bundle will be included in the `deployment` and `widgets` folder of the Mendix test project.
