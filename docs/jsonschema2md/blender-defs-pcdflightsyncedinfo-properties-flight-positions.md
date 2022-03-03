# Flight positions Schema

```txt
/blender.schema.json#/$defs/pcdFlightSyncedInfo/properties/points4d
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                              |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :-------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [blender.schema.json\*](../../out/streaming/blender.schema.json "open original schema") |

## points4d Type

`object` ([Flight positions](blender-defs-pcdflightsyncedinfo-properties-flight-positions.md))

# points4d Properties

| Property          | Type     | Required | Nullable       | Defined by                                                                                                                  |
| :---------------- | :------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------- |
| [cpa](#cpa)       | `object` | Required | cannot be null | [Blender](blender-defs-point-4d.md "/blender.schema.json#/$defs/pcdFlightSyncedInfo/properties/points4d/properties/cpa")    |
| [synced](#synced) | `object` | Required | cannot be null | [Blender](blender-defs-point-4d.md "/blender.schema.json#/$defs/pcdFlightSyncedInfo/properties/points4d/properties/synced") |

## cpa

A time-space position on earth

`cpa`

*   is required

*   Type: `object` ([Point 4D](blender-defs-point-4d.md))

*   cannot be null

*   defined in: [Blender](blender-defs-point-4d.md "/blender.schema.json#/$defs/pcdFlightSyncedInfo/properties/points4d/properties/cpa")

### cpa Type

`object` ([Point 4D](blender-defs-point-4d.md))

## synced

A time-space position on earth

`synced`

*   is required

*   Type: `object` ([Point 4D](blender-defs-point-4d.md))

*   cannot be null

*   defined in: [Blender](blender-defs-point-4d.md "/blender.schema.json#/$defs/pcdFlightSyncedInfo/properties/points4d/properties/synced")

### synced Type

`object` ([Point 4D](blender-defs-point-4d.md))
