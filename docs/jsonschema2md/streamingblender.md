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

| Property            | Type      | Required | Nullable       | Defined by                                                                                                                                                          |
| :------------------ | :-------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [epoch](#epoch)     | `integer` | Optional | cannot be null | [Streaming Blender](streamingblender-properties-epoch.md "https://github.com/databeacon/level5-schemas/schemas/streamingBlender.schema.json#/properties/epoch")     |
| [flights](#flights) | `object`  | Optional | cannot be null | [Streaming Blender](streamingblender-properties-flights.md "https://github.com/databeacon/level5-schemas/schemas/streamingBlender.schema.json#/properties/flights") |
| [nct](#nct)         | `object`  | Optional | cannot be null | [Streaming Blender](streamingblender-properties-nct.md "https://github.com/databeacon/level5-schemas/schemas/streamingBlender.schema.json#/properties/nct")         |
| [pcds](#pcds)       | `object`  | Optional | cannot be null | [Streaming Blender](streamingblender-properties-pcds.md "https://github.com/databeacon/level5-schemas/schemas/streamingBlender.schema.json#/properties/pcds")       |

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



`flights`

*   is optional

*   Type: `object` ([Details](streamingblender-properties-flights.md))

*   cannot be null

*   defined in: [Streaming Blender](streamingblender-properties-flights.md "https://github.com/databeacon/level5-schemas/schemas/streamingBlender.schema.json#/properties/flights")

### flights Type

`object` ([Details](streamingblender-properties-flights.md))

## nct

Refers to our mike5-stream NCTs calculation pipeline

`nct`

*   is optional

*   Type: `object` ([Details](streamingblender-properties-nct.md))

*   cannot be null

*   defined in: [Streaming Blender](streamingblender-properties-nct.md "https://github.com/databeacon/level5-schemas/schemas/streamingBlender.schema.json#/properties/nct")

### nct Type

`object` ([Details](streamingblender-properties-nct.md))

## pcds

Refers to our mike5-stream PCDs calculation pipeline

`pcds`

*   is optional

*   Type: `object` ([Details](streamingblender-properties-pcds.md))

*   cannot be null

*   defined in: [Streaming Blender](streamingblender-properties-pcds.md "https://github.com/databeacon/level5-schemas/schemas/streamingBlender.schema.json#/properties/pcds")

### pcds Type

`object` ([Details](streamingblender-properties-pcds.md))
