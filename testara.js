const http = require("https");

const options = {
  "method": "POST",
  "hostname": "test-pi2.onrender.com",
  "port": null,
  "path": "/api/info",
  "headers": {
    "Content-Type": "application/json",
    "Content-Length": "1349"
  }
};

const req = http.request(options, function (res) {
  const chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    const body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.write(JSON.stringify({
  app_eui: 'B6280ADA9AA64F14',
  dc: {balance: 259, nonce: 1},
  decoded: {payload: {humidity: 5, temperature: 0}, status: 'success'},
  dev_eui: 'A8610A34342A9212',
  devaddr: '4D090048',
  downlink_url: 'https://console.helium-iot.eu/api/v1/down/c76710c3-658b-4691-8886-d49eee94e8cb/DijN5TUhbznt2KGnOYoGjB-5m0H70BIK/ea648107-d16b-44f1-bad9-590918bff186',
  fcnt: 2,
  hotspots: [
    {
      channel: 5,
      frequency: 868.0999755859375,
      hold_time: 0,
      id: '112HN9PTKEpStTQEULDSLwWXMiqZU4Yn4x9xM8ucSRTKccdnoPi9',
      lat: 48.87239437009775,
      long: 2.5345526825076323,
      name: 'boxy-chili-liger',
      reported_at: 1676823537968,
      rssi: -122,
      snr: -8.800000190734863,
      spreading: 'SF12BW125',
      status: 'success'
    }
  ],
  id: 'ea648107-d16b-44f1-bad9-590918bff186',
  metadata: {
    adr_allowed: false,
    cf_list_enabled: false,
    multi_buy: 1,
    organization_id: '3f92ea25-a045-4302-803c-96e640b924d5',
    preferred_hotspots: [],
    rx_delay: 1,
    rx_delay_actual: 1,
    rx_delay_state: 'rx_delay_established'
  },
  name: 'mkrwan1310',
  payload: 'AD4ACw==',
  payload_size: 4,
  port: 2,
  raw_packet: 'gE0JAEiAAgACBG9DhgeNWFY=',
  replay: false,
  reported_at: 1676823537968,
  type: 'uplink',
  uuid: '049225fb-46ec-4a91-afbd-ed2abc251e64'
}));
req.end();