import { stubbedLogstashFields } from 'fixtures/logstash_fields';
import { SavedObject } from 'ui/saved_objects';

export function FixturesStubbedSavedObjectIndexPatternProvider(Private) {
  const mockLogstashFields = Private(stubbedLogstashFields);

  return function (id) {
    return new SavedObject(undefined, {
      id,
      type: 'index-pattern',
      attributes: {
        customFormats: '{}',
        fields: JSON.stringify(mockLogstashFields)
      },
      version: 2
    });
  };
}
