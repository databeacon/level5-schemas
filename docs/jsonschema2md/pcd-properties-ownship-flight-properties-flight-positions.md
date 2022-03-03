# Flight positions Schema

```txt
https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/blender/pcd.schema.json#/properties/ownship/properties/points4d
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                              |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :-------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [pcd.schema.json\*](../../out/streaming/blender/pcd.schema.json "open original schema") |

## points4d Type

`object` ([Flight positions](pcd-properties-ownship-flight-properties-flight-positions.md))

# points4d Properties

| Property          | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                  |
| :---------------- | :------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [cpa](#cpa)       | `object` | Required | cannot be null | [Potential conflict](point4d.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/blender/point4d.schema.json#/properties/ownship/properties/points4d/properties/cpa")    |
| [synced](#synced) | `object` | Required | cannot be null | [Potential conflict](point4d.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/blender/point4d.schema.json#/properties/ownship/properties/points4d/properties/synced") |

## cpa

A time-space position on earth

`cpa`

*   is required

*   Type: `object` ([Point 4D](point4d.md))

*   cannot be null

*   defined in: [Potential conflict](point4d.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/blender/point4d.schema.json#/properties/ownship/properties/points4d/properties/cpa")

### cpa Type

`object` ([Point 4D](point4d.md))

## synced

A time-space position on earth

`synced`

*   is required

*   Type: `object` ([Point 4D](point4d.md))

*   cannot be null

*   defined in: [Potential conflict](point4d.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/blender/point4d.schema.json#/properties/ownship/properties/points4d/properties/synced")

### synced Type

`object` ([Point 4D](point4d.md))
