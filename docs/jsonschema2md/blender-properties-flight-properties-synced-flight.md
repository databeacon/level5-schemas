# Synced Flight Schema

```txt
https://github.com/databeacon/level5-schemas/schemas/streaming/blender.schema.json#/properties/flights/properties/synced
```

Synced properties of the Flight object

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                              |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :-------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [blender.schema.json\*](../../out/streaming/blender.schema.json "open original schema") |

## synced Type

`object` ([Synced Flight](blender-properties-flight-properties-synced-flight.md))

# synced Properties

| Property                  | Type      | Required | Nullable       | Defined by                                                                                                                                                                                                                                                 |
| :------------------------ | :-------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [epoch](#epoch)           | `integer` | Optional | cannot be null | [Streaming Blender](blender-properties-flight-properties-synced-flight-properties-epoch.md "https://github.com/databeacon/level5-schemas/schemas/streaming/blender.schema.json#/properties/flights/properties/synced/properties/epoch")                    |
| [location](#location)     | `object`  | Optional | cannot be null | [Streaming Blender](blender-properties-flight-properties-synced-flight-properties-synced-position.md "https://github.com/databeacon/level5-schemas/schemas/streaming/blender.schema.json#/properties/flights/properties/synced/properties/location")       |
| [projection](#projection) | `object`  | Optional | cannot be null | [Streaming Blender](blender-properties-flight-properties-synced-flight-properties-position-projection.md "https://github.com/databeacon/level5-schemas/schemas/streaming/blender.schema.json#/properties/flights/properties/synced/properties/projection") |

## epoch

Should match position epoch

`epoch`

*   is optional

*   Type: `integer`

*   cannot be null

*   defined in: [Streaming Blender](blender-properties-flight-properties-synced-flight-properties-epoch.md "https://github.com/databeacon/level5-schemas/schemas/streaming/blender.schema.json#/properties/flights/properties/synced/properties/epoch")

### epoch Type

`integer`

## location

Aircraft synced 4D location

`location`

*   is optional

*   Type: `object` ([Synced position](blender-properties-flight-properties-synced-flight-properties-synced-position.md))

*   cannot be null

*   defined in: [Streaming Blender](blender-properties-flight-properties-synced-flight-properties-synced-position.md "https://github.com/databeacon/level5-schemas/schemas/streaming/blender.schema.json#/properties/flights/properties/synced/properties/location")

### location Type

`object` ([Synced position](blender-properties-flight-properties-synced-flight-properties-synced-position.md))

## projection

4D location at 60s ahead of sync epoch

`projection`

*   is optional

*   Type: `object` ([Position projection](blender-properties-flight-properties-synced-flight-properties-position-projection.md))

*   cannot be null

*   defined in: [Streaming Blender](blender-properties-flight-properties-synced-flight-properties-position-projection.md "https://github.com/databeacon/level5-schemas/schemas/streaming/blender.schema.json#/properties/flights/properties/synced/properties/projection")

### projection Type

`object` ([Position projection](blender-properties-flight-properties-synced-flight-properties-position-projection.md))
