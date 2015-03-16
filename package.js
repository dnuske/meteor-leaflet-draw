Package.describe({
  summary: "Adds support for drawing and editing vectors and markers on Leaflet maps",
  version: "1.0.1",
  git: "https://github.com/dnuske/meteor-leaflet-draw.git",
  packages: {
    mapbox: {}
  }
});

Package.onUse(function (api) {
  api.use('fuatsengul:leaflet@1.0.1', 'client');
  api.addFiles('lib/leaflet.draw.js', 'client');
  api.addFiles('leaflet.draw.css', 'client');
  api.addFiles('images/spritesheet.png', 'client');
  api.addFiles('images/spritesheet-2x.png', 'client');
});
