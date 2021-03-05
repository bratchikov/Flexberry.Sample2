import { test } from 'qunit';

import moduleForAcceptance from 'ember-app/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | new platform sample2 author l');

test('testing /new-platform-sample2-author-l', function(assert) {
  visit('/new-platform-sample2-author-l');

  andThen(() => {
    checkOlvConfig('[data-test-olv]', null, assert, [
      'refreshButton',
      'createNewButton',
      'colsConfigButton',
    ]);

    const controller = this.application.__container__.lookup('controller:' + currentRouteName());
    const newFormRoute = controller.get('editFormRoute') + '.new';
    goToNewForm('[data-test-olv]', null, assert, newFormRoute);
  });
});
