# Streaming Blender Schema

```txt
https://github.com/databeacon/level5-schemas/schemas/streamingBlender.json
```

Definition the blender stream

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                               |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [blender.schema.json](../out/blender.schema.json "open original schema") |

## Streaming Blender Type

`object` ([Streaming Blender](blender.md))

# Streaming Blender Properties

| Property            | Type      | Required | Nullable       | Defined by                                                                                                                                          |
| :------------------ | :-------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| [epoch](#epoch)     | `integer` | Optional | cannot be null | [Streaming Blender](blender-properties-epoch.md "https://github.com/databeacon/level5-schemas/schemas/streamingBlender.json#/properties/epoch")     |
| [flights](#flights) | `object`  | Optional | cannot be null | [Streaming Blender](blender-properties-flights.md "https://github.com/databeacon/level5-schemas/schemas/streamingBlender.json#/properties/flights") |
| [nct](#nct)         | `object`  | Optional | cannot be null | [Streaming Blender](blender-properties-nct.md "https://github.com/databeacon/level5-schemas/schemas/streamingBlender.json#/properties/nct")         |
| [pcds](#pcds)       | `object`  | Optional | cannot be null | [Streaming Blender](blender-properties-pcds.md "https://github.com/databeacon/level5-schemas/schemas/streamingBlender.json#/properties/pcds")       |

## epoch

Sync epoch, i.e., time on which this will be represented on map

`epoch`

*   is optional

*   Type: `integer`

*   cannot be null

*   defined in: [Streaming Blender](blender-properties-epoch.md "https://github.com/databeacon/level5-schemas/schemas/streamingBlender.json#/properties/epoch")

### epoch Type

`integer`

## flights



`flights`

*   is optional

*   Type: `object` ([Details](blender-properties-flights.md))

*   cannot be null

*   defined in: [Streaming Blender](blender-properties-flights.md "https://github.com/databeacon/level5-schemas/schemas/streamingBlender.json#/properties/flights")

### flights Type

`object` ([Details](blender-properties-flights.md))

## nct

Refers to our mike5-stream NCTs calculation pipeline

`nct`

*   is optional

*   Type: `object` ([Details](blender-properties-nct.md))

*   cannot be null

*   defined in: [Streaming Blender](blender-properties-nct.md "https://github.com/databeacon/level5-schemas/schemas/streamingBlender.json#/properties/nct")

### nct Type

`object` ([Details](blender-properties-nct.md))

## pcds

Refers to our mike5-stream PCDs calculation pipeline

`pcds`

*   is optional

*   Type: `object` ([Details](blender-properties-pcds.md))

*   cannot be null

*   defined in: [Streaming Blender](blender-properties-pcds.md "https://github.com/databeacon/level5-schemas/schemas/streamingBlender.json#/properties/pcds")

### pcds Type

`object` ([Details](blender-properties-pcds.md))
