# README

## Top-level Schemas

*   [Batch Flights](./batchflights.md "Definition for a flights dynamic batch data") – `https://github.com/databeacon/level5-schemas/edit/main/schemas/batchFlights.schema.json`

*   [Current Positions](./currentpositions.md "Definition for current positions caché used for streaming calculations") – `https://github.com/databeacon/level5-schemas/edit/main/schemas/currentPositions.schema.json`

*   [Firehose FLIFO](./firehoseflifo.md "Definition for firehose static flight information") – `https://github.com/databeacon/level5-schemas/schemas/firehosePositions.schema.json`

*   [Firehose Positions](./firehosepositions.md "Definition for a firehose positions data") – `https://github.com/databeacon/level5-schemas/schemas/firehoseFLIFO.schema.json`

*   [Labels predictive NCTs](./labelsncts.md "Definition of the streaming NCTs data") – `https://github.com/databeacon/level5-schemas/schemas/labelsNCTs.schema.json`

*   [Streaming Blender](./streamingblender.md "Definition the blender stream") – `https://github.com/databeacon/level5-schemas/schemas/streamingBlender.schema.json`

*   [Streaming FLIFO](./streamingflifo.md "Definition for a flights static data") – `https://github.com/databeacon/level5-schemas/schemas/streamingFLIFO.schema.json`

*   [Streaming Flights](./streamingflights.md "Definition for a flights dynamic data") – `https://github.com/databeacon/level5-schemas/edit/main/schemas/streamingFlights.schema.json`

*   [Streaming NCTs](./streamingncts.md "Definition of the streaming NCTs data") – `https://github.com/databeacon/level5-schemas/schemas/streamingNCTs.schema.json`

*   [Streaming PCDs](./batchpcds.md "Definition of the batch PCDs data") – `https://github.com/databeacon/level5-schemas/schemas/batchPCDs.schema.json`

*   [Streaming PCDs](./streamingpcds.md "Definition of the streaming PCDs data") – `https://github.com/databeacon/level5-schemas/schemas/streamingPCDs.schema.json`

## Other Schemas

### Objects

*   [Exit projection](./streamingblender-properties-non-conflicting-flights-properties-exit-projection.md "Projection for soft-NCTs") – `https://github.com/databeacon/level5-schemas/schemas/streamingBlender.schema.json#/properties/nct/properties/projExit`

*   [Flight](./streamingblender-properties-flight.md "Represents a single flight") – `https://github.com/databeacon/level5-schemas/schemas/streamingBlender.schema.json#/properties/flights`

*   [Intruder](./streamingblender-properties-potential-conflict-detection--properties-intruder.md "Intruder position and CPA") – `https://github.com/databeacon/level5-schemas/schemas/streamingBlender.schema.json#/properties/pcds/properties/intruder`

*   [Intruder](./streamingblender-properties-potential-conflict-detection--properties-synced-intruder.md "Intruder position and CPA") – `https://github.com/databeacon/level5-schemas/schemas/streamingBlender.schema.json#/properties/pcds/properties/synced/intruder`

*   [Location](./streamingblender-properties-flight-properties-location.md "Aircraft 4D position") – `https://github.com/databeacon/level5-schemas/schemas/streamingBlender.schema.json#/properties/flights/properties/location`

*   [Non-conflicting flights](./streamingblender-properties-non-conflicting-flights.md "Refers to our mike5-stream NCTs calculation pipeline") – `https://github.com/databeacon/level5-schemas/schemas/streamingBlender.schema.json#/properties/nct`

*   [Ownship](./streamingblender-properties-potential-conflict-detection--properties-ownship.md "Ownship position and CPA") – `https://github.com/databeacon/level5-schemas/schemas/streamingBlender.schema.json#/properties/pcds/properties/ownship`

*   [Position projection](./streamingblender-properties-flight-properties-synced-flight-properties-position-projection.md "4D location at 60s ahead of sync epoch") – `https://github.com/databeacon/level5-schemas/schemas/streamingBlender.schema.json#/properties/flights/properties/synced/properties/projection`

*   [Potential conflict detection ](./streamingblender-properties-potential-conflict-detection-.md "Refers to our mike5-stream PCDs calculation pipeline") – `https://github.com/databeacon/level5-schemas/schemas/streamingBlender.schema.json#/properties/pcds`

*   [Projected cpa](./streamingblender-properties-potential-conflict-detection--properties-intruder-properties-projected-cpa.md "4D Projected position") – `https://github.com/databeacon/level5-schemas/schemas/streamingBlender.schema.json#/properties/pcds/properties/intruder/properties/cpa`

*   [Projected position](./streamingblender-properties-non-conflicting-flights-properties-exit-projection-properties-projected-position.md "4D Projected position") – `https://github.com/databeacon/level5-schemas/schemas/streamingBlender.schema.json#/properties/nct/properties/projExit/properties/location`

*   [Projected position](./streamingblender-properties-potential-conflict-detection--properties-ownship-properties-projected-position.md "4D Projected position") – `https://github.com/databeacon/level5-schemas/schemas/streamingBlender.schema.json#/properties/pcds/properties/ownship/properties/location`

*   [Projected position](./streamingblender-properties-potential-conflict-detection--properties-ownship-properties-projected-position-1.md "4D Projected position") – `https://github.com/databeacon/level5-schemas/schemas/streamingBlender.schema.json#/properties/pcds/properties/ownship/properties/cpa`

*   [Projected position](./streamingblender-properties-potential-conflict-detection--properties-intruder-properties-projected-position.md "4D Projected position") – `https://github.com/databeacon/level5-schemas/schemas/streamingBlender.schema.json#/properties/pcds/properties/intruder/properties/location`

*   [Projected position](./streamingblender-properties-potential-conflict-detection--properties-synced-ownship-projected-position.md "4D Projected position") – `https://github.com/databeacon/level5-schemas/schemas/streamingBlender.schema.json#/properties/pcds/properties/synced/ownship/location`

*   [Projected position](./streamingblender-properties-potential-conflict-detection--properties-synced-intruder-properties-projected-position.md "4D Projected position") – `https://github.com/databeacon/level5-schemas/schemas/streamingBlender.schema.json#/properties/pcds/properties/synced/intruder/properties/location`

*   [Synced Flight](./streamingblender-properties-flight-properties-synced-flight.md "Synced properties of the Flight object") – `https://github.com/databeacon/level5-schemas/schemas/streamingBlender.schema.json#/properties/flights/properties/synced`

*   [Synced NCT](./streamingblender-properties-non-conflicting-flights-properties-synced-nct.md "Nothing to sync yet") – `https://github.com/databeacon/level5-schemas/schemas/streamingBlender.schema.json#/properties/nct/properties/synced`

*   [Synced position](./streamingblender-properties-flight-properties-synced-flight-properties-synced-position.md "Aircraft synced 4D location") – `https://github.com/databeacon/level5-schemas/schemas/streamingBlender.schema.json#/properties/flights/properties/synced/properties/location`

### Arrays



## Version Note

The schemas linked above follow the JSON Schema Spec version: `https://json-schema.org/draft/2020-12/schema`
