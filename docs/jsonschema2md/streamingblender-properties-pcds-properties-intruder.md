# Untitled object in Streaming Blender Schema

```txt
https://github.com/databeacon/level5-schemas/schemas/streamingBlender.schema.json#/properties/pcds/properties/intruder
```

Intruder position and CPA

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                      |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :---------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [streamingBlender.schema.json\*](../../out/streamingBlender.schema.json "open original schema") |

## intruder Type

`object` ([Details](streamingblender-properties-pcds-properties-intruder.md))

# intruder Properties

| Property              | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                                                    |
| :-------------------- | :------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [id](#id)             | `string` | Optional | cannot be null | [Streaming Blender](streamingblender-properties-pcds-properties-intruder-properties-id.md "https://github.com/databeacon/level5-schemas/schemas/streamingBlender.schema.json#/properties/pcds/properties/intruder/properties/id")             |
| [location](#location) | `object` | Optional | cannot be null | [Streaming Blender](streamingblender-properties-pcds-properties-intruder-properties-location.md "https://github.com/databeacon/level5-schemas/schemas/streamingBlender.schema.json#/properties/pcds/properties/intruder/properties/location") |
| [cpa](#cpa)           | `object` | Optional | cannot be null | [Streaming Blender](streamingblender-properties-pcds-properties-intruder-properties-cpa.md "https://github.com/databeacon/level5-schemas/schemas/streamingBlender.schema.json#/properties/pcds/properties/intruder/properties/cpa")           |

## id



`id`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Streaming Blender](streamingblender-properties-pcds-properties-intruder-properties-id.md "https://github.com/databeacon/level5-schemas/schemas/streamingBlender.schema.json#/properties/pcds/properties/intruder/properties/id")

### id Type

`string`

## location

4D Projected position

`location`

*   is optional

*   Type: `object` ([Details](streamingblender-properties-pcds-properties-intruder-properties-location.md))

*   cannot be null

*   defined in: [Streaming Blender](streamingblender-properties-pcds-properties-intruder-properties-location.md "https://github.com/databeacon/level5-schemas/schemas/streamingBlender.schema.json#/properties/pcds/properties/intruder/properties/location")

### location Type

`object` ([Details](streamingblender-properties-pcds-properties-intruder-properties-location.md))

## cpa

4D Projected position

`cpa`

*   is optional

*   Type: `object` ([Details](streamingblender-properties-pcds-properties-intruder-properties-cpa.md))

*   cannot be null

*   defined in: [Streaming Blender](streamingblender-properties-pcds-properties-intruder-properties-cpa.md "https://github.com/databeacon/level5-schemas/schemas/streamingBlender.schema.json#/properties/pcds/properties/intruder/properties/cpa")

### cpa Type

`object` ([Details](streamingblender-properties-pcds-properties-intruder-properties-cpa.md))
