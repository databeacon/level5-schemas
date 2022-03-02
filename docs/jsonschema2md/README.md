# README

## Top-level Schemas

*   [Batch Flights](./flights.md "Definition for a flights dynamic batch data") – `https://github.com/databeacon/level5-schemas/edit/main/schemas/batch/flights.schema.json`

*   [Firehose FLIFO](./flifo.md "Definition for firehose static flight information") – `https://github.com/databeacon/level5-schemas/schemas/firehose/flifo.schema.json`

*   [Firehose Positions](./positions.md "Definition for a firehose positions data") – `https://github.com/databeacon/level5-schemas/schemas/firehose/positions.schema.json`

*   [Labels predictive NCTs](./ncts.md "Definition of the streaming NCTs data") – `https://github.com/databeacon/level5-schemas/schemas/batch/ncts.schema.json`

*   [Manouvres (historical data)](./manouvres.md "Definition of the manouvres historical data") – `https://github.com/databeacon/level5-schemas/schemas/batch/manouvres.schema.json`

*   [Streaming Blender](./blender.md "Definition the blender stream") – `https://github.com/databeacon/level5-schemas/schemas/streaming/blender.schema.json`

*   [Streaming Current Positions](./currentpositions.md "Definition for current positions caché used for streaming calculations") – `https://github.com/databeacon/level5-schemas/edit/main/schemas/streaming/currentPositions.schema.json`

*   [Streaming FLIFO](./airports.md "Definition for the airports cache table used as ETL helper") – `https://github.com/databeacon/level5-schemas/schemas/airports.schema.json`

*   [Streaming FLIFO](./flifo-1.md "Definition for a flights static data") – `https://github.com/databeacon/level5-schemas/schemas/streaming/flifo.schema.json`

*   [Streaming Flights](./flights-1.md "Definition for a flights dynamic data") – `https://github.com/databeacon/level5-schemas/edit/main/schemas/streaming/flights.schema.json`

*   [Streaming NCTs](./ncts-1.md "Definition of the streaming NCTs data") – `https://github.com/databeacon/level5-schemas/schemas/streaming/ncts.schema.json`

*   [Streaming PCDs](./pcds.md "Definition of the streaming PCDs data") – `https://github.com/databeacon/level5-schemas/schemas/streaming/pcds.schema.json`

*   [Streaming PCDs](./pcds-1.md "Definition of the batch PCDs data") – `https://github.com/databeacon/level5-schemas/schemas/batch/pcds.schema.json`

## Other Schemas

### Objects

*   [Exit projection](./blender-properties-non-conflicting-flights-properties-exit-projection.md "Projection for soft-NCTs") – `https://github.com/databeacon/level5-schemas/schemas/streaming/blender.schema.json#/properties/nct/properties/projExit`

*   [Flight](./blender-properties-flight.md "Represents a single flight") – `https://github.com/databeacon/level5-schemas/schemas/streaming/blender.schema.json#/properties/flights`

*   [Intruder](./blender-properties-potential-conflict-detection--properties-intruder.md "Intruder position and CPA") – `https://github.com/databeacon/level5-schemas/schemas/streaming/blender.schema.json#/properties/pcds/properties/intruder`

*   [Intruder](./blender-properties-potential-conflict-detection--properties-synced-intruder.md "Intruder position and CPA") – `https://github.com/databeacon/level5-schemas/schemas/streaming/blender.schema.json#/properties/pcds/properties/synced/intruder`

*   [Location](./blender-properties-flight-properties-location.md "Aircraft 4D position") – `https://github.com/databeacon/level5-schemas/schemas/streaming/blender.schema.json#/properties/flights/properties/location`

*   [Non-conflicting flights](./blender-properties-non-conflicting-flights.md "Refers to our mike5-stream NCTs calculation pipeline") – `https://github.com/databeacon/level5-schemas/schemas/streaming/blender.schema.json#/properties/nct`

*   [Ownship](./blender-properties-potential-conflict-detection--properties-ownship.md "Ownship position and CPA") – `https://github.com/databeacon/level5-schemas/schemas/streaming/blender.schema.json#/properties/pcds/properties/ownship`

*   [Position projection](./blender-properties-flight-properties-synced-flight-properties-position-projection.md "4D location at 60s ahead of sync epoch") – `https://github.com/databeacon/level5-schemas/schemas/streaming/blender.schema.json#/properties/flights/properties/synced/properties/projection`

*   [Potential conflict detection ](./blender-properties-potential-conflict-detection-.md "Refers to our mike5-stream PCDs calculation pipeline") – `https://github.com/databeacon/level5-schemas/schemas/streaming/blender.schema.json#/properties/pcds`

*   [Projected cpa](./blender-properties-potential-conflict-detection--properties-intruder-properties-projected-cpa.md "4D Projected position") – `https://github.com/databeacon/level5-schemas/schemas/streaming/blender.schema.json#/properties/pcds/properties/intruder/properties/cpa`

*   [Projected position](./blender-properties-non-conflicting-flights-properties-exit-projection-properties-projected-position.md "4D Projected position") – `https://github.com/databeacon/level5-schemas/schemas/streaming/blender.schema.json#/properties/nct/properties/projExit/properties/location`

*   [Projected position](./blender-properties-potential-conflict-detection--properties-ownship-properties-projected-position.md "4D Projected position") – `https://github.com/databeacon/level5-schemas/schemas/streaming/blender.schema.json#/properties/pcds/properties/ownship/properties/location`

*   [Projected position](./blender-properties-potential-conflict-detection--properties-ownship-properties-projected-position-1.md "4D Projected position") – `https://github.com/databeacon/level5-schemas/schemas/streaming/blender.schema.json#/properties/pcds/properties/ownship/properties/cpa`

*   [Projected position](./blender-properties-potential-conflict-detection--properties-intruder-properties-projected-position.md "4D Projected position") – `https://github.com/databeacon/level5-schemas/schemas/streaming/blender.schema.json#/properties/pcds/properties/intruder/properties/location`

*   [Projected position](./blender-properties-potential-conflict-detection--properties-synced-ownship-projected-position.md "4D Projected position") – `https://github.com/databeacon/level5-schemas/schemas/streaming/blender.schema.json#/properties/pcds/properties/synced/ownship/location`

*   [Projected position](./blender-properties-potential-conflict-detection--properties-synced-intruder-properties-projected-position.md "4D Projected position") – `https://github.com/databeacon/level5-schemas/schemas/streaming/blender.schema.json#/properties/pcds/properties/synced/intruder/properties/location`

*   [Synced Flight](./blender-properties-flight-properties-synced-flight.md "Synced properties of the Flight object") – `https://github.com/databeacon/level5-schemas/schemas/streaming/blender.schema.json#/properties/flights/properties/synced`

*   [Synced NCT](./blender-properties-non-conflicting-flights-properties-synced-nct.md "Nothing to sync yet") – `https://github.com/databeacon/level5-schemas/schemas/streaming/blender.schema.json#/properties/nct/properties/synced`

*   [Synced position](./blender-properties-flight-properties-synced-flight-properties-synced-position.md "Aircraft synced 4D location") – `https://github.com/databeacon/level5-schemas/schemas/streaming/blender.schema.json#/properties/flights/properties/synced/properties/location`

### Arrays



## Version Note

The schemas linked above follow the JSON Schema Spec version: `https://json-schema.org/draft/2020-12/schema`
