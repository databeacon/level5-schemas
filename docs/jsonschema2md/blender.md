# Blender Schema

```txt
/blender.schema.json
```

Asynchronous topics merging.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                            |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [blender.schema.json](../../out/streaming/blender.schema.json "open original schema") |

## Blender Type

`object` ([Blender](blender.md))

# Blender Properties

| Property            | Type      | Required | Nullable       | Defined by                                                                                               |
| :------------------ | :-------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------- |
| [epoch](#epoch)     | `integer` | Optional | cannot be null | [Blender](blender-properties-synched-time-posix-in-seconds-.md "/blender.schema.json#/properties/epoch") |
| [flights](#flights) | `array`   | Optional | cannot be null | [Blender](blender-properties-flights-data.md "/blender.schema.json#/properties/flights")                 |

## epoch



`epoch`

*   is optional

*   Type: `integer` ([Synched time, POSIX in seconds. ](blender-properties-synched-time-posix-in-seconds-.md))

*   cannot be null

*   defined in: [Blender](blender-properties-synched-time-posix-in-seconds-.md "/blender.schema.json#/properties/epoch")

### epoch Type

`integer` ([Synched time, POSIX in seconds. ](blender-properties-synched-time-posix-in-seconds-.md))

## flights



`flights`

*   is optional

*   Type: `object[]` ([Flight data](blender-defs-flight-data.md))

*   cannot be null

*   defined in: [Blender](blender-properties-flights-data.md "/blender.schema.json#/properties/flights")

### flights Type

`object[]` ([Flight data](blender-defs-flight-data.md))

# Blender Definitions

## Definitions group id

Reference this group by using

```json
{"$ref":"/blender.schema.json#/$defs/id"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |

## Definitions group point4d

Reference this group by using

```json
{"$ref":"/blender.schema.json#/$defs/point4d"}
```

| Property          | Type      | Required | Nullable       | Defined by                                                                                                                  |
| :---------------- | :-------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------- |
| [epoch](#epoch-1) | `integer` | Required | cannot be null | [Blender](blender-defs-point-4d-properties-time-posix-in-seconds.md "/blender.schema.json#/$defs/point4d/properties/epoch") |
| [lat](#lat)       | `number`  | Required | cannot be null | [Blender](blender-defs-point-4d-properties-lat.md "/blender.schema.json#/$defs/point4d/properties/lat")                     |
| [lng](#lng)       | `number`  | Required | cannot be null | [Blender](blender-defs-point-4d-properties-lng.md "/blender.schema.json#/$defs/point4d/properties/lng")                     |
| [alt](#alt)       | `number`  | Required | cannot be null | [Blender](blender-defs-point-4d-properties-alt.md "/blender.schema.json#/$defs/point4d/properties/alt")                     |

### epoch



`epoch`

*   is required

*   Type: `integer` ([Time, POSIX in seconds](blender-defs-point-4d-properties-time-posix-in-seconds.md))

*   cannot be null

*   defined in: [Blender](blender-defs-point-4d-properties-time-posix-in-seconds.md "/blender.schema.json#/$defs/point4d/properties/epoch")

#### epoch Type

`integer` ([Time, POSIX in seconds](blender-defs-point-4d-properties-time-posix-in-seconds.md))

### lat

Latitude in degrees

`lat`

*   is required

*   Type: `number`

*   cannot be null

*   defined in: [Blender](blender-defs-point-4d-properties-lat.md "/blender.schema.json#/$defs/point4d/properties/lat")

#### lat Type

`number`

### lng

Longitude in degrees

`lng`

*   is required

*   Type: `number`

*   cannot be null

*   defined in: [Blender](blender-defs-point-4d-properties-lng.md "/blender.schema.json#/$defs/point4d/properties/lng")

#### lng Type

`number`

### alt

Altitude in feet

`alt`

*   is required

*   Type: `number`

*   cannot be null

*   defined in: [Blender](blender-defs-point-4d-properties-alt.md "/blender.schema.json#/$defs/point4d/properties/alt")

#### alt Type

`number`

## Definitions group flight

Reference this group by using

```json
{"$ref":"/blender.schema.json#/$defs/flight"}
```

| Property                                    | Type          | Required | Nullable       | Defined by                                                                                                                                |
| :------------------------------------------ | :------------ | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------- |
| [id](#id)                                   | Not specified | Required | cannot be null | [Blender](blender-defs-flight-data-properties-id.md "/blender.schema.json#/$defs/flight/properties/id")                                   |
| [gs](#gs)                                   | `number`      | Required | cannot be null | [Blender](blender-defs-flight-data-properties-gs.md "/blender.schema.json#/$defs/flight/properties/gs")                                   |
| [track](#track)                             | `integer`     | Required | cannot be null | [Blender](blender-defs-flight-data-properties-track.md "/blender.schema.json#/$defs/flight/properties/track")                             |
| [flightLevel](#flightlevel)                 | `integer`     | Required | cannot be null | [Blender](blender-defs-flight-data-properties-flightlevel.md "/blender.schema.json#/$defs/flight/properties/flightLevel")                 |
| [selectedAlt](#selectedalt)                 | `integer`     | Required | cannot be null | [Blender](blender-defs-flight-data-properties-selectedalt.md "/blender.schema.json#/$defs/flight/properties/selectedAlt")                 |
| [selectedFlightLevel](#selectedflightlevel) | `integer`     | Required | cannot be null | [Blender](blender-defs-flight-data-properties-selectedflightlevel.md "/blender.schema.json#/$defs/flight/properties/selectedFlightLevel") |
| [verticalSpeed](#verticalspeed)             | `integer`     | Required | cannot be null | [Blender](blender-defs-flight-data-properties-verticalspeed.md "/blender.schema.json#/$defs/flight/properties/verticalSpeed")             |
| [callsign](#callsign)                       | `integer`     | Required | cannot be null | [Blender](blender-defs-flight-data-properties-callsign.md "/blender.schema.json#/$defs/flight/properties/callsign")                       |
| [aprtDeparture](#aprtdeparture)             | `integer`     | Required | cannot be null | [Blender](blender-defs-flight-data-properties-aprtdeparture.md "/blender.schema.json#/$defs/flight/properties/aprtDeparture")             |
| [aprtArrival](#aprtarrival)                 | `integer`     | Required | cannot be null | [Blender](blender-defs-flight-data-properties-aprtarrival.md "/blender.schema.json#/$defs/flight/properties/aprtArrival")                 |
| [points4d](#points4d)                       | `object`      | Required | cannot be null | [Blender](blender-defs-flight-data-properties-flight-positions.md "/blender.schema.json#/$defs/flight/properties/points4d")               |
| [nct](#nct)                                 | `object`      | Required | cannot be null | [Blender](blender-defs-non-conflicting-status.md "/blender.schema.json#/$defs/flight/properties/nct")                                     |
| [pcds](#pcds)                               | `array`       | Required | cannot be null | [Blender](blender-defs-flight-data-properties-potential-conflicts-detected.md "/blender.schema.json#/$defs/flight/properties/pcds")       |

### id



`id`

*   is required

*   Type: unknown

*   cannot be null

*   defined in: [Blender](blender-defs-flight-data-properties-id.md "/blender.schema.json#/$defs/flight/properties/id")

#### id Type

unknown

### gs

Aircraft groundspeed in kts

`gs`

*   is required

*   Type: `number`

*   cannot be null

*   defined in: [Blender](blender-defs-flight-data-properties-gs.md "/blender.schema.json#/$defs/flight/properties/gs")

#### gs Type

`number`

### track

Aircraft heading in degrees

`track`

*   is required

*   Type: `integer`

*   cannot be null

*   defined in: [Blender](blender-defs-flight-data-properties-track.md "/blender.schema.json#/$defs/flight/properties/track")

#### track Type

`integer`

### flightLevel

Aircraft flight level, eg. FLXXX

`flightLevel`

*   is required

*   Type: `integer`

*   cannot be null

*   defined in: [Blender](blender-defs-flight-data-properties-flightlevel.md "/blender.schema.json#/$defs/flight/properties/flightLevel")

#### flightLevel Type

`integer`

### selectedAlt

Selected altitude in ft

`selectedAlt`

*   is required

*   Type: `integer`

*   cannot be null

*   defined in: [Blender](blender-defs-flight-data-properties-selectedalt.md "/blender.schema.json#/$defs/flight/properties/selectedAlt")

#### selectedAlt Type

`integer`

### selectedFlightLevel

Mode-S selected flight level, eg. FLXXX

`selectedFlightLevel`

*   is required

*   Type: `integer`

*   cannot be null

*   defined in: [Blender](blender-defs-flight-data-properties-selectedflightlevel.md "/blender.schema.json#/$defs/flight/properties/selectedFlightLevel")

#### selectedFlightLevel Type

`integer`

### verticalSpeed

Vertical speed as feet per minute

`verticalSpeed`

*   is required

*   Type: `integer`

*   cannot be null

*   defined in: [Blender](blender-defs-flight-data-properties-verticalspeed.md "/blender.schema.json#/$defs/flight/properties/verticalSpeed")

#### verticalSpeed Type

`integer`

### callsign

Callsign identifying the flight. Typically, ICAO airline code plus IATA/ticketing flight number, or the aircraft registration

`callsign`

*   is required

*   Type: `integer`

*   cannot be null

*   defined in: [Blender](blender-defs-flight-data-properties-callsign.md "/blender.schema.json#/$defs/flight/properties/callsign")

#### callsign Type

`integer`

### aprtDeparture

Departure airport. ICAO format

`aprtDeparture`

*   is required

*   Type: `integer`

*   cannot be null

*   defined in: [Blender](blender-defs-flight-data-properties-aprtdeparture.md "/blender.schema.json#/$defs/flight/properties/aprtDeparture")

#### aprtDeparture Type

`integer`

### aprtArrival

Arrival airport. ICAO format

`aprtArrival`

*   is required

*   Type: `integer`

*   cannot be null

*   defined in: [Blender](blender-defs-flight-data-properties-aprtarrival.md "/blender.schema.json#/$defs/flight/properties/aprtArrival")

#### aprtArrival Type

`integer`

### points4d



`points4d`

*   is required

*   Type: `object` ([Flight positions](blender-defs-flight-data-properties-flight-positions.md))

*   cannot be null

*   defined in: [Blender](blender-defs-flight-data-properties-flight-positions.md "/blender.schema.json#/$defs/flight/properties/points4d")

#### points4d Type

`object` ([Flight positions](blender-defs-flight-data-properties-flight-positions.md))

### nct



`nct`

*   is required

*   Type: `object` ([Non-conflicting status](blender-defs-non-conflicting-status.md))

*   cannot be null

*   defined in: [Blender](blender-defs-non-conflicting-status.md "/blender.schema.json#/$defs/flight/properties/nct")

#### nct Type

`object` ([Non-conflicting status](blender-defs-non-conflicting-status.md))

### pcds



`pcds`

*   is required

*   Type: `object[]` ([Potential conflict detected](blender-defs-potential-conflict-detected.md))

*   cannot be null

*   defined in: [Blender](blender-defs-flight-data-properties-potential-conflicts-detected.md "/blender.schema.json#/$defs/flight/properties/pcds")

#### pcds Type

`object[]` ([Potential conflict detected](blender-defs-potential-conflict-detected.md))

## Definitions group nct

Reference this group by using

```json
{"$ref":"/blender.schema.json#/$defs/nct"}
```

| Property              | Type          | Required | Nullable       | Defined by                                                                                                                                            |
| :-------------------- | :------------ | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------- |
| [id](#id-1)           | Not specified | Required | cannot be null | [Blender](blender-defs-non-conflicting-status-properties-id.md "/blender.schema.json#/$defs/nct/properties/id")                                       |
| [flightId](#flightid) | `string`      | Required | cannot be null | [Blender](blender-defs-non-conflicting-status-properties-flightid.md "/blender.schema.json#/$defs/nct/properties/flightId")                           |
| [sectorId](#sectorid) | `string`      | Required | cannot be null | [Blender](blender-defs-non-conflicting-status-properties-sectorid.md "/blender.schema.json#/$defs/nct/properties/sectorId")                           |
| [isNct](#isnct)       | `boolean`     | Required | cannot be null | [Blender](blender-defs-non-conflicting-status-properties-true-if-the-flight-is-non-conflicting.md "/blender.schema.json#/$defs/nct/properties/isNct") |
| [mode](#mode)         | Not specified | Required | cannot be null | [Blender](blender-defs-non-conflicting-status-properties-calculation-method.md "/blender.schema.json#/$defs/nct/properties/mode")                     |
| [showHalo](#showhalo) | `boolean`     | Required | cannot be null | [Blender](blender-defs-non-conflicting-status-properties-showhalo.md "/blender.schema.json#/$defs/nct/properties/showHalo")                           |
| [epoch](#epoch-2)     | `integer`     | Required | cannot be null | [Blender](blender-defs-non-conflicting-status-properties-epoch.md "/blender.schema.json#/$defs/nct/properties/epoch")                                 |
| [projExit](#projexit) | `object`      | Required | cannot be null | [Blender](blender-defs-point-4d.md "/blender.schema.json#/$defs/nct/properties/projExit")                                                             |

### id



`id`

*   is required

*   Type: unknown

*   cannot be null

*   defined in: [Blender](blender-defs-non-conflicting-status-properties-id.md "/blender.schema.json#/$defs/nct/properties/id")

#### id Type

unknown

### flightId

Flight unique identifier

`flightId`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Blender](blender-defs-non-conflicting-status-properties-flightid.md "/blender.schema.json#/$defs/nct/properties/flightId")

#### flightId Type

`string`

### sectorId

Sector unique identifier

`sectorId`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Blender](blender-defs-non-conflicting-status-properties-sectorid.md "/blender.schema.json#/$defs/nct/properties/sectorId")

#### sectorId Type

`string`

### isNct



`isNct`

*   is required

*   Type: `boolean` ([True if the flight is non-conflicting](blender-defs-non-conflicting-status-properties-true-if-the-flight-is-non-conflicting.md))

*   cannot be null

*   defined in: [Blender](blender-defs-non-conflicting-status-properties-true-if-the-flight-is-non-conflicting.md "/blender.schema.json#/$defs/nct/properties/isNct")

#### isNct Type

`boolean` ([True if the flight is non-conflicting](blender-defs-non-conflicting-status-properties-true-if-the-flight-is-non-conflicting.md))

### mode



`mode`

*   is required

*   Type: unknown ([Calculation method](blender-defs-non-conflicting-status-properties-calculation-method.md))

*   cannot be null

*   defined in: [Blender](blender-defs-non-conflicting-status-properties-calculation-method.md "/blender.schema.json#/$defs/nct/properties/mode")

#### mode Type

unknown ([Calculation method](blender-defs-non-conflicting-status-properties-calculation-method.md))

#### mode Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value    | Explanation |
| :------- | :---------- |
| `"acg"`  |             |
| `"soft"` |             |

### showHalo

True if flight transitions from non-conflicting to potential conflict

`showHalo`

*   is required

*   Type: `boolean`

*   cannot be null

*   defined in: [Blender](blender-defs-non-conflicting-status-properties-showhalo.md "/blender.schema.json#/$defs/nct/properties/showHalo")

#### showHalo Type

`boolean`

### epoch

Calculation time, POSIX in seconds

`epoch`

*   is required

*   Type: `integer`

*   cannot be null

*   defined in: [Blender](blender-defs-non-conflicting-status-properties-epoch.md "/blender.schema.json#/$defs/nct/properties/epoch")

#### epoch Type

`integer`

### projExit

A time-space position on earth

`projExit`

*   is required

*   Type: `object` ([Point 4D](blender-defs-point-4d.md))

*   cannot be null

*   defined in: [Blender](blender-defs-point-4d.md "/blender.schema.json#/$defs/nct/properties/projExit")

#### projExit Type

`object` ([Point 4D](blender-defs-point-4d.md))

## Definitions group pcd

Reference this group by using

```json
{"$ref":"/blender.schema.json#/$defs/pcd"}
```

| Property                    | Type               | Required | Nullable       | Defined by                                                                                                                                                                |
| :-------------------------- | :----------------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [id](#id-2)                 | Not specified      | Required | cannot be null | [Blender](blender-defs-potential-conflict-detected-properties-id.md "/blender.schema.json#/$defs/pcd/properties/id")                                                      |
| [isFirst](#isfirst)         | `boolean`          | Required | cannot be null | [Blender](blender-defs-potential-conflict-detected-properties-flag-true-if-ownship-crosses-first.md "/blender.schema.json#/$defs/pcd/properties/isFirst")                 |
| [segEpoch](#segepoch)       | `integer`          | Required | cannot be null | [Blender](blender-defs-potential-conflict-detected-properties-time-to-cpa-posix-in-seconds.md "/blender.schema.json#/$defs/pcd/properties/segEpoch")                      |
| [segDist](#segdist)         | `number`           | Required | cannot be null | [Blender](blender-defs-potential-conflict-detected-properties-distance-at-cpa-in-nm.md "/blender.schema.json#/$defs/pcd/properties/segDist")                              |
| [isPcd](#ispcd)             | `boolean`          | Required | cannot be null | [Blender](blender-defs-potential-conflict-detected-properties-flag-true-if-and-only-if-pcd-is-a-potential-conflict.md "/blender.schema.json#/$defs/pcd/properties/isPcd") |
| [mode](#mode-1)             | `Calculation mode` | Required | cannot be null | [Blender](blender-defs-potential-conflict-detected-properties-mode.md "/blender.schema.json#/$defs/pcd/properties/mode")                                                  |
| [epoch](#epoch-3)           | `integer`          | Required | cannot be null | [Blender](blender-defs-potential-conflict-detected-properties-calculation-time-posix-in-seconds.md "/blender.schema.json#/$defs/pcd/properties/epoch")                    |
| [currentDist](#currentdist) | `number`           | Required | cannot be null | [Blender](blender-defs-potential-conflict-detected-properties-current-aircraft-distance-in-nm.md "/blender.schema.json#/$defs/pcd/properties/currentDist")                |
| [ownship](#ownship)         | Not specified      | Required | cannot be null | [Blender](blender-defs-potential-conflict-detected-properties-ownship-flight.md "/blender.schema.json#/$defs/pcd/properties/ownship")                                     |
| [intruder](#intruder)       | `object`           | Required | cannot be null | [Blender](blender-defs-pcdflightsyncedinfo.md "/blender.schema.json#/$defs/pcd/properties/intruder")                                                                      |

### id



`id`

*   is required

*   Type: unknown

*   cannot be null

*   defined in: [Blender](blender-defs-potential-conflict-detected-properties-id.md "/blender.schema.json#/$defs/pcd/properties/id")

#### id Type

unknown

### isFirst



`isFirst`

*   is required

*   Type: `boolean` ([Flag true if ownship crosses first](blender-defs-potential-conflict-detected-properties-flag-true-if-ownship-crosses-first.md))

*   cannot be null

*   defined in: [Blender](blender-defs-potential-conflict-detected-properties-flag-true-if-ownship-crosses-first.md "/blender.schema.json#/$defs/pcd/properties/isFirst")

#### isFirst Type

`boolean` ([Flag true if ownship crosses first](blender-defs-potential-conflict-detected-properties-flag-true-if-ownship-crosses-first.md))

### segEpoch



`segEpoch`

*   is required

*   Type: `integer` ([Time to CPA, POSIX in seconds](blender-defs-potential-conflict-detected-properties-time-to-cpa-posix-in-seconds.md))

*   cannot be null

*   defined in: [Blender](blender-defs-potential-conflict-detected-properties-time-to-cpa-posix-in-seconds.md "/blender.schema.json#/$defs/pcd/properties/segEpoch")

#### segEpoch Type

`integer` ([Time to CPA, POSIX in seconds](blender-defs-potential-conflict-detected-properties-time-to-cpa-posix-in-seconds.md))

### segDist



`segDist`

*   is required

*   Type: `number` ([Distance at CPA in NM](blender-defs-potential-conflict-detected-properties-distance-at-cpa-in-nm.md))

*   cannot be null

*   defined in: [Blender](blender-defs-potential-conflict-detected-properties-distance-at-cpa-in-nm.md "/blender.schema.json#/$defs/pcd/properties/segDist")

#### segDist Type

`number` ([Distance at CPA in NM](blender-defs-potential-conflict-detected-properties-distance-at-cpa-in-nm.md))

### isPcd



`isPcd`

*   is required

*   Type: `boolean` ([Flag true if and only if pcd is a potential conflict](blender-defs-potential-conflict-detected-properties-flag-true-if-and-only-if-pcd-is-a-potential-conflict.md))

*   cannot be null

*   defined in: [Blender](blender-defs-potential-conflict-detected-properties-flag-true-if-and-only-if-pcd-is-a-potential-conflict.md "/blender.schema.json#/$defs/pcd/properties/isPcd")

#### isPcd Type

`boolean` ([Flag true if and only if pcd is a potential conflict](blender-defs-potential-conflict-detected-properties-flag-true-if-and-only-if-pcd-is-a-potential-conflict.md))

### mode



`mode`

*   is required

*   Type: `Calculation mode`

*   cannot be null

*   defined in: [Blender](blender-defs-potential-conflict-detected-properties-mode.md "/blender.schema.json#/$defs/pcd/properties/mode")

#### mode Type

`Calculation mode`

#### mode Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value          | Explanation |
| :------------- | :---------- |
| `"enhanced"`   |             |
| `"horizontal"` |             |

### epoch



`epoch`

*   is required

*   Type: `integer` ([Calculation time, POSIX in seconds](blender-defs-potential-conflict-detected-properties-calculation-time-posix-in-seconds.md))

*   cannot be null

*   defined in: [Blender](blender-defs-potential-conflict-detected-properties-calculation-time-posix-in-seconds.md "/blender.schema.json#/$defs/pcd/properties/epoch")

#### epoch Type

`integer` ([Calculation time, POSIX in seconds](blender-defs-potential-conflict-detected-properties-calculation-time-posix-in-seconds.md))

### currentDist



`currentDist`

*   is required

*   Type: `number` ([Current aircraft distance in NM](blender-defs-potential-conflict-detected-properties-current-aircraft-distance-in-nm.md))

*   cannot be null

*   defined in: [Blender](blender-defs-potential-conflict-detected-properties-current-aircraft-distance-in-nm.md "/blender.schema.json#/$defs/pcd/properties/currentDist")

#### currentDist Type

`number` ([Current aircraft distance in NM](blender-defs-potential-conflict-detected-properties-current-aircraft-distance-in-nm.md))

### ownship



`ownship`

*   is required

*   Type: unknown ([Ownship flight](blender-defs-potential-conflict-detected-properties-ownship-flight.md))

*   cannot be null

*   defined in: [Blender](blender-defs-potential-conflict-detected-properties-ownship-flight.md "/blender.schema.json#/$defs/pcd/properties/ownship")

#### ownship Type

unknown ([Ownship flight](blender-defs-potential-conflict-detected-properties-ownship-flight.md))

### intruder



`intruder`

*   is required

*   Type: `object` ([Intruder flight](blender-defs-pcdflightsyncedinfo.md))

*   cannot be null

*   defined in: [Blender](blender-defs-pcdflightsyncedinfo.md "/blender.schema.json#/$defs/pcd/properties/intruder")

#### intruder Type

`object` ([Intruder flight](blender-defs-pcdflightsyncedinfo.md))

## Definitions group pcdFlightSyncedInfo

Reference this group by using

```json
{"$ref":"/blender.schema.json#/$defs/pcdFlightSyncedInfo"}
```

| Property                | Type          | Required | Nullable       | Defined by                                                                                                                                       |
| :---------------------- | :------------ | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------- |
| [id](#id-3)             | Not specified | Required | cannot be null | [Blender](blender-defs-pcdflightsyncedinfo-properties-id.md "/blender.schema.json#/$defs/pcdFlightSyncedInfo/properties/id")                     |
| [points4d](#points4d-1) | `object`      | Required | cannot be null | [Blender](blender-defs-pcdflightsyncedinfo-properties-flight-positions.md "/blender.schema.json#/$defs/pcdFlightSyncedInfo/properties/points4d") |

### id



`id`

*   is required

*   Type: unknown

*   cannot be null

*   defined in: [Blender](blender-defs-pcdflightsyncedinfo-properties-id.md "/blender.schema.json#/$defs/pcdFlightSyncedInfo/properties/id")

#### id Type

unknown

### points4d



`points4d`

*   is required

*   Type: `object` ([Flight positions](blender-defs-pcdflightsyncedinfo-properties-flight-positions.md))

*   cannot be null

*   defined in: [Blender](blender-defs-pcdflightsyncedinfo-properties-flight-positions.md "/blender.schema.json#/$defs/pcdFlightSyncedInfo/properties/points4d")

#### points4d Type

`object` ([Flight positions](blender-defs-pcdflightsyncedinfo-properties-flight-positions.md))
