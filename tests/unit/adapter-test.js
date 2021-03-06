/* global setTimeout */

import { module, test } from 'qunit';
import { QUnitAdapter } from 'ember-qunit';

module('QUnitAdapter');

test('asyncStart waits for asyncEnd to finish a test', function(assert) {
  const adapter = QUnitAdapter.create();

  adapter.asyncStart();
  setTimeout(function() {
    assert.ok(true);
    adapter.asyncEnd();
  }, 50);
});

test('asyncStart waits for equal numbers of asyncEnd to finish a test', function(assert) {
  const adapter = QUnitAdapter.create();

  adapter.asyncStart();
  adapter.asyncStart();
  adapter.asyncEnd();

  setTimeout(function() {
    assert.ok(true);
    adapter.asyncEnd();
  }, 50);
});
