# Ownship flight Schema

```txt
https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/blender/pcd.schema.json#/properties/ownship
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                              |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :-------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [pcd.schema.json\*](../../out/streaming/blender/pcd.schema.json "open original schema") |

## ownship Type

`object` ([Ownship flight](pcd-properties-ownship-flight.md))

# ownship Properties

| Property              | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                                              |
| :-------------------- | :------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [id](#id)             | `string` | Required | cannot be null | [Potential conflict](pcd-properties-ownship-flight-properties-id.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/blender/pcd.schema.json#/properties/ownship/properties/id")                     |
| [points4d](#points4d) | `object` | Required | cannot be null | [Potential conflict](pcd-properties-ownship-flight-properties-flight-positions.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/blender/pcd.schema.json#/properties/ownship/properties/points4d") |

## id

Flight unique identifier

`id`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Potential conflict](pcd-properties-ownship-flight-properties-id.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/blender/pcd.schema.json#/properties/ownship/properties/id")

### id Type

`string`

## points4d



`points4d`

*   is required

*   Type: `object` ([Flight positions](pcd-properties-ownship-flight-properties-flight-positions.md))

*   cannot be null

*   defined in: [Potential conflict](pcd-properties-ownship-flight-properties-flight-positions.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/blender/pcd.schema.json#/properties/ownship/properties/points4d")

### points4d Type

`object` ([Flight positions](pcd-properties-ownship-flight-properties-flight-positions.md))
