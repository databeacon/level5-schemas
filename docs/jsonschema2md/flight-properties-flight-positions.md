# Flight positions Schema

```txt
https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/blender/flight.schema.json#/properties/points4d
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                    |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :-------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [flight.schema.json\*](../../out/streaming/blender/flight.schema.json "open original schema") |

## points4d Type

`object` ([Flight positions](flight-properties-flight-positions.md))

# points4d Properties

| Property                | Type     | Required | Nullable       | Defined by                                                                                                                                                                           |
| :---------------------- | :------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [message](#message)     | `object` | Required | cannot be null | [Flight data](point4d.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/blender/point4d.schema.json#/properties/points4d/properties/message")   |
| [synced](#synced)       | `object` | Required | cannot be null | [Flight data](point4d.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/blender/point4d.schema.json#/properties/points4d/properties/synced")    |
| [projected](#projected) | `object` | Required | cannot be null | [Flight data](point4d.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/blender/point4d.schema.json#/properties/points4d/properties/projected") |

## message

A time-space position on earth

`message`

*   is required

*   Type: `object` ([Point 4D](point4d.md))

*   cannot be null

*   defined in: [Flight data](point4d.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/blender/point4d.schema.json#/properties/points4d/properties/message")

### message Type

`object` ([Point 4D](point4d.md))

## synced

A time-space position on earth

`synced`

*   is required

*   Type: `object` ([Point 4D](point4d.md))

*   cannot be null

*   defined in: [Flight data](point4d.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/blender/point4d.schema.json#/properties/points4d/properties/synced")

### synced Type

`object` ([Point 4D](point4d.md))

## projected

A time-space position on earth

`projected`

*   is required

*   Type: `object` ([Point 4D](point4d.md))

*   cannot be null

*   defined in: [Flight data](point4d.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/blender/point4d.schema.json#/properties/points4d/properties/projected")

### projected Type

`object` ([Point 4D](point4d.md))
