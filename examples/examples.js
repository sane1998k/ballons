/*
 |--------------------------------------------------------------------------
 | This file contains examples of how to use this plugin
 |--------------------------------------------------------------------------
 |
 | To see what the documents generated by these examples looks like you can open
 | ´examples.html´ or go to http://simonbengtsson.github.io/jsPDF-AutoTable.
 |
 | To make it possible to view each example in examples.html some extra code
 | is added to the examples below. For example they return their jspdf
 | doc instance and gets generated data from the library faker.js. See simple.html
 | for a minimal example.
 */

var faker = window.faker

var examples = {}
window.examples = examples

// Basic - shows what a default table looks like
examples.basic = function () {
  var doc = new jsPDF()

  // From HTML
  doc.autoTable({ html: '.table', 
useCss: true,
})
  return doc
}


/*
 |--------------------------------------------------------------------------
 | Below is some helper functions for the examples
 |--------------------------------------------------------------------------
 */


