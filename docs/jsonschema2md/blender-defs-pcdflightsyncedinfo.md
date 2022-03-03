# Untitled object in Blender Schema

```txt
/blender.schema.json#/$defs/pcdFlightSyncedInfo
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                              |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :-------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [blender.schema.json\*](../../out/streaming/blender.schema.json "open original schema") |

## pcdFlightSyncedInfo Type

`object` ([Details](blender-defs-pcdflightsyncedinfo.md))

# pcdFlightSyncedInfo Properties

| Property              | Type          | Required | Nullable       | Defined by                                                                                                                                       |
| :-------------------- | :------------ | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------- |
| [id](#id)             | Not specified | Required | cannot be null | [Blender](blender-defs-pcdflightsyncedinfo-properties-id.md "/blender.schema.json#/$defs/pcdFlightSyncedInfo/properties/id")                     |
| [points4d](#points4d) | `object`      | Required | cannot be null | [Blender](blender-defs-pcdflightsyncedinfo-properties-flight-positions.md "/blender.schema.json#/$defs/pcdFlightSyncedInfo/properties/points4d") |

## id



`id`

*   is required

*   Type: unknown

*   cannot be null

*   defined in: [Blender](blender-defs-pcdflightsyncedinfo-properties-id.md "/blender.schema.json#/$defs/pcdFlightSyncedInfo/properties/id")

### id Type

unknown

## points4d



`points4d`

*   is required

*   Type: `object` ([Flight positions](blender-defs-pcdflightsyncedinfo-properties-flight-positions.md))

*   cannot be null

*   defined in: [Blender](blender-defs-pcdflightsyncedinfo-properties-flight-positions.md "/blender.schema.json#/$defs/pcdFlightSyncedInfo/properties/points4d")

### points4d Type

`object` ([Flight positions](blender-defs-pcdflightsyncedinfo-properties-flight-positions.md))
