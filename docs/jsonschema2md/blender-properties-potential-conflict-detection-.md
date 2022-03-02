# Potential conflict detection  Schema

```txt
https://github.com/databeacon/level5-schemas/schemas/streaming/blender.schema.json#/properties/pcds
```

Refers to our mike5-stream PCDs calculation pipeline

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                              |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :-------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [blender.schema.json\*](../../out/streaming/blender.schema.json "open original schema") |

## pcds Type

`object` ([Potential conflict detection ](blender-properties-potential-conflict-detection-.md))

# pcds Properties

| Property                    | Type          | Required | Nullable       | Defined by                                                                                                                                                                                                                   |
| :-------------------------- | :------------ | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [id](#id)                   | `string`      | Optional | cannot be null | [Streaming Blender](blender-properties-potential-conflict-detection--properties-id.md "https://github.com/databeacon/level5-schemas/schemas/streaming/blender.schema.json#/properties/pcds/properties/id")                   |
| [isFirst](#isfirst)         | `boolean`     | Optional | cannot be null | [Streaming Blender](blender-properties-potential-conflict-detection--properties-isfirst.md "https://github.com/databeacon/level5-schemas/schemas/streaming/blender.schema.json#/properties/pcds/properties/isFirst")         |
| [segEpoch](#segepoch)       | `number`      | Optional | cannot be null | [Streaming Blender](blender-properties-potential-conflict-detection--properties-segepoch.md "https://github.com/databeacon/level5-schemas/schemas/streaming/blender.schema.json#/properties/pcds/properties/segEpoch")       |
| [segDist](#segdist)         | `number`      | Optional | cannot be null | [Streaming Blender](blender-properties-potential-conflict-detection--properties-segdist.md "https://github.com/databeacon/level5-schemas/schemas/streaming/blender.schema.json#/properties/pcds/properties/segDist")         |
| [isPcd](#ispcd)             | `boolean`     | Optional | cannot be null | [Streaming Blender](blender-properties-potential-conflict-detection--properties-ispcd.md "https://github.com/databeacon/level5-schemas/schemas/streaming/blender.schema.json#/properties/pcds/properties/isPcd")             |
| [epoch](#epoch)             | `integer`     | Optional | cannot be null | [Streaming Blender](blender-properties-potential-conflict-detection--properties-epoch.md "https://github.com/databeacon/level5-schemas/schemas/streaming/blender.schema.json#/properties/pcds/properties/epoch")             |
| [currentDist](#currentdist) | `number`      | Optional | cannot be null | [Streaming Blender](blender-properties-potential-conflict-detection--properties-currentdist.md "https://github.com/databeacon/level5-schemas/schemas/streaming/blender.schema.json#/properties/pcds/properties/currentDist") |
| [ownship](#ownship)         | `object`      | Optional | cannot be null | [Streaming Blender](blender-properties-potential-conflict-detection--properties-ownship.md "https://github.com/databeacon/level5-schemas/schemas/streaming/blender.schema.json#/properties/pcds/properties/ownship")         |
| [intruder](#intruder)       | `object`      | Optional | cannot be null | [Streaming Blender](blender-properties-potential-conflict-detection--properties-intruder.md "https://github.com/databeacon/level5-schemas/schemas/streaming/blender.schema.json#/properties/pcds/properties/intruder")       |
| [synced](#synced)           | Not specified | Optional | cannot be null | [Streaming Blender](blender-properties-potential-conflict-detection--properties-synced.md "https://github.com/databeacon/level5-schemas/schemas/streaming/blender.schema.json#/properties/pcds/properties/synced")           |

## id

PCD unique identifier

`id`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Streaming Blender](blender-properties-potential-conflict-detection--properties-id.md "https://github.com/databeacon/level5-schemas/schemas/streaming/blender.schema.json#/properties/pcds/properties/id")

### id Type

`string`

## isFirst

Flag indicating if aircraft is crossing first

`isFirst`

*   is optional

*   Type: `boolean`

*   cannot be null

*   defined in: [Streaming Blender](blender-properties-potential-conflict-detection--properties-isfirst.md "https://github.com/databeacon/level5-schemas/schemas/streaming/blender.schema.json#/properties/pcds/properties/isFirst")

### isFirst Type

`boolean`

## segEpoch

Crossing time in epochs

`segEpoch`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [Streaming Blender](blender-properties-potential-conflict-detection--properties-segepoch.md "https://github.com/databeacon/level5-schemas/schemas/streaming/blender.schema.json#/properties/pcds/properties/segEpoch")

### segEpoch Type

`number`

## segDist

Crossing distance in NM

`segDist`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [Streaming Blender](blender-properties-potential-conflict-detection--properties-segdist.md "https://github.com/databeacon/level5-schemas/schemas/streaming/blender.schema.json#/properties/pcds/properties/segDist")

### segDist Type

`number`

## isPcd

PCD activation or de-activation flag

`isPcd`

*   is optional

*   Type: `boolean`

*   cannot be null

*   defined in: [Streaming Blender](blender-properties-potential-conflict-detection--properties-ispcd.md "https://github.com/databeacon/level5-schemas/schemas/streaming/blender.schema.json#/properties/pcds/properties/isPcd")

### isPcd Type

`boolean`

## epoch

Refers to mike5-stream calculation epoch

`epoch`

*   is optional

*   Type: `integer`

*   cannot be null

*   defined in: [Streaming Blender](blender-properties-potential-conflict-detection--properties-epoch.md "https://github.com/databeacon/level5-schemas/schemas/streaming/blender.schema.json#/properties/pcds/properties/epoch")

### epoch Type

`integer`

## currentDist

Current distance between conflicting aircrafts in NM

`currentDist`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [Streaming Blender](blender-properties-potential-conflict-detection--properties-currentdist.md "https://github.com/databeacon/level5-schemas/schemas/streaming/blender.schema.json#/properties/pcds/properties/currentDist")

### currentDist Type

`number`

## ownship

Ownship position and CPA

`ownship`

*   is optional

*   Type: `object` ([Ownship](blender-properties-potential-conflict-detection--properties-ownship.md))

*   cannot be null

*   defined in: [Streaming Blender](blender-properties-potential-conflict-detection--properties-ownship.md "https://github.com/databeacon/level5-schemas/schemas/streaming/blender.schema.json#/properties/pcds/properties/ownship")

### ownship Type

`object` ([Ownship](blender-properties-potential-conflict-detection--properties-ownship.md))

## intruder

Intruder position and CPA

`intruder`

*   is optional

*   Type: `object` ([Intruder](blender-properties-potential-conflict-detection--properties-intruder.md))

*   cannot be null

*   defined in: [Streaming Blender](blender-properties-potential-conflict-detection--properties-intruder.md "https://github.com/databeacon/level5-schemas/schemas/streaming/blender.schema.json#/properties/pcds/properties/intruder")

### intruder Type

`object` ([Intruder](blender-properties-potential-conflict-detection--properties-intruder.md))

## synced



`synced`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Streaming Blender](blender-properties-potential-conflict-detection--properties-synced.md "https://github.com/databeacon/level5-schemas/schemas/streaming/blender.schema.json#/properties/pcds/properties/synced")

### synced Type

unknown
