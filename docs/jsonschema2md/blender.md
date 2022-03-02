# Streaming Blender Schema

```txt
https://github.com/databeacon/level5-schemas/schemas/streaming/blender.schema.json
```

Definition the blender stream

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                            |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [blender.schema.json](../../out/streaming/blender.schema.json "open original schema") |

## Streaming Blender Type

`object` ([Streaming Blender](blender.md))

# Streaming Blender Properties

| Property            | Type      | Required | Nullable       | Defined by                                                                                                                                                                     |
| :------------------ | :-------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [epoch](#epoch)     | `integer` | Optional | cannot be null | [Streaming Blender](blender-properties-epoch.md "https://github.com/databeacon/level5-schemas/schemas/streaming/blender.schema.json#/properties/epoch")                        |
| [flights](#flights) | `object`  | Optional | cannot be null | [Streaming Blender](blender-properties-flight.md "https://github.com/databeacon/level5-schemas/schemas/streaming/blender.schema.json#/properties/flights")                     |
| [nct](#nct)         | `object`  | Optional | cannot be null | [Streaming Blender](blender-properties-non-conflicting-flights.md "https://github.com/databeacon/level5-schemas/schemas/streaming/blender.schema.json#/properties/nct")        |
| [pcds](#pcds)       | `object`  | Optional | cannot be null | [Streaming Blender](blender-properties-potential-conflict-detection-.md "https://github.com/databeacon/level5-schemas/schemas/streaming/blender.schema.json#/properties/pcds") |

## epoch

Sync epoch, i.e., time on which this will be represented on map

`epoch`

*   is optional

*   Type: `integer`

*   cannot be null

*   defined in: [Streaming Blender](blender-properties-epoch.md "https://github.com/databeacon/level5-schemas/schemas/streaming/blender.schema.json#/properties/epoch")

### epoch Type

`integer`

## flights

Represents a single flight

`flights`

*   is optional

*   Type: `object` ([Flight](blender-properties-flight.md))

*   cannot be null

*   defined in: [Streaming Blender](blender-properties-flight.md "https://github.com/databeacon/level5-schemas/schemas/streaming/blender.schema.json#/properties/flights")

### flights Type

`object` ([Flight](blender-properties-flight.md))

## nct

Refers to our mike5-stream NCTs calculation pipeline

`nct`

*   is optional

*   Type: `object` ([Non-conflicting flights](blender-properties-non-conflicting-flights.md))

*   cannot be null

*   defined in: [Streaming Blender](blender-properties-non-conflicting-flights.md "https://github.com/databeacon/level5-schemas/schemas/streaming/blender.schema.json#/properties/nct")

### nct Type

`object` ([Non-conflicting flights](blender-properties-non-conflicting-flights.md))

## pcds

Refers to our mike5-stream PCDs calculation pipeline

`pcds`

*   is optional

*   Type: `object` ([Potential conflict detection ](blender-properties-potential-conflict-detection-.md))

*   cannot be null

*   defined in: [Streaming Blender](blender-properties-potential-conflict-detection-.md "https://github.com/databeacon/level5-schemas/schemas/streaming/blender.schema.json#/properties/pcds")

### pcds Type

`object` ([Potential conflict detection ](blender-properties-potential-conflict-detection-.md))
