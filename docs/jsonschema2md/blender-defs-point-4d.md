# Point 4D Schema

```txt
/blender.schema.json#/$defs/pcdFlightSyncedInfo/properties/points4d/properties/synced
```

A time-space position on earth

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                              |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :-------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [blender.schema.json\*](../../out/streaming/blender.schema.json "open original schema") |

## synced Type

`object` ([Point 4D](blender-defs-point-4d.md))

# synced Properties

| Property        | Type      | Required | Nullable       | Defined by                                                                                                                  |
| :-------------- | :-------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------- |
| [epoch](#epoch) | `integer` | Required | cannot be null | [Blender](blender-defs-point-4d-properties-time-posix-in-seconds.md "/blender.schema.json#/$defs/point4d/properties/epoch") |
| [lat](#lat)     | `number`  | Required | cannot be null | [Blender](blender-defs-point-4d-properties-lat.md "/blender.schema.json#/$defs/point4d/properties/lat")                     |
| [lng](#lng)     | `number`  | Required | cannot be null | [Blender](blender-defs-point-4d-properties-lng.md "/blender.schema.json#/$defs/point4d/properties/lng")                     |
| [alt](#alt)     | `number`  | Required | cannot be null | [Blender](blender-defs-point-4d-properties-alt.md "/blender.schema.json#/$defs/point4d/properties/alt")                     |

## epoch



`epoch`

*   is required

*   Type: `integer` ([Time, POSIX in seconds](blender-defs-point-4d-properties-time-posix-in-seconds.md))

*   cannot be null

*   defined in: [Blender](blender-defs-point-4d-properties-time-posix-in-seconds.md "/blender.schema.json#/$defs/point4d/properties/epoch")

### epoch Type

`integer` ([Time, POSIX in seconds](blender-defs-point-4d-properties-time-posix-in-seconds.md))

## lat

Latitude in degrees

`lat`

*   is required

*   Type: `number`

*   cannot be null

*   defined in: [Blender](blender-defs-point-4d-properties-lat.md "/blender.schema.json#/$defs/point4d/properties/lat")

### lat Type

`number`

## lng

Longitude in degrees

`lng`

*   is required

*   Type: `number`

*   cannot be null

*   defined in: [Blender](blender-defs-point-4d-properties-lng.md "/blender.schema.json#/$defs/point4d/properties/lng")

### lng Type

`number`

## alt

Altitude in feet

`alt`

*   is required

*   Type: `number`

*   cannot be null

*   defined in: [Blender](blender-defs-point-4d-properties-alt.md "/blender.schema.json#/$defs/point4d/properties/alt")

### alt Type

`number`
