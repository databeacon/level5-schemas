# Potential conflict detected Schema

```txt
/blender.schema.json#/$defs/pcd
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                              |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :-------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [blender.schema.json\*](../../out/streaming/blender.schema.json "open original schema") |

## pcd Type

`object` ([Potential conflict detected](blender-defs-potential-conflict-detected.md))

# pcd Properties

| Property                    | Type               | Required | Nullable       | Defined by                                                                                                                                                                |
| :-------------------------- | :----------------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [id](#id)                   | Not specified      | Required | cannot be null | [Blender](blender-defs-potential-conflict-detected-properties-id.md "/blender.schema.json#/$defs/pcd/properties/id")                                                      |
| [isFirst](#isfirst)         | `boolean`          | Required | cannot be null | [Blender](blender-defs-potential-conflict-detected-properties-flag-true-if-ownship-crosses-first.md "/blender.schema.json#/$defs/pcd/properties/isFirst")                 |
| [segEpoch](#segepoch)       | `integer`          | Required | cannot be null | [Blender](blender-defs-potential-conflict-detected-properties-time-to-cpa-posix-in-seconds.md "/blender.schema.json#/$defs/pcd/properties/segEpoch")                      |
| [segDist](#segdist)         | `number`           | Required | cannot be null | [Blender](blender-defs-potential-conflict-detected-properties-distance-at-cpa-in-nm.md "/blender.schema.json#/$defs/pcd/properties/segDist")                              |
| [isPcd](#ispcd)             | `boolean`          | Required | cannot be null | [Blender](blender-defs-potential-conflict-detected-properties-flag-true-if-and-only-if-pcd-is-a-potential-conflict.md "/blender.schema.json#/$defs/pcd/properties/isPcd") |
| [mode](#mode)               | `Calculation mode` | Required | cannot be null | [Blender](blender-defs-potential-conflict-detected-properties-mode.md "/blender.schema.json#/$defs/pcd/properties/mode")                                                  |
| [epoch](#epoch)             | `integer`          | Required | cannot be null | [Blender](blender-defs-potential-conflict-detected-properties-calculation-time-posix-in-seconds.md "/blender.schema.json#/$defs/pcd/properties/epoch")                    |
| [currentDist](#currentdist) | `number`           | Required | cannot be null | [Blender](blender-defs-potential-conflict-detected-properties-current-aircraft-distance-in-nm.md "/blender.schema.json#/$defs/pcd/properties/currentDist")                |
| [ownship](#ownship)         | Not specified      | Required | cannot be null | [Blender](blender-defs-potential-conflict-detected-properties-ownship-flight.md "/blender.schema.json#/$defs/pcd/properties/ownship")                                     |
| [intruder](#intruder)       | `object`           | Required | cannot be null | [Blender](blender-defs-pcdflightsyncedinfo.md "/blender.schema.json#/$defs/pcd/properties/intruder")                                                                      |

## id



`id`

*   is required

*   Type: unknown

*   cannot be null

*   defined in: [Blender](blender-defs-potential-conflict-detected-properties-id.md "/blender.schema.json#/$defs/pcd/properties/id")

### id Type

unknown

## isFirst



`isFirst`

*   is required

*   Type: `boolean` ([Flag true if ownship crosses first](blender-defs-potential-conflict-detected-properties-flag-true-if-ownship-crosses-first.md))

*   cannot be null

*   defined in: [Blender](blender-defs-potential-conflict-detected-properties-flag-true-if-ownship-crosses-first.md "/blender.schema.json#/$defs/pcd/properties/isFirst")

### isFirst Type

`boolean` ([Flag true if ownship crosses first](blender-defs-potential-conflict-detected-properties-flag-true-if-ownship-crosses-first.md))

## segEpoch



`segEpoch`

*   is required

*   Type: `integer` ([Time to CPA, POSIX in seconds](blender-defs-potential-conflict-detected-properties-time-to-cpa-posix-in-seconds.md))

*   cannot be null

*   defined in: [Blender](blender-defs-potential-conflict-detected-properties-time-to-cpa-posix-in-seconds.md "/blender.schema.json#/$defs/pcd/properties/segEpoch")

### segEpoch Type

`integer` ([Time to CPA, POSIX in seconds](blender-defs-potential-conflict-detected-properties-time-to-cpa-posix-in-seconds.md))

## segDist



`segDist`

*   is required

*   Type: `number` ([Distance at CPA in NM](blender-defs-potential-conflict-detected-properties-distance-at-cpa-in-nm.md))

*   cannot be null

*   defined in: [Blender](blender-defs-potential-conflict-detected-properties-distance-at-cpa-in-nm.md "/blender.schema.json#/$defs/pcd/properties/segDist")

### segDist Type

`number` ([Distance at CPA in NM](blender-defs-potential-conflict-detected-properties-distance-at-cpa-in-nm.md))

## isPcd



`isPcd`

*   is required

*   Type: `boolean` ([Flag true if and only if pcd is a potential conflict](blender-defs-potential-conflict-detected-properties-flag-true-if-and-only-if-pcd-is-a-potential-conflict.md))

*   cannot be null

*   defined in: [Blender](blender-defs-potential-conflict-detected-properties-flag-true-if-and-only-if-pcd-is-a-potential-conflict.md "/blender.schema.json#/$defs/pcd/properties/isPcd")

### isPcd Type

`boolean` ([Flag true if and only if pcd is a potential conflict](blender-defs-potential-conflict-detected-properties-flag-true-if-and-only-if-pcd-is-a-potential-conflict.md))

## mode



`mode`

*   is required

*   Type: `Calculation mode`

*   cannot be null

*   defined in: [Blender](blender-defs-potential-conflict-detected-properties-mode.md "/blender.schema.json#/$defs/pcd/properties/mode")

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

*   Type: `integer` ([Calculation time, POSIX in seconds](blender-defs-potential-conflict-detected-properties-calculation-time-posix-in-seconds.md))

*   cannot be null

*   defined in: [Blender](blender-defs-potential-conflict-detected-properties-calculation-time-posix-in-seconds.md "/blender.schema.json#/$defs/pcd/properties/epoch")

### epoch Type

`integer` ([Calculation time, POSIX in seconds](blender-defs-potential-conflict-detected-properties-calculation-time-posix-in-seconds.md))

## currentDist



`currentDist`

*   is required

*   Type: `number` ([Current aircraft distance in NM](blender-defs-potential-conflict-detected-properties-current-aircraft-distance-in-nm.md))

*   cannot be null

*   defined in: [Blender](blender-defs-potential-conflict-detected-properties-current-aircraft-distance-in-nm.md "/blender.schema.json#/$defs/pcd/properties/currentDist")

### currentDist Type

`number` ([Current aircraft distance in NM](blender-defs-potential-conflict-detected-properties-current-aircraft-distance-in-nm.md))

## ownship



`ownship`

*   is required

*   Type: unknown ([Ownship flight](blender-defs-potential-conflict-detected-properties-ownship-flight.md))

*   cannot be null

*   defined in: [Blender](blender-defs-potential-conflict-detected-properties-ownship-flight.md "/blender.schema.json#/$defs/pcd/properties/ownship")

### ownship Type

unknown ([Ownship flight](blender-defs-potential-conflict-detected-properties-ownship-flight.md))

## intruder



`intruder`

*   is required

*   Type: `object` ([Intruder flight](blender-defs-pcdflightsyncedinfo.md))

*   cannot be null

*   defined in: [Blender](blender-defs-pcdflightsyncedinfo.md "/blender.schema.json#/$defs/pcd/properties/intruder")

### intruder Type

`object` ([Intruder flight](blender-defs-pcdflightsyncedinfo.md))
