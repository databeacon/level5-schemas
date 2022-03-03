# Flight positions Schema

```txt
/blender.schema.json#/$defs/flight/properties/points4d
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                              |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :-------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [blender.schema.json\*](../../out/streaming/blender.schema.json "open original schema") |

## points4d Type

`object` ([Flight positions](blender-defs-flight-data-properties-flight-positions.md))

# points4d Properties

| Property                | Type     | Required | Nullable       | Defined by                                                                                                        |
| :---------------------- | :------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------- |
| [message](#message)     | `object` | Optional | cannot be null | [Blender](blender-defs-point-4d.md "/blender.schema.json#/$defs/flight/properties/points4d/properties/message")   |
| [synced](#synced)       | `object` | Optional | cannot be null | [Blender](blender-defs-point-4d.md "/blender.schema.json#/$defs/flight/properties/points4d/properties/synced")    |
| [projected](#projected) | `object` | Optional | cannot be null | [Blender](blender-defs-point-4d.md "/blender.schema.json#/$defs/flight/properties/points4d/properties/projected") |

## message

A time-space position on earth

`message`

*   is optional

*   Type: `object` ([Point 4D](blender-defs-point-4d.md))

*   cannot be null

*   defined in: [Blender](blender-defs-point-4d.md "/blender.schema.json#/$defs/flight/properties/points4d/properties/message")

### message Type

`object` ([Point 4D](blender-defs-point-4d.md))

## synced

A time-space position on earth

`synced`

*   is optional

*   Type: `object` ([Point 4D](blender-defs-point-4d.md))

*   cannot be null

*   defined in: [Blender](blender-defs-point-4d.md "/blender.schema.json#/$defs/flight/properties/points4d/properties/synced")

### synced Type

`object` ([Point 4D](blender-defs-point-4d.md))

## projected

A time-space position on earth

`projected`

*   is optional

*   Type: `object` ([Point 4D](blender-defs-point-4d.md))

*   cannot be null

*   defined in: [Blender](blender-defs-point-4d.md "/blender.schema.json#/$defs/flight/properties/points4d/properties/projected")

### projected Type

`object` ([Point 4D](blender-defs-point-4d.md))
