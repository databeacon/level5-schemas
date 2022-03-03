# Potential conflict Schema

```txt
https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/blender/pcd.schema.json
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                            |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [pcd.schema.json](../../out/streaming/blender/pcd.schema.json "open original schema") |

## Potential conflict Type

`object` ([Potential conflict](pcd.md))

# Potential conflict Properties

| Property                    | Type               | Required | Nullable       | Defined by                                                                                                                                                                                                                  |
| :-------------------------- | :----------------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [id](#id)                   | `string`           | Required | cannot be null | [Potential conflict](pcd-properties-id.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/blender/pcd.schema.json#/properties/id")                                                      |
| [isFirst](#isfirst)         | `boolean`          | Required | cannot be null | [Potential conflict](pcd-properties-flag-true-if-ownship-crosses-first.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/blender/pcd.schema.json#/properties/isFirst")                 |
| [segEpoch](#segepoch)       | `integer`          | Required | cannot be null | [Potential conflict](pcd-properties-time-to-cpa-posix-in-seconds.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/blender/pcd.schema.json#/properties/segEpoch")                      |
| [segDist](#segdist)         | `number`           | Required | cannot be null | [Potential conflict](pcd-properties-distance-at-cpa-in-nm.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/blender/pcd.schema.json#/properties/segDist")                              |
| [isPcd](#ispcd)             | `boolean`          | Required | cannot be null | [Potential conflict](pcd-properties-flag-true-if-and-only-if-pcd-is-a-potential-conflict.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/blender/pcd.schema.json#/properties/isPcd") |
| [mode](#mode)               | `Calculation mode` | Required | cannot be null | [Potential conflict](pcd-properties-mode.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/blender/pcd.schema.json#/properties/mode")                                                  |
| [epoch](#epoch)             | `integer`          | Required | cannot be null | [Potential conflict](pcd-properties-calculation-time-posix-in-seconds.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/blender/pcd.schema.json#/properties/epoch")                    |
| [currentDist](#currentdist) | `number`           | Required | cannot be null | [Potential conflict](pcd-properties-current-aircraft-distance-in-nm.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/blender/pcd.schema.json#/properties/currentDist")                |
| [ownship](#ownship)         | `object`           | Required | cannot be null | [Potential conflict](pcd-properties-ownship-flight.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/blender/pcd.schema.json#/properties/ownship")                                     |
| [intruder](#intruder)       | `object`           | Required | cannot be null | [Potential conflict](pcd-properties-intruder-flight.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/blender/pcd.schema.json#/properties/intruder")                                   |

## id

Nct unique identifier

`id`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Potential conflict](pcd-properties-id.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/blender/pcd.schema.json#/properties/id")

### id Type

`string`

## isFirst



`isFirst`

*   is required

*   Type: `boolean` ([Flag true if ownship crosses first](pcd-properties-flag-true-if-ownship-crosses-first.md))

*   cannot be null

*   defined in: [Potential conflict](pcd-properties-flag-true-if-ownship-crosses-first.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/blender/pcd.schema.json#/properties/isFirst")

### isFirst Type

`boolean` ([Flag true if ownship crosses first](pcd-properties-flag-true-if-ownship-crosses-first.md))

## segEpoch



`segEpoch`

*   is required

*   Type: `integer` ([Time to CPA, POSIX in seconds](pcd-properties-time-to-cpa-posix-in-seconds.md))

*   cannot be null

*   defined in: [Potential conflict](pcd-properties-time-to-cpa-posix-in-seconds.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/blender/pcd.schema.json#/properties/segEpoch")

### segEpoch Type

`integer` ([Time to CPA, POSIX in seconds](pcd-properties-time-to-cpa-posix-in-seconds.md))

## segDist



`segDist`

*   is required

*   Type: `number` ([Distance at CPA in NM](pcd-properties-distance-at-cpa-in-nm.md))

*   cannot be null

*   defined in: [Potential conflict](pcd-properties-distance-at-cpa-in-nm.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/blender/pcd.schema.json#/properties/segDist")

### segDist Type

`number` ([Distance at CPA in NM](pcd-properties-distance-at-cpa-in-nm.md))

## isPcd



`isPcd`

*   is required

*   Type: `boolean` ([Flag true if and only if pcd is a potential conflict](pcd-properties-flag-true-if-and-only-if-pcd-is-a-potential-conflict.md))

*   cannot be null

*   defined in: [Potential conflict](pcd-properties-flag-true-if-and-only-if-pcd-is-a-potential-conflict.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/blender/pcd.schema.json#/properties/isPcd")

### isPcd Type

`boolean` ([Flag true if and only if pcd is a potential conflict](pcd-properties-flag-true-if-and-only-if-pcd-is-a-potential-conflict.md))

## mode



`mode`

*   is required

*   Type: `Calculation mode`

*   cannot be null

*   defined in: [Potential conflict](pcd-properties-mode.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/blender/pcd.schema.json#/properties/mode")

### mode Type

`Calculation mode`

### mode Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value          | Explanation |
| :------------- | :---------- |
| `"enhanced"`   |             |
| `"horizontal"` |             |

## epoch



`epoch`

*   is required

*   Type: `integer` ([Calculation time, POSIX in seconds](pcd-properties-calculation-time-posix-in-seconds.md))

*   cannot be null

*   defined in: [Potential conflict](pcd-properties-calculation-time-posix-in-seconds.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/blender/pcd.schema.json#/properties/epoch")

### epoch Type

`integer` ([Calculation time, POSIX in seconds](pcd-properties-calculation-time-posix-in-seconds.md))

## currentDist



`currentDist`

*   is required

*   Type: `number` ([Current aircraft distance in NM](pcd-properties-current-aircraft-distance-in-nm.md))

*   cannot be null

*   defined in: [Potential conflict](pcd-properties-current-aircraft-distance-in-nm.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/blender/pcd.schema.json#/properties/currentDist")

### currentDist Type

`number` ([Current aircraft distance in NM](pcd-properties-current-aircraft-distance-in-nm.md))

## ownship



`ownship`

*   is required

*   Type: `object` ([Ownship flight](pcd-properties-ownship-flight.md))

*   cannot be null

*   defined in: [Potential conflict](pcd-properties-ownship-flight.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/blender/pcd.schema.json#/properties/ownship")

### ownship Type

`object` ([Ownship flight](pcd-properties-ownship-flight.md))

## intruder



`intruder`

*   is required

*   Type: `object` ([Intruder flight](pcd-properties-intruder-flight.md))

*   cannot be null

*   defined in: [Potential conflict](pcd-properties-intruder-flight.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/blender/pcd.schema.json#/properties/intruder")

### intruder Type

`object` ([Intruder flight](pcd-properties-intruder-flight.md))
