# Untitled object in Streaming Blender Schema

```txt
https://github.com/databeacon/level5-schemas/schemas/streamingBlender.json#/properties/flights
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                 |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [blender.schema.json\*](../out/blender.schema.json "open original schema") |

## flights Type

`object` ([Details](blender-properties-flights.md))

# flights Properties

| Property                                    | Type      | Required | Nullable       | Defined by                                                                                                                                                                                                        |
| :------------------------------------------ | :-------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [id](#id)                                   | `string`  | Optional | cannot be null | [Streaming Blender](blender-properties-flights-properties-id.md "https://github.com/databeacon/level5-schemas/schemas/streamingBlender.json#/properties/flights/properties/id")                                   |
| [epoch](#epoch)                             | `integer` | Optional | cannot be null | [Streaming Blender](blender-properties-flights-properties-epoch.md "https://github.com/databeacon/level5-schemas/schemas/streamingBlender.json#/properties/flights/properties/epoch")                             |
| [location](#location)                       | `object`  | Optional | cannot be null | [Streaming Blender](blender-properties-flights-properties-location.md "https://github.com/databeacon/level5-schemas/schemas/streamingBlender.json#/properties/flights/properties/location")                       |
| [gs](#gs)                                   | `number`  | Optional | cannot be null | [Streaming Blender](blender-properties-flights-properties-gs.md "https://github.com/databeacon/level5-schemas/schemas/streamingBlender.json#/properties/flights/properties/gs")                                   |
| [track](#track)                             | `integer` | Optional | cannot be null | [Streaming Blender](blender-properties-flights-properties-track.md "https://github.com/databeacon/level5-schemas/schemas/streamingBlender.json#/properties/flights/properties/track")                             |
| [turnSpeed](#turnspeed)                     | `number`  | Optional | cannot be null | [Streaming Blender](blender-properties-flights-properties-turnspeed.md "https://github.com/databeacon/level5-schemas/schemas/streamingBlender.json#/properties/flights/properties/turnSpeed")                     |
| [horizontalStatus](#horizontalstatus)       | `string`  | Optional | cannot be null | [Streaming Blender](blender-properties-flights-properties-horizontalstatus.md "https://github.com/databeacon/level5-schemas/schemas/streamingBlender.json#/properties/flights/properties/horizontalStatus")       |
| [flightLevel](#flightlevel)                 | `integer` | Optional | cannot be null | [Streaming Blender](blender-properties-flights-properties-flightlevel.md "https://github.com/databeacon/level5-schemas/schemas/streamingBlender.json#/properties/flights/properties/flightLevel")                 |
| [selectedAlt](#selectedalt)                 | `integer` | Optional | cannot be null | [Streaming Blender](blender-properties-flights-properties-selectedalt.md "https://github.com/databeacon/level5-schemas/schemas/streamingBlender.json#/properties/flights/properties/selectedAlt")                 |
| [selectedFlightLevel](#selectedflightlevel) | `integer` | Optional | cannot be null | [Streaming Blender](blender-properties-flights-properties-selectedflightlevel.md "https://github.com/databeacon/level5-schemas/schemas/streamingBlender.json#/properties/flights/properties/selectedFlightLevel") |
| [selectedHeading](#selectedheading)         | `integer` | Optional | cannot be null | [Streaming Blender](blender-properties-flights-properties-selectedheading.md "https://github.com/databeacon/level5-schemas/schemas/streamingBlender.json#/properties/flights/properties/selectedHeading")         |
| [verticalSpeed](#verticalspeed)             | `integer` | Optional | cannot be null | [Streaming Blender](blender-properties-flights-properties-verticalspeed.md "https://github.com/databeacon/level5-schemas/schemas/streamingBlender.json#/properties/flights/properties/verticalSpeed")             |
| [verticalStatus](#verticalstatus)           | `string`  | Optional | cannot be null | [Streaming Blender](blender-properties-flights-properties-verticalstatus.md "https://github.com/databeacon/level5-schemas/schemas/streamingBlender.json#/properties/flights/properties/verticalStatus")           |
| [callsign](#callsign)                       | `integer` | Optional | cannot be null | [Streaming Blender](blender-properties-flights-properties-callsign.md "https://github.com/databeacon/level5-schemas/schemas/streamingBlender.json#/properties/flights/properties/callsign")                       |
| [aprtDeparture](#aprtdeparture)             | `integer` | Optional | cannot be null | [Streaming Blender](blender-properties-flights-properties-aprtdeparture.md "https://github.com/databeacon/level5-schemas/schemas/streamingBlender.json#/properties/flights/properties/aprtDeparture")             |
| [aprtArrival](#aprtarrival)                 | `integer` | Optional | cannot be null | [Streaming Blender](blender-properties-flights-properties-aprtarrival.md "https://github.com/databeacon/level5-schemas/schemas/streamingBlender.json#/properties/flights/properties/aprtArrival")                 |
| [isLeaving](#isleaving)                     | `integer` | Optional | cannot be null | [Streaming Blender](blender-properties-flights-properties-isleaving.md "https://github.com/databeacon/level5-schemas/schemas/streamingBlender.json#/properties/flights/properties/isLeaving")                     |
| [leavingEpoch](#leavingepoch)               | `integer` | Optional | cannot be null | [Streaming Blender](blender-properties-flights-properties-leavingepoch.md "https://github.com/databeacon/level5-schemas/schemas/streamingBlender.json#/properties/flights/properties/leavingEpoch")               |
| [synced](#synced)                           | `object`  | Optional | cannot be null | [Streaming Blender](blender-properties-flights-properties-synced.md "https://github.com/databeacon/level5-schemas/schemas/streamingBlender.json#/properties/flights/properties/synced")                           |

## id



`id`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Streaming Blender](blender-properties-flights-properties-id.md "https://github.com/databeacon/level5-schemas/schemas/streamingBlender.json#/properties/flights/properties/id")

### id Type

`string`

## epoch

Flight dynamic position epoch from FlightAware

`epoch`

*   is optional

*   Type: `integer`

*   cannot be null

*   defined in: [Streaming Blender](blender-properties-flights-properties-epoch.md "https://github.com/databeacon/level5-schemas/schemas/streamingBlender.json#/properties/flights/properties/epoch")

### epoch Type

`integer`

## location

Aircraft 4D position

`location`

*   is optional

*   Type: `object` ([Details](blender-properties-flights-properties-location.md))

*   cannot be null

*   defined in: [Streaming Blender](blender-properties-flights-properties-location.md "https://github.com/databeacon/level5-schemas/schemas/streamingBlender.json#/properties/flights/properties/location")

### location Type

`object` ([Details](blender-properties-flights-properties-location.md))

## gs

Aircraft groundspeed in kts

`gs`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [Streaming Blender](blender-properties-flights-properties-gs.md "https://github.com/databeacon/level5-schemas/schemas/streamingBlender.json#/properties/flights/properties/gs")

### gs Type

`number`

## track

Aircraft heading in degrees

`track`

*   is optional

*   Type: `integer`

*   cannot be null

*   defined in: [Streaming Blender](blender-properties-flights-properties-track.md "https://github.com/databeacon/level5-schemas/schemas/streamingBlender.json#/properties/flights/properties/track")

### track Type

`integer`

## turnSpeed

Aircraft turnspeed in kts

`turnSpeed`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [Streaming Blender](blender-properties-flights-properties-turnspeed.md "https://github.com/databeacon/level5-schemas/schemas/streamingBlender.json#/properties/flights/properties/turnSpeed")

### turnSpeed Type

`number`

## horizontalStatus

Aircraft horizontal manouvre type

`horizontalStatus`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Streaming Blender](blender-properties-flights-properties-horizontalstatus.md "https://github.com/databeacon/level5-schemas/schemas/streamingBlender.json#/properties/flights/properties/horizontalStatus")

### horizontalStatus Type

`string`

### horizontalStatus Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value        | Explanation |
| :----------- | :---------- |
| `"left"`     |             |
| `"right"`    |             |
| `"cruising"` |             |

## flightLevel

Flight level as the number of FLXXX

`flightLevel`

*   is optional

*   Type: `integer`

*   cannot be null

*   defined in: [Streaming Blender](blender-properties-flights-properties-flightlevel.md "https://github.com/databeacon/level5-schemas/schemas/streamingBlender.json#/properties/flights/properties/flightLevel")

### flightLevel Type

`integer`

## selectedAlt

Selected altitude in ft

`selectedAlt`

*   is optional

*   Type: `integer`

*   cannot be null

*   defined in: [Streaming Blender](blender-properties-flights-properties-selectedalt.md "https://github.com/databeacon/level5-schemas/schemas/streamingBlender.json#/properties/flights/properties/selectedAlt")

### selectedAlt Type

`integer`

## selectedFlightLevel

Selected flught level as the number of FLXXX (Mode-S)

`selectedFlightLevel`

*   is optional

*   Type: `integer`

*   cannot be null

*   defined in: [Streaming Blender](blender-properties-flights-properties-selectedflightlevel.md "https://github.com/databeacon/level5-schemas/schemas/streamingBlender.json#/properties/flights/properties/selectedFlightLevel")

### selectedFlightLevel Type

`integer`

## selectedHeading

Selected heading in degrees (Mode-S)

`selectedHeading`

*   is optional

*   Type: `integer`

*   cannot be null

*   defined in: [Streaming Blender](blender-properties-flights-properties-selectedheading.md "https://github.com/databeacon/level5-schemas/schemas/streamingBlender.json#/properties/flights/properties/selectedHeading")

### selectedHeading Type

`integer`

## verticalSpeed

Vertical speed as feet per minute

`verticalSpeed`

*   is optional

*   Type: `integer`

*   cannot be null

*   defined in: [Streaming Blender](blender-properties-flights-properties-verticalspeed.md "https://github.com/databeacon/level5-schemas/schemas/streamingBlender.json#/properties/flights/properties/verticalSpeed")

### verticalSpeed Type

`integer`

## verticalStatus

Aircraft vertical manouvre type

`verticalStatus`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Streaming Blender](blender-properties-flights-properties-verticalstatus.md "https://github.com/databeacon/level5-schemas/schemas/streamingBlender.json#/properties/flights/properties/verticalStatus")

### verticalStatus Type

`string`

### verticalStatus Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value          | Explanation |
| :------------- | :---------- |
| `"ascending"`  |             |
| `"descending"` |             |
| `"cruising"`   |             |

## callsign

Callsign identifying the flight. Typically, ICAO airline code plus IATA/ticketing flight number, or the aircraft registration

`callsign`

*   is optional

*   Type: `integer`

*   cannot be null

*   defined in: [Streaming Blender](blender-properties-flights-properties-callsign.md "https://github.com/databeacon/level5-schemas/schemas/streamingBlender.json#/properties/flights/properties/callsign")

### callsign Type

`integer`

## aprtDeparture

Departure airport. ICAO format

`aprtDeparture`

*   is optional

*   Type: `integer`

*   cannot be null

*   defined in: [Streaming Blender](blender-properties-flights-properties-aprtdeparture.md "https://github.com/databeacon/level5-schemas/schemas/streamingBlender.json#/properties/flights/properties/aprtDeparture")

### aprtDeparture Type

`integer`

## aprtArrival

Arrival airport. ICAO format

`aprtArrival`

*   is optional

*   Type: `integer`

*   cannot be null

*   defined in: [Streaming Blender](blender-properties-flights-properties-aprtarrival.md "https://github.com/databeacon/level5-schemas/schemas/streamingBlender.json#/properties/flights/properties/aprtArrival")

### aprtArrival Type

`integer`

## isLeaving

Flag true if the aircraft is leaving the defined area

`isLeaving`

*   is optional

*   Type: `integer`

*   cannot be null

*   defined in: [Streaming Blender](blender-properties-flights-properties-isleaving.md "https://github.com/databeacon/level5-schemas/schemas/streamingBlender.json#/properties/flights/properties/isLeaving")

### isLeaving Type

`integer`

## leavingEpoch

Expected last epoch just after the aircraft leaves te defined area

`leavingEpoch`

*   is optional

*   Type: `integer`

*   cannot be null

*   defined in: [Streaming Blender](blender-properties-flights-properties-leavingepoch.md "https://github.com/databeacon/level5-schemas/schemas/streamingBlender.json#/properties/flights/properties/leavingEpoch")

### leavingEpoch Type

`integer`

## synced



`synced`

*   is optional

*   Type: `object` ([Details](blender-properties-flights-properties-synced.md))

*   cannot be null

*   defined in: [Streaming Blender](blender-properties-flights-properties-synced.md "https://github.com/databeacon/level5-schemas/schemas/streamingBlender.json#/properties/flights/properties/synced")

### synced Type

`object` ([Details](blender-properties-flights-properties-synced.md))
