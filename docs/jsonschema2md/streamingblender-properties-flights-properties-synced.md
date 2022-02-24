# Untitled object in Streaming Blender Schema

```txt
https://github.com/databeacon/level5-schemas/schemas/streamingBlender.schema.json#/properties/flights/properties/synced
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                      |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :---------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [streamingBlender.schema.json\*](../../out/streamingBlender.schema.json "open original schema") |

## synced Type

`object` ([Details](streamingblender-properties-flights-properties-synced.md))

# synced Properties

| Property                  | Type      | Required | Nullable       | Defined by                                                                                                                                                                                                                                          |
| :------------------------ | :-------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [epoch](#epoch)           | `integer` | Optional | cannot be null | [Streaming Blender](streamingblender-properties-flights-properties-synced-properties-epoch.md "https://github.com/databeacon/level5-schemas/schemas/streamingBlender.schema.json#/properties/flights/properties/synced/properties/epoch")           |
| [location](#location)     | `object`  | Optional | cannot be null | [Streaming Blender](streamingblender-properties-flights-properties-synced-properties-location.md "https://github.com/databeacon/level5-schemas/schemas/streamingBlender.schema.json#/properties/flights/properties/synced/properties/location")     |
| [projection](#projection) | `object`  | Optional | cannot be null | [Streaming Blender](streamingblender-properties-flights-properties-synced-properties-projection.md "https://github.com/databeacon/level5-schemas/schemas/streamingBlender.schema.json#/properties/flights/properties/synced/properties/projection") |

## epoch

Should match position epoch

`epoch`

*   is optional

*   Type: `integer`

*   cannot be null

*   defined in: [Streaming Blender](streamingblender-properties-flights-properties-synced-properties-epoch.md "https://github.com/databeacon/level5-schemas/schemas/streamingBlender.schema.json#/properties/flights/properties/synced/properties/epoch")

### epoch Type

`integer`

## location

Aircraft synced 4D location

`location`

*   is optional

*   Type: `object` ([Details](streamingblender-properties-flights-properties-synced-properties-location.md))

*   cannot be null

*   defined in: [Streaming Blender](streamingblender-properties-flights-properties-synced-properties-location.md "https://github.com/databeacon/level5-schemas/schemas/streamingBlender.schema.json#/properties/flights/properties/synced/properties/location")

### location Type

`object` ([Details](streamingblender-properties-flights-properties-synced-properties-location.md))

## projection

4D location at 60s ahead of sync epoch

`projection`

*   is optional

*   Type: `object` ([Details](streamingblender-properties-flights-properties-synced-properties-projection.md))

*   cannot be null

*   defined in: [Streaming Blender](streamingblender-properties-flights-properties-synced-properties-projection.md "https://github.com/databeacon/level5-schemas/schemas/streamingBlender.schema.json#/properties/flights/properties/synced/properties/projection")

### projection Type

`object` ([Details](streamingblender-properties-flights-properties-synced-properties-projection.md))
