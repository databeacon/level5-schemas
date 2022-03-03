# Point 4D Schema

```txt
https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/blender/point4d.schema.json
```

A time-space position on earth

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                    |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :-------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [point4d.schema.json](../../out/streaming/blender/point4d.schema.json "open original schema") |

## Point 4D Type

`object` ([Point 4D](point4d.md))

# Point 4D Properties

| Property        | Type      | Required | Nullable       | Defined by                                                                                                                                                                                 |
| :-------------- | :-------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [epoch](#epoch) | `integer` | Required | cannot be null | [Point 4D](point4d-properties-time-posix-in-seconds.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/blender/point4d.schema.json#/properties/epoch") |
| [lat](#lat)     | `number`  | Required | cannot be null | [Point 4D](point4d-properties-lat.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/blender/point4d.schema.json#/properties/lat")                     |
| [lng](#lng)     | `number`  | Required | cannot be null | [Point 4D](point4d-properties-lng.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/blender/point4d.schema.json#/properties/lng")                     |
| [alt](#alt)     | `number`  | Required | cannot be null | [Point 4D](point4d-properties-alt.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/blender/point4d.schema.json#/properties/alt")                     |

## epoch



`epoch`

*   is required

*   Type: `integer` ([Time, POSIX in seconds](point4d-properties-time-posix-in-seconds.md))

*   cannot be null

*   defined in: [Point 4D](point4d-properties-time-posix-in-seconds.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/blender/point4d.schema.json#/properties/epoch")

### epoch Type

`integer` ([Time, POSIX in seconds](point4d-properties-time-posix-in-seconds.md))

## lat

Latitude in degrees

`lat`

*   is required

*   Type: `number`

*   cannot be null

*   defined in: [Point 4D](point4d-properties-lat.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/blender/point4d.schema.json#/properties/lat")

### lat Type

`number`

## lng

Longitude in degrees

`lng`

*   is required

*   Type: `number`

*   cannot be null

*   defined in: [Point 4D](point4d-properties-lng.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/blender/point4d.schema.json#/properties/lng")

### lng Type

`number`

## alt

Altitude in feet

`alt`

*   is required

*   Type: `number`

*   cannot be null

*   defined in: [Point 4D](point4d-properties-alt.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/blender/point4d.schema.json#/properties/alt")

### alt Type

`number`
