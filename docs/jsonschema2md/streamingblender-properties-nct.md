# Untitled object in Streaming Blender Schema

```txt
https://github.com/databeacon/level5-schemas/schemas/streamingBlender.schema.json#/properties/nct
```

Refers to our mike5-stream NCTs calculation pipeline

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                      |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :---------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [streamingBlender.schema.json\*](../../out/streamingBlender.schema.json "open original schema") |

## nct Type

`object` ([Details](streamingblender-properties-nct.md))

# nct Properties

| Property              | Type      | Required | Nullable       | Defined by                                                                                                                                                                                          |
| :-------------------- | :-------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [id](#id)             | `string`  | Optional | cannot be null | [Streaming Blender](streamingblender-properties-nct-properties-id.md "https://github.com/databeacon/level5-schemas/schemas/streamingBlender.schema.json#/properties/nct/properties/id")             |
| [flightId](#flightid) | `string`  | Optional | cannot be null | [Streaming Blender](streamingblender-properties-nct-properties-flightid.md "https://github.com/databeacon/level5-schemas/schemas/streamingBlender.schema.json#/properties/nct/properties/flightId") |
| [sectorId](#sectorid) | `string`  | Optional | cannot be null | [Streaming Blender](streamingblender-properties-nct-properties-sectorid.md "https://github.com/databeacon/level5-schemas/schemas/streamingBlender.schema.json#/properties/nct/properties/sectorId") |
| [anyPcd](#anypcd)     | `boolean` | Optional | cannot be null | [Streaming Blender](streamingblender-properties-nct-properties-anypcd.md "https://github.com/databeacon/level5-schemas/schemas/streamingBlender.schema.json#/properties/nct/properties/anyPcd")     |
| [isNct](#isnct)       | `boolean` | Optional | cannot be null | [Streaming Blender](streamingblender-properties-nct-properties-isnct.md "https://github.com/databeacon/level5-schemas/schemas/streamingBlender.schema.json#/properties/nct/properties/isNct")       |
| [mode](#mode)         | `string`  | Optional | cannot be null | [Streaming Blender](streamingblender-properties-nct-properties-mode.md "https://github.com/databeacon/level5-schemas/schemas/streamingBlender.schema.json#/properties/nct/properties/mode")         |
| [showHalo](#showhalo) | `boolean` | Optional | cannot be null | [Streaming Blender](streamingblender-properties-nct-properties-showhalo.md "https://github.com/databeacon/level5-schemas/schemas/streamingBlender.schema.json#/properties/nct/properties/showHalo") |
| [epoch](#epoch)       | `integer` | Optional | cannot be null | [Streaming Blender](streamingblender-properties-nct-properties-epoch.md "https://github.com/databeacon/level5-schemas/schemas/streamingBlender.schema.json#/properties/nct/properties/epoch")       |
| [projExit](#projexit) | `object`  | Optional | cannot be null | [Streaming Blender](streamingblender-properties-nct-properties-projexit.md "https://github.com/databeacon/level5-schemas/schemas/streamingBlender.schema.json#/properties/nct/properties/projExit") |
| [synced](#synced)     | `object`  | Optional | cannot be null | [Streaming Blender](streamingblender-properties-nct-properties-synced.md "https://github.com/databeacon/level5-schemas/schemas/streamingBlender.schema.json#/properties/nct/properties/synced")     |

## id

NCT unique identifier

`id`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Streaming Blender](streamingblender-properties-nct-properties-id.md "https://github.com/databeacon/level5-schemas/schemas/streamingBlender.schema.json#/properties/nct/properties/id")

### id Type

`string`

## flightId

NCT unique identifier

`flightId`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Streaming Blender](streamingblender-properties-nct-properties-flightid.md "https://github.com/databeacon/level5-schemas/schemas/streamingBlender.schema.json#/properties/nct/properties/flightId")

### flightId Type

`string`

## sectorId

NCT unique identifier

`sectorId`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Streaming Blender](streamingblender-properties-nct-properties-sectorid.md "https://github.com/databeacon/level5-schemas/schemas/streamingBlender.schema.json#/properties/nct/properties/sectorId")

### sectorId Type

`string`

## anyPcd

NCT unique identifier

`anyPcd`

*   is optional

*   Type: `boolean`

*   cannot be null

*   defined in: [Streaming Blender](streamingblender-properties-nct-properties-anypcd.md "https://github.com/databeacon/level5-schemas/schemas/streamingBlender.schema.json#/properties/nct/properties/anyPcd")

### anyPcd Type

`boolean`

## isNct

NCT unique identifier

`isNct`

*   is optional

*   Type: `boolean`

*   cannot be null

*   defined in: [Streaming Blender](streamingblender-properties-nct-properties-isnct.md "https://github.com/databeacon/level5-schemas/schemas/streamingBlender.schema.json#/properties/nct/properties/isNct")

### isNct Type

`boolean`

## mode

NCT unique identifier

`mode`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Streaming Blender](streamingblender-properties-nct-properties-mode.md "https://github.com/databeacon/level5-schemas/schemas/streamingBlender.schema.json#/properties/nct/properties/mode")

### mode Type

`string`

### mode Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value    | Explanation |
| :------- | :---------- |
| `"acg"`  |             |
| `"soft"` |             |

## showHalo

NCT unique identifier

`showHalo`

*   is optional

*   Type: `boolean`

*   cannot be null

*   defined in: [Streaming Blender](streamingblender-properties-nct-properties-showhalo.md "https://github.com/databeacon/level5-schemas/schemas/streamingBlender.schema.json#/properties/nct/properties/showHalo")

### showHalo Type

`boolean`

## epoch

Refers to mike5-stream calculation epoch

`epoch`

*   is optional

*   Type: `integer`

*   cannot be null

*   defined in: [Streaming Blender](streamingblender-properties-nct-properties-epoch.md "https://github.com/databeacon/level5-schemas/schemas/streamingBlender.schema.json#/properties/nct/properties/epoch")

### epoch Type

`integer`

## projExit

Projection for soft-NCTs

`projExit`

*   is optional

*   Type: `object` ([Details](streamingblender-properties-nct-properties-projexit.md))

*   cannot be null

*   defined in: [Streaming Blender](streamingblender-properties-nct-properties-projexit.md "https://github.com/databeacon/level5-schemas/schemas/streamingBlender.schema.json#/properties/nct/properties/projExit")

### projExit Type

`object` ([Details](streamingblender-properties-nct-properties-projexit.md))

## synced

Nothing to sync yet

`synced`

*   is optional

*   Type: `object` ([Details](streamingblender-properties-nct-properties-synced.md))

*   cannot be null

*   defined in: [Streaming Blender](streamingblender-properties-nct-properties-synced.md "https://github.com/databeacon/level5-schemas/schemas/streamingBlender.schema.json#/properties/nct/properties/synced")

### synced Type

`object` ([Details](streamingblender-properties-nct-properties-synced.md))
