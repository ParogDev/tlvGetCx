/*  This script embeds 2 links into the page.. yada yada description to come.
*
*   By: 68650
*/

var exts = '901,903,906,907';

//  Month formatting
var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

//  Today's date creation and formatting
var dt = new Date(); // Init current date in MS
var month = monthNames[dt.getMonth()]; // Month 1 starts at 0, same with our MMM array
var day = dt.getDate();
var year = dt.getFullYear();
todayIs = month + '-' + day + '-' + year  // format: MMM-dd-yy 


// Constructing daily url with today's date as a URL query
var dialedUrl = '/?app=pbxware&t=callstatistics&v=ext_comp&search=1&date_from='+ todayIs + '&date_to=' + todayIs + '&duration1=ALL&duration1type=4&compare=0&duration2=ALL&duration2type=3&adv_search=1&tenant=322&source=' + exts + '&sourcesearch=1&noshowheader=1&noshowfooter=1&popup=1&per_hour=0'
var receivedUrl = '/?app=pbxware&t=callstatistics&v=ext_comp&search=1&date_from='+ todayIs + '&date_to=' + todayIs + '&duration1=ALL&duration1type=4&compare=1&duration2=ALL&duration2type=3&adv_search=1&tenant=322&destination=' + exts + '&destinationsearch=1&noshowheader=1&noshowfooter=1&popup=1&per_hour=0'

// Constructing HTML to be injectec in the page
var dialedUrlHTML = '<p><a id="page-url1" href="' + dialedUrl + '" target="_blank">Statistiques "Dialed" d\'aujourd\'hui</a>'
var receivedUrlHTML = '<p><a id="page-url1" href="' + receivedUrl + '" target="_blank">Statistiques "Received" d\'aujourd\'hui</a>' 

// Injecting final html to the left of the page, right under the navigation menu.
$('.leftnav').append(dialedUrlHTML);
$('.leftnav').append(receivedUrlHTML);