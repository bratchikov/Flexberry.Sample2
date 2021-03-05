import { moduleForModel, test } from 'ember-qunit';

moduleForModel('new-platform-sample2-author', 'Unit | Serializer | new-platform-sample2-author', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:new-platform-sample2-author',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'model:new-platform-sample2-author',
    'model:new-platform-sample2-book',
    'model:new-platform-sample2-country',
    'model:new-platform-sample2-language',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
