# Intruder Schema

```txt
https://github.com/databeacon/level5-schemas/schemas/streaming/blender.schema.json#/properties/pcds/properties/intruder
```

Intruder position and CPA

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                              |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :-------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [blender.schema.json\*](../../out/streaming/blender.schema.json "open original schema") |

## intruder Type

`object` ([Intruder](blender-properties-potential-conflict-detection--properties-intruder.md))

# intruder Properties

| Property              | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                                                                               |
| :-------------------- | :------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [id](#id)             | `string` | Optional | cannot be null | [Streaming Blender](blender-properties-potential-conflict-detection--properties-intruder-properties-id.md "https://github.com/databeacon/level5-schemas/schemas/streaming/blender.schema.json#/properties/pcds/properties/intruder/properties/id")                       |
| [location](#location) | `object` | Optional | cannot be null | [Streaming Blender](blender-properties-potential-conflict-detection--properties-intruder-properties-projected-position.md "https://github.com/databeacon/level5-schemas/schemas/streaming/blender.schema.json#/properties/pcds/properties/intruder/properties/location") |
| [cpa](#cpa)           | `object` | Optional | cannot be null | [Streaming Blender](blender-properties-potential-conflict-detection--properties-intruder-properties-projected-cpa.md "https://github.com/databeacon/level5-schemas/schemas/streaming/blender.schema.json#/properties/pcds/properties/intruder/properties/cpa")           |

## id



`id`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Streaming Blender](blender-properties-potential-conflict-detection--properties-intruder-properties-id.md "https://github.com/databeacon/level5-schemas/schemas/streaming/blender.schema.json#/properties/pcds/properties/intruder/properties/id")

### id Type

`string`

## location

4D Projected position

`location`

*   is optional

*   Type: `object` ([Projected position](blender-properties-potential-conflict-detection--properties-intruder-properties-projected-position.md))

*   cannot be null

*   defined in: [Streaming Blender](blender-properties-potential-conflict-detection--properties-intruder-properties-projected-position.md "https://github.com/databeacon/level5-schemas/schemas/streaming/blender.schema.json#/properties/pcds/properties/intruder/properties/location")

### location Type

`object` ([Projected position](blender-properties-potential-conflict-detection--properties-intruder-properties-projected-position.md))

## cpa

4D Projected position

`cpa`

*   is optional

*   Type: `object` ([Projected cpa](blender-properties-potential-conflict-detection--properties-intruder-properties-projected-cpa.md))

*   cannot be null

*   defined in: [Streaming Blender](blender-properties-potential-conflict-detection--properties-intruder-properties-projected-cpa.md "https://github.com/databeacon/level5-schemas/schemas/streaming/blender.schema.json#/properties/pcds/properties/intruder/properties/cpa")

### cpa Type

`object` ([Projected cpa](blender-properties-potential-conflict-detection--properties-intruder-properties-projected-cpa.md))
