# Streaming Blender Schema

```txt
https://github.com/databeacon/level5-schemas/schemas/streamingBlender.schema.json
```

Definition the blender stream

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                    |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :-------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [streamingBlender.schema.json](../../out/streamingBlender.schema.json "open original schema") |

## Streaming Blender Type

`object` ([Streaming Blender](streamingblender.md))

# Streaming Blender Properties

| Property            | Type      | Required | Nullable       | Defined by                                                                                                                                                                             |
| :------------------ | :-------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [epoch](#epoch)     | `integer` | Optional | cannot be null | [Streaming Blender](streamingblender-properties-epoch.md "https://github.com/databeacon/level5-schemas/schemas/streamingBlender.schema.json#/properties/epoch")                        |
| [flights](#flights) | `object`  | Optional | cannot be null | [Streaming Blender](streamingblender-properties-flight.md "https://github.com/databeacon/level5-schemas/schemas/streamingBlender.schema.json#/properties/flights")                     |
| [nct](#nct)         | `object`  | Optional | cannot be null | [Streaming Blender](streamingblender-properties-non-conflicting-flights.md "https://github.com/databeacon/level5-schemas/schemas/streamingBlender.schema.json#/properties/nct")        |
| [pcds](#pcds)       | `object`  | Optional | cannot be null | [Streaming Blender](streamingblender-properties-potential-conflict-detection-.md "https://github.com/databeacon/level5-schemas/schemas/streamingBlender.schema.json#/properties/pcds") |

## epoch

Sync epoch, i.e., time on which this will be represented on map

`epoch`

*   is optional

*   Type: `integer`

*   cannot be null

*   defined in: [Streaming Blender](streamingblender-properties-epoch.md "https://github.com/databeacon/level5-schemas/schemas/streamingBlender.schema.json#/properties/epoch")

### epoch Type

`integer`

## flights

Represents a single flight

`flights`

*   is optional

*   Type: `object` ([Flight](streamingblender-properties-flight.md))

*   cannot be null

*   defined in: [Streaming Blender](streamingblender-properties-flight.md "https://github.com/databeacon/level5-schemas/schemas/streamingBlender.schema.json#/properties/flights")

### flights Type

`object` ([Flight](streamingblender-properties-flight.md))

## nct

Refers to our mike5-stream NCTs calculation pipeline

`nct`

*   is optional

*   Type: `object` ([Non-conflicting flights](streamingblender-properties-non-conflicting-flights.md))

*   cannot be null

*   defined in: [Streaming Blender](streamingblender-properties-non-conflicting-flights.md "https://github.com/databeacon/level5-schemas/schemas/streamingBlender.schema.json#/properties/nct")

### nct Type

`object` ([Non-conflicting flights](streamingblender-properties-non-conflicting-flights.md))

## pcds

Refers to our mike5-stream PCDs calculation pipeline

`pcds`

*   is optional

*   Type: `object` ([Potential conflict detection ](streamingblender-properties-potential-conflict-detection-.md))

*   cannot be null

*   defined in: [Streaming Blender](streamingblender-properties-potential-conflict-detection-.md "https://github.com/databeacon/level5-schemas/schemas/streamingBlender.schema.json#/properties/pcds")

### pcds Type

`object` ([Potential conflict detection ](streamingblender-properties-potential-conflict-detection-.md))
