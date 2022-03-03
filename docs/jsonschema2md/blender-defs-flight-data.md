# Flight data Schema

```txt
/blender.schema.json#/$defs/flight
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                              |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :-------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [blender.schema.json\*](../../out/streaming/blender.schema.json "open original schema") |

## flight Type

`object` ([Flight data](blender-defs-flight-data.md))

# flight Properties

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

## id



`id`

*   is required

*   Type: unknown

*   cannot be null

*   defined in: [Blender](blender-defs-flight-data-properties-id.md "/blender.schema.json#/$defs/flight/properties/id")

### id Type

unknown

## gs

Aircraft groundspeed in kts

`gs`

*   is required

*   Type: `number`

*   cannot be null

*   defined in: [Blender](blender-defs-flight-data-properties-gs.md "/blender.schema.json#/$defs/flight/properties/gs")

### gs Type

`number`

## track

Aircraft heading in degrees

`track`

*   is required

*   Type: `integer`

*   cannot be null

*   defined in: [Blender](blender-defs-flight-data-properties-track.md "/blender.schema.json#/$defs/flight/properties/track")

### track Type

`integer`

## flightLevel

Aircraft flight level, eg. FLXXX

`flightLevel`

*   is required

*   Type: `integer`

*   cannot be null

*   defined in: [Blender](blender-defs-flight-data-properties-flightlevel.md "/blender.schema.json#/$defs/flight/properties/flightLevel")

### flightLevel Type

`integer`

## selectedAlt

Selected altitude in ft

`selectedAlt`

*   is required

*   Type: `integer`

*   cannot be null

*   defined in: [Blender](blender-defs-flight-data-properties-selectedalt.md "/blender.schema.json#/$defs/flight/properties/selectedAlt")

### selectedAlt Type

`integer`

## selectedFlightLevel

Mode-S selected flight level, eg. FLXXX

`selectedFlightLevel`

*   is required

*   Type: `integer`

*   cannot be null

*   defined in: [Blender](blender-defs-flight-data-properties-selectedflightlevel.md "/blender.schema.json#/$defs/flight/properties/selectedFlightLevel")

### selectedFlightLevel Type

`integer`

## verticalSpeed

Vertical speed as feet per minute

`verticalSpeed`

*   is required

*   Type: `integer`

*   cannot be null

*   defined in: [Blender](blender-defs-flight-data-properties-verticalspeed.md "/blender.schema.json#/$defs/flight/properties/verticalSpeed")

### verticalSpeed Type

`integer`

## callsign

Callsign identifying the flight. Typically, ICAO airline code plus IATA/ticketing flight number, or the aircraft registration

`callsign`

*   is required

*   Type: `integer`

*   cannot be null

*   defined in: [Blender](blender-defs-flight-data-properties-callsign.md "/blender.schema.json#/$defs/flight/properties/callsign")

### callsign Type

`integer`

## aprtDeparture

Departure airport. ICAO format

`aprtDeparture`

*   is required

*   Type: `integer`

*   cannot be null

*   defined in: [Blender](blender-defs-flight-data-properties-aprtdeparture.md "/blender.schema.json#/$defs/flight/properties/aprtDeparture")

### aprtDeparture Type

`integer`

## aprtArrival

Arrival airport. ICAO format

`aprtArrival`

*   is required

*   Type: `integer`

*   cannot be null

*   defined in: [Blender](blender-defs-flight-data-properties-aprtarrival.md "/blender.schema.json#/$defs/flight/properties/aprtArrival")

### aprtArrival Type

`integer`

## points4d



`points4d`

*   is required

*   Type: `object` ([Flight positions](blender-defs-flight-data-properties-flight-positions.md))

*   cannot be null

*   defined in: [Blender](blender-defs-flight-data-properties-flight-positions.md "/blender.schema.json#/$defs/flight/properties/points4d")

### points4d Type

`object` ([Flight positions](blender-defs-flight-data-properties-flight-positions.md))

## nct



`nct`

*   is required

*   Type: `object` ([Non-conflicting status](blender-defs-non-conflicting-status.md))

*   cannot be null

*   defined in: [Blender](blender-defs-non-conflicting-status.md "/blender.schema.json#/$defs/flight/properties/nct")

### nct Type

`object` ([Non-conflicting status](blender-defs-non-conflicting-status.md))

## pcds



`pcds`

*   is required

*   Type: `object[]` ([Potential conflict detected](blender-defs-potential-conflict-detected.md))

*   cannot be null

*   defined in: [Blender](blender-defs-flight-data-properties-potential-conflicts-detected.md "/blender.schema.json#/$defs/flight/properties/pcds")

### pcds Type

`object[]` ([Potential conflict detected](blender-defs-potential-conflict-detected.md))
