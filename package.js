Package.describe({
  summary:'meteor wrapper for firebase',
  version:'0.0.1',
  name:'mstn:firebase-core'
});

Package.onUse(function(api){
  api.versionsFrom('1.2');
  api.use('ecmascript', 'client');
  api.use('mquandalle:bower@1.5.2_1', 'client');
  api.addFiles([
    'bower.json',
    'firebase_core_client.js'
  ], 'client');

  // XXX here we should export Firebase
  // but it is already a global var imported by bower
  // even if it is overridded in client code
  // it doesn't like api.export

});
