# Flight data Schema

```txt
https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/blender/flight.schema.json
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                  |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [flight.schema.json](../../out/streaming/blender/flight.schema.json "open original schema") |

## Flight data Type

`object` ([Flight data](flight.md))

# Flight data Properties

| Property                                    | Type      | Required | Nullable       | Defined by                                                                                                                                                                                              |
| :------------------------------------------ | :-------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [id](#id)                                   | `string`  | Required | cannot be null | [Flight data](flight-properties-id.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/blender/flight.schema.json#/properties/id")                                   |
| [gs](#gs)                                   | `number`  | Required | cannot be null | [Flight data](flight-properties-gs.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/blender/flight.schema.json#/properties/gs")                                   |
| [track](#track)                             | `integer` | Required | cannot be null | [Flight data](flight-properties-track.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/blender/flight.schema.json#/properties/track")                             |
| [flightLevel](#flightlevel)                 | `integer` | Required | cannot be null | [Flight data](flight-properties-flightlevel.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/blender/flight.schema.json#/properties/flightLevel")                 |
| [selectedAlt](#selectedalt)                 | `integer` | Required | cannot be null | [Flight data](flight-properties-selectedalt.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/blender/flight.schema.json#/properties/selectedAlt")                 |
| [selectedFlightLevel](#selectedflightlevel) | `integer` | Required | cannot be null | [Flight data](flight-properties-selectedflightlevel.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/blender/flight.schema.json#/properties/selectedFlightLevel") |
| [verticalSpeed](#verticalspeed)             | `integer` | Required | cannot be null | [Flight data](flight-properties-verticalspeed.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/blender/flight.schema.json#/properties/verticalSpeed")             |
| [callsign](#callsign)                       | `integer` | Required | cannot be null | [Flight data](flight-properties-callsign.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/blender/flight.schema.json#/properties/callsign")                       |
| [aprtDeparture](#aprtdeparture)             | `integer` | Required | cannot be null | [Flight data](flight-properties-aprtdeparture.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/blender/flight.schema.json#/properties/aprtDeparture")             |
| [aprtArrival](#aprtarrival)                 | `integer` | Required | cannot be null | [Flight data](flight-properties-aprtarrival.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/blender/flight.schema.json#/properties/aprtArrival")                 |
| [points4d](#points4d)                       | `object`  | Required | cannot be null | [Flight data](flight-properties-flight-positions.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/blender/flight.schema.json#/properties/points4d")               |
| [nct](#nct)                                 | `object`  | Required | cannot be null | [Flight data](nct.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/blender/nct.schema.json#/properties/nct")                                                      |
| [pcds](#pcds)                               | `array`   | Required | cannot be null | [Flight data](flight-properties-potential-conflicts-detected.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/blender/flight.schema.json#/properties/pcds")       |

## id

Flight unique identifier

`id`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Flight data](flight-properties-id.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/blender/flight.schema.json#/properties/id")

### id Type

`string`

## gs

Aircraft groundspeed in kts

`gs`

*   is required

*   Type: `number`

*   cannot be null

*   defined in: [Flight data](flight-properties-gs.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/blender/flight.schema.json#/properties/gs")

### gs Type

`number`

## track

Aircraft heading in degrees

`track`

*   is required

*   Type: `integer`

*   cannot be null

*   defined in: [Flight data](flight-properties-track.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/blender/flight.schema.json#/properties/track")

### track Type

`integer`

## flightLevel

Aircraft flight level, eg. FLXXX

`flightLevel`

*   is required

*   Type: `integer`

*   cannot be null

*   defined in: [Flight data](flight-properties-flightlevel.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/blender/flight.schema.json#/properties/flightLevel")

### flightLevel Type

`integer`

## selectedAlt

Selected altitude in ft

`selectedAlt`

*   is required

*   Type: `integer`

*   cannot be null

*   defined in: [Flight data](flight-properties-selectedalt.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/blender/flight.schema.json#/properties/selectedAlt")

### selectedAlt Type

`integer`

## selectedFlightLevel

Mode-S selected flight level, eg. FLXXX

`selectedFlightLevel`

*   is required

*   Type: `integer`

*   cannot be null

*   defined in: [Flight data](flight-properties-selectedflightlevel.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/blender/flight.schema.json#/properties/selectedFlightLevel")

### selectedFlightLevel Type

`integer`

## verticalSpeed

Vertical speed as feet per minute

`verticalSpeed`

*   is required

*   Type: `integer`

*   cannot be null

*   defined in: [Flight data](flight-properties-verticalspeed.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/blender/flight.schema.json#/properties/verticalSpeed")

### verticalSpeed Type

`integer`

## callsign

Callsign identifying the flight. Typically, ICAO airline code plus IATA/ticketing flight number, or the aircraft registration

`callsign`

*   is required

*   Type: `integer`

*   cannot be null

*   defined in: [Flight data](flight-properties-callsign.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/blender/flight.schema.json#/properties/callsign")

### callsign Type

`integer`

## aprtDeparture

Departure airport. ICAO format

`aprtDeparture`

*   is required

*   Type: `integer`

*   cannot be null

*   defined in: [Flight data](flight-properties-aprtdeparture.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/blender/flight.schema.json#/properties/aprtDeparture")

### aprtDeparture Type

`integer`

## aprtArrival

Arrival airport. ICAO format

`aprtArrival`

*   is required

*   Type: `integer`

*   cannot be null

*   defined in: [Flight data](flight-properties-aprtarrival.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/blender/flight.schema.json#/properties/aprtArrival")

### aprtArrival Type

`integer`

## points4d



`points4d`

*   is required

*   Type: `object` ([Flight positions](flight-properties-flight-positions.md))

*   cannot be null

*   defined in: [Flight data](flight-properties-flight-positions.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/blender/flight.schema.json#/properties/points4d")

### points4d Type

`object` ([Flight positions](flight-properties-flight-positions.md))

## nct



`nct`

*   is required

*   Type: `object` ([Non-conflicting status](nct.md))

*   cannot be null

*   defined in: [Flight data](nct.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/blender/nct.schema.json#/properties/nct")

### nct Type

`object` ([Non-conflicting status](nct.md))

## pcds



`pcds`

*   is required

*   Type: `object[]` ([Potential conflict](pcd.md))

*   cannot be null

*   defined in: [Flight data](flight-properties-potential-conflicts-detected.md "https://raw.githubusercontent.com/databeacon/level5-schemas/main/schemas/streaming/blender/flight.schema.json#/properties/pcds")

### pcds Type

`object[]` ([Potential conflict](pcd.md))
