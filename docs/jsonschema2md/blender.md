# Blender Schema

```txt
https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/blender/blender.schema.json
```

Asynchronous topics merging.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                    |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :-------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [blender.schema.json](../../out/streaming/blender/blender.schema.json "open original schema") |

## Blender Type

`object` ([Blender](blender.md))

# Blender Properties

| Property            | Type      | Required | Nullable       | Defined by                                                                                                                                                                                         |
| :------------------ | :-------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [epoch](#epoch)     | `integer` | Required | cannot be null | [Blender](blender-properties-synched-time-posix-in-seconds-.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/blender/blender.schema.json#/properties/epoch") |
| [flights](#flights) | `array`   | Required | cannot be null | [Blender](blender-properties-flights-data.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/blender/blender.schema.json#/properties/flights")                 |

## epoch



`epoch`

*   is required

*   Type: `integer` ([Synched time, POSIX in seconds. ](blender-properties-synched-time-posix-in-seconds-.md))

*   cannot be null

*   defined in: [Blender](blender-properties-synched-time-posix-in-seconds-.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/blender/blender.schema.json#/properties/epoch")

### epoch Type

`integer` ([Synched time, POSIX in seconds. ](blender-properties-synched-time-posix-in-seconds-.md))

## flights



`flights`

*   is required

*   Type: `object[]` ([Flight data](flight.md))

*   cannot be null

*   defined in: [Blender](blender-properties-flights-data.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/blender/blender.schema.json#/properties/flights")

### flights Type

`object[]` ([Flight data](flight.md))
