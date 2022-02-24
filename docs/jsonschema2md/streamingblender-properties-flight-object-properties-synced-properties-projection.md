# Untitled object in Streaming Blender Schema

```txt
https://github.com/databeacon/level5-schemas/schemas/streamingBlender.schema.json#/properties/flights/properties/synced/properties/projection
```

4D location at 60s ahead of sync epoch

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                      |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :---------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [streamingBlender.schema.json\*](../../out/streamingBlender.schema.json "open original schema") |

## projection Type

`object` ([Details](streamingblender-properties-flight-object-properties-synced-properties-projection.md))

# projection Properties

| Property    | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                                                                                              |
| :---------- | :------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [lat](#lat) | `number` | Optional | cannot be null | [Streaming Blender](streamingblender-properties-flight-object-properties-synced-properties-projection-properties-lat.md "https://github.com/databeacon/level5-schemas/schemas/streamingBlender.schema.json#/properties/flights/properties/synced/properties/projection/properties/lat") |
| [lng](#lng) | `number` | Optional | cannot be null | [Streaming Blender](streamingblender-properties-flight-object-properties-synced-properties-projection-properties-lng.md "https://github.com/databeacon/level5-schemas/schemas/streamingBlender.schema.json#/properties/flights/properties/synced/properties/projection/properties/lng") |
| [alt](#alt) | `number` | Optional | cannot be null | [Streaming Blender](streamingblender-properties-flight-object-properties-synced-properties-projection-properties-alt.md "https://github.com/databeacon/level5-schemas/schemas/streamingBlender.schema.json#/properties/flights/properties/synced/properties/projection/properties/alt") |

## lat

Projection latitude 60s ahead in degrees

`lat`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [Streaming Blender](streamingblender-properties-flight-object-properties-synced-properties-projection-properties-lat.md "https://github.com/databeacon/level5-schemas/schemas/streamingBlender.schema.json#/properties/flights/properties/synced/properties/projection/properties/lat")

### lat Type

`number`

## lng

Projection longitude 60s ahead in degrees

`lng`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [Streaming Blender](streamingblender-properties-flight-object-properties-synced-properties-projection-properties-lng.md "https://github.com/databeacon/level5-schemas/schemas/streamingBlender.schema.json#/properties/flights/properties/synced/properties/projection/properties/lng")

### lng Type

`number`

## alt

Projection altitude. Never used

`alt`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [Streaming Blender](streamingblender-properties-flight-object-properties-synced-properties-projection-properties-alt.md "https://github.com/databeacon/level5-schemas/schemas/streamingBlender.schema.json#/properties/flights/properties/synced/properties/projection/properties/alt")

### alt Type

`number`
