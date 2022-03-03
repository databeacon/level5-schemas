# Non-conflicting status Schema

```txt
https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/blender/nct.schema.json
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                            |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [nct.schema.json](../../out/streaming/blender/nct.schema.json "open original schema") |

## Non-conflicting status Type

`object` ([Non-conflicting status](nct.md))

# Non-conflicting status Properties

| Property              | Type          | Required | Nullable       | Defined by                                                                                                                                                                                                       |
| :-------------------- | :------------ | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [id](#id)             | `string`      | Required | cannot be null | [Non-conflicting status](nct-properties-id.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/blender/nct.schema.json#/properties/id")                                       |
| [flightId](#flightid) | `string`      | Required | cannot be null | [Non-conflicting status](nct-properties-flightid.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/blender/nct.schema.json#/properties/flightId")                           |
| [sectorId](#sectorid) | `string`      | Required | cannot be null | [Non-conflicting status](nct-properties-sectorid.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/blender/nct.schema.json#/properties/sectorId")                           |
| [isNct](#isnct)       | `boolean`     | Required | cannot be null | [Non-conflicting status](nct-properties-true-if-the-flight-is-non-conflicting.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/blender/nct.schema.json#/properties/isNct") |
| [mode](#mode)         | Not specified | Required | cannot be null | [Non-conflicting status](nct-properties-calculation-method.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/blender/nct.schema.json#/properties/mode")                     |
| [showHalo](#showhalo) | `boolean`     | Required | cannot be null | [Non-conflicting status](nct-properties-showhalo.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/blender/nct.schema.json#/properties/showHalo")                           |
| [epoch](#epoch)       | `integer`     | Required | cannot be null | [Non-conflicting status](nct-properties-epoch.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/blender/nct.schema.json#/properties/epoch")                                 |
| [projExit](#projexit) | `object`      | Required | cannot be null | [Non-conflicting status](point4d.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/blender/point4d.schema.json#/properties/projExit")                                       |

## id

Nct unique identifier

`id`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Non-conflicting status](nct-properties-id.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/blender/nct.schema.json#/properties/id")

### id Type

`string`

## flightId

Flight unique identifier

`flightId`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Non-conflicting status](nct-properties-flightid.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/blender/nct.schema.json#/properties/flightId")

### flightId Type

`string`

## sectorId

Sector unique identifier

`sectorId`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Non-conflicting status](nct-properties-sectorid.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/blender/nct.schema.json#/properties/sectorId")

### sectorId Type

`string`

## isNct



`isNct`

*   is required

*   Type: `boolean` ([True if the flight is non-conflicting](nct-properties-true-if-the-flight-is-non-conflicting.md))

*   cannot be null

*   defined in: [Non-conflicting status](nct-properties-true-if-the-flight-is-non-conflicting.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/blender/nct.schema.json#/properties/isNct")

### isNct Type

`boolean` ([True if the flight is non-conflicting](nct-properties-true-if-the-flight-is-non-conflicting.md))

## mode



`mode`

*   is required

*   Type: unknown ([Calculation method](nct-properties-calculation-method.md))

*   cannot be null

*   defined in: [Non-conflicting status](nct-properties-calculation-method.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/blender/nct.schema.json#/properties/mode")

### mode Type

unknown ([Calculation method](nct-properties-calculation-method.md))

### mode Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value    | Explanation |
| :------- | :---------- |
| `"acg"`  |             |
| `"soft"` |             |

## showHalo

True if flight transitions from non-conflicting to potential conflict

`showHalo`

*   is required

*   Type: `boolean`

*   cannot be null

*   defined in: [Non-conflicting status](nct-properties-showhalo.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/blender/nct.schema.json#/properties/showHalo")

### showHalo Type

`boolean`

## epoch

Calculation time, POSIX in seconds

`epoch`

*   is required

*   Type: `integer`

*   cannot be null

*   defined in: [Non-conflicting status](nct-properties-epoch.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/blender/nct.schema.json#/properties/epoch")

### epoch Type

`integer`

## projExit

A time-space position on earth

`projExit`

*   is required

*   Type: `object` ([Point 4D](point4d.md))

*   cannot be null

*   defined in: [Non-conflicting status](point4d.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/blender/point4d.schema.json#/properties/projExit")

### projExit Type

`object` ([Point 4D](point4d.md))
