const assertEqual = require('../assertEqual');
const tail = require('../tail');
const assert = require('chai').assert;

// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!

describe("#tail", () => {
  it("returns 3 for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Yo Yo', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
  });
  // it("returns '5' for ['5']", () => {
  //   assert.strictEqual(head(['5']), '5'); 
  // });
  // it("returns '5' for ['5, 6, 7']", () => {
  //   assert.strictEqual(head(['5', '6', '7']), '5'); 
  // });
  // it("returns 'Hello' for ['Hello', 'Lighthouse', 'Labs']", () => {
  //   assert.strictEqual(head(['Hello', 'Lighthouse', 'Labs']), 'Hello'); 
  // });
  // it("returns 'One' for ['One']", () => {
  //   assert.strictEqual(head(['One']), 'One'); 
  // });
  // it("returns 'undefined' for [ ]", () => {
  //   assert.strictEqual(head([ ]), undefined); 
  // });
});