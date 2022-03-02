# Ownship Schema

```txt
https://github.com/databeacon/level5-schemas/schemas/streaming/blender.schema.json#/properties/pcds/properties/ownship
```

Ownship position and CPA

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                              |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :-------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [blender.schema.json\*](../../out/streaming/blender.schema.json "open original schema") |

## ownship Type

`object` ([Ownship](blender-properties-potential-conflict-detection--properties-ownship.md))

# ownship Properties

| Property              | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                                                                             |
| :-------------------- | :------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [id](#id)             | `string` | Optional | cannot be null | [Streaming Blender](blender-properties-potential-conflict-detection--properties-ownship-properties-id.md "https://github.com/databeacon/level5-schemas/schemas/streaming/blender.schema.json#/properties/pcds/properties/ownship/properties/id")                       |
| [location](#location) | `object` | Optional | cannot be null | [Streaming Blender](blender-properties-potential-conflict-detection--properties-ownship-properties-projected-position.md "https://github.com/databeacon/level5-schemas/schemas/streaming/blender.schema.json#/properties/pcds/properties/ownship/properties/location") |
| [cpa](#cpa)           | `object` | Optional | cannot be null | [Streaming Blender](blender-properties-potential-conflict-detection--properties-ownship-properties-projected-position-1.md "https://github.com/databeacon/level5-schemas/schemas/streaming/blender.schema.json#/properties/pcds/properties/ownship/properties/cpa")    |

## id



`id`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Streaming Blender](blender-properties-potential-conflict-detection--properties-ownship-properties-id.md "https://github.com/databeacon/level5-schemas/schemas/streaming/blender.schema.json#/properties/pcds/properties/ownship/properties/id")

### id Type

`string`

## location

4D Projected position

`location`

*   is optional

*   Type: `object` ([Projected position](blender-properties-potential-conflict-detection--properties-ownship-properties-projected-position.md))

*   cannot be null

*   defined in: [Streaming Blender](blender-properties-potential-conflict-detection--properties-ownship-properties-projected-position.md "https://github.com/databeacon/level5-schemas/schemas/streaming/blender.schema.json#/properties/pcds/properties/ownship/properties/location")

### location Type

`object` ([Projected position](blender-properties-potential-conflict-detection--properties-ownship-properties-projected-position.md))

## cpa

4D Projected position

`cpa`

*   is optional

*   Type: `object` ([Projected position](blender-properties-potential-conflict-detection--properties-ownship-properties-projected-position-1.md))

*   cannot be null

*   defined in: [Streaming Blender](blender-properties-potential-conflict-detection--properties-ownship-properties-projected-position-1.md "https://github.com/databeacon/level5-schemas/schemas/streaming/blender.schema.json#/properties/pcds/properties/ownship/properties/cpa")

### cpa Type

`object` ([Projected position](blender-properties-potential-conflict-detection--properties-ownship-properties-projected-position-1.md))
