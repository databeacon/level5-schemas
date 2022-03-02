# Projected position Schema

```txt
https://github.com/databeacon/level5-schemas/schemas/streaming/blender.schema.json#/properties/pcds/properties/ownship/properties/location
```

4D Projected position

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                              |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :-------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [blender.schema.json\*](../../out/streaming/blender.schema.json "open original schema") |

## location Type

`object` ([Projected position](blender-properties-potential-conflict-detection--properties-ownship-properties-projected-position.md))

# location Properties

| Property    | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                                                                                                           |
| :---------- | :------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [lat](#lat) | `number` | Optional | cannot be null | [Streaming Blender](blender-properties-potential-conflict-detection--properties-ownship-properties-projected-position-properties-lat.md "https://github.com/databeacon/level5-schemas/schemas/streaming/blender.schema.json#/properties/pcds/properties/ownship/properties/location/properties/lat") |
| [lng](#lng) | `number` | Optional | cannot be null | [Streaming Blender](blender-properties-potential-conflict-detection--properties-ownship-properties-projected-position-properties-lng.md "https://github.com/databeacon/level5-schemas/schemas/streaming/blender.schema.json#/properties/pcds/properties/ownship/properties/location/properties/lng") |
| [alt](#alt) | `number` | Optional | cannot be null | [Streaming Blender](blender-properties-potential-conflict-detection--properties-ownship-properties-projected-position-properties-alt.md "https://github.com/databeacon/level5-schemas/schemas/streaming/blender.schema.json#/properties/pcds/properties/ownship/properties/location/properties/alt") |

## lat

flight location.lat when PCD was computed

`lat`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [Streaming Blender](blender-properties-potential-conflict-detection--properties-ownship-properties-projected-position-properties-lat.md "https://github.com/databeacon/level5-schemas/schemas/streaming/blender.schema.json#/properties/pcds/properties/ownship/properties/location/properties/lat")

### lat Type

`number`

## lng

flight location.lng when PCD was computed

`lng`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [Streaming Blender](blender-properties-potential-conflict-detection--properties-ownship-properties-projected-position-properties-lng.md "https://github.com/databeacon/level5-schemas/schemas/streaming/blender.schema.json#/properties/pcds/properties/ownship/properties/location/properties/lng")

### lng Type

`number`

## alt

Never calculated

`alt`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [Streaming Blender](blender-properties-potential-conflict-detection--properties-ownship-properties-projected-position-properties-alt.md "https://github.com/databeacon/level5-schemas/schemas/streaming/blender.schema.json#/properties/pcds/properties/ownship/properties/location/properties/alt")

### alt Type

`number`
