# Location object Schema

```txt
https://github.com/databeacon/level5-schemas/schemas/streamingBlender.schema.json#/properties/flights/properties/location
```

Aircraft 4D position

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                      |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :---------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [streamingBlender.schema.json\*](../../out/streamingBlender.schema.json "open original schema") |

## location Type

`object` ([Location object](streamingblender-properties-flight-object-properties-location-object.md))

# location Properties

| Property    | Type      | Required | Nullable       | Defined by                                                                                                                                                                                                                                             |
| :---------- | :-------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [lat](#lat) | `number`  | Optional | cannot be null | [Streaming Blender](streamingblender-properties-flight-object-properties-location-object-properties-lat.md "https://github.com/databeacon/level5-schemas/schemas/streamingBlender.schema.json#/properties/flights/properties/location/properties/lat") |
| [lng](#lng) | `number`  | Optional | cannot be null | [Streaming Blender](streamingblender-properties-flight-object-properties-location-object-properties-lng.md "https://github.com/databeacon/level5-schemas/schemas/streamingBlender.schema.json#/properties/flights/properties/location/properties/lng") |
| [alt](#alt) | `integer` | Optional | cannot be null | [Streaming Blender](streamingblender-properties-flight-object-properties-location-object-properties-alt.md "https://github.com/databeacon/level5-schemas/schemas/streamingBlender.schema.json#/properties/flights/properties/location/properties/alt") |

## lat

Aircraft position latitude in degrees

`lat`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [Streaming Blender](streamingblender-properties-flight-object-properties-location-object-properties-lat.md "https://github.com/databeacon/level5-schemas/schemas/streamingBlender.schema.json#/properties/flights/properties/location/properties/lat")

### lat Type

`number`

## lng

Aircraft position longitude in degrees

`lng`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [Streaming Blender](streamingblender-properties-flight-object-properties-location-object-properties-lng.md "https://github.com/databeacon/level5-schemas/schemas/streamingBlender.schema.json#/properties/flights/properties/location/properties/lng")

### lng Type

`number`

## alt

Aircraft position altitude in feet

`alt`

*   is optional

*   Type: `integer`

*   cannot be null

*   defined in: [Streaming Blender](streamingblender-properties-flight-object-properties-location-object-properties-alt.md "https://github.com/databeacon/level5-schemas/schemas/streamingBlender.schema.json#/properties/flights/properties/location/properties/alt")

### alt Type

`integer`
