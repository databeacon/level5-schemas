# Non-conflicting status Schema

```txt
/blender.schema.json#/$defs/nct
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                              |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :-------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [blender.schema.json\*](../../out/streaming/blender.schema.json "open original schema") |

## nct Type

`object` ([Non-conflicting status](blender-defs-non-conflicting-status.md))

# nct Properties

| Property              | Type          | Required | Nullable       | Defined by                                                                                                                                            |
| :-------------------- | :------------ | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------- |
| [id](#id)             | Not specified | Required | cannot be null | [Blender](blender-defs-non-conflicting-status-properties-id.md "/blender.schema.json#/$defs/nct/properties/id")                                       |
| [flightId](#flightid) | `string`      | Required | cannot be null | [Blender](blender-defs-non-conflicting-status-properties-flightid.md "/blender.schema.json#/$defs/nct/properties/flightId")                           |
| [sectorId](#sectorid) | `string`      | Required | cannot be null | [Blender](blender-defs-non-conflicting-status-properties-sectorid.md "/blender.schema.json#/$defs/nct/properties/sectorId")                           |
| [isNct](#isnct)       | `boolean`     | Required | cannot be null | [Blender](blender-defs-non-conflicting-status-properties-true-if-the-flight-is-non-conflicting.md "/blender.schema.json#/$defs/nct/properties/isNct") |
| [mode](#mode)         | Not specified | Required | cannot be null | [Blender](blender-defs-non-conflicting-status-properties-calculation-method.md "/blender.schema.json#/$defs/nct/properties/mode")                     |
| [showHalo](#showhalo) | `boolean`     | Required | cannot be null | [Blender](blender-defs-non-conflicting-status-properties-showhalo.md "/blender.schema.json#/$defs/nct/properties/showHalo")                           |
| [epoch](#epoch)       | `integer`     | Required | cannot be null | [Blender](blender-defs-non-conflicting-status-properties-epoch.md "/blender.schema.json#/$defs/nct/properties/epoch")                                 |
| [projExit](#projexit) | `object`      | Required | cannot be null | [Blender](blender-defs-point-4d.md "/blender.schema.json#/$defs/nct/properties/projExit")                                                             |

## id



`id`

*   is required

*   Type: unknown

*   cannot be null

*   defined in: [Blender](blender-defs-non-conflicting-status-properties-id.md "/blender.schema.json#/$defs/nct/properties/id")

### id Type

unknown

## flightId

Flight unique identifier

`flightId`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Blender](blender-defs-non-conflicting-status-properties-flightid.md "/blender.schema.json#/$defs/nct/properties/flightId")

### flightId Type

`string`

## sectorId

Sector unique identifier

`sectorId`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Blender](blender-defs-non-conflicting-status-properties-sectorid.md "/blender.schema.json#/$defs/nct/properties/sectorId")

### sectorId Type

`string`

## isNct



`isNct`

*   is required

*   Type: `boolean` ([True if the flight is non-conflicting](blender-defs-non-conflicting-status-properties-true-if-the-flight-is-non-conflicting.md))

*   cannot be null

*   defined in: [Blender](blender-defs-non-conflicting-status-properties-true-if-the-flight-is-non-conflicting.md "/blender.schema.json#/$defs/nct/properties/isNct")

### isNct Type

`boolean` ([True if the flight is non-conflicting](blender-defs-non-conflicting-status-properties-true-if-the-flight-is-non-conflicting.md))

## mode



`mode`

*   is required

*   Type: unknown ([Calculation method](blender-defs-non-conflicting-status-properties-calculation-method.md))

*   cannot be null

*   defined in: [Blender](blender-defs-non-conflicting-status-properties-calculation-method.md "/blender.schema.json#/$defs/nct/properties/mode")

### mode Type

unknown ([Calculation method](blender-defs-non-conflicting-status-properties-calculation-method.md))

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

*   defined in: [Blender](blender-defs-non-conflicting-status-properties-showhalo.md "/blender.schema.json#/$defs/nct/properties/showHalo")

### showHalo Type

`boolean`

## epoch

Calculation time, POSIX in seconds

`epoch`

*   is required

*   Type: `integer`

*   cannot be null

*   defined in: [Blender](blender-defs-non-conflicting-status-properties-epoch.md "/blender.schema.json#/$defs/nct/properties/epoch")

### epoch Type

`integer`

## projExit

A time-space position on earth

`projExit`

*   is required

*   Type: `object` ([Point 4D](blender-defs-point-4d.md))

*   cannot be null

*   defined in: [Blender](blender-defs-point-4d.md "/blender.schema.json#/$defs/nct/properties/projExit")

### projExit Type

`object` ([Point 4D](blender-defs-point-4d.md))
