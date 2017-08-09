var BTCPriceFeed = artifacts.require("./BTCPriceFeed.sol");


contract('BTCPriceFeed', function(accounts) {
  // Test timestamp parsing
  it("Timestamp parsing", function() {
    var meta;
    return BTCPriceFeed.deployed().then(function(instance) {
      meta = instance;
       var json = "\x7b\x0a\x20\x20\x22\x6f\x70\x65\x6e\x22\x3a\x20\x7b\x0a\x20\x20\x20\x20\x22\x70\x72\x69\x63\x65\x22\x3a\x20\x39\x35\x39\x31\x37\x2c\x0a\x20\x20\x20\x20\x22\x74\x69\x6d\x65\x22\x3a\x20\x7b\x0a\x20\x20\x20\x20\x20\x20\x22\x75\x6e\x69\x78\x22\x3a\x20\x31\x34\x38\x33\x31\x34\x32\x34\x30\x30\x2c\x0a\x20\x20\x20\x20\x20\x20\x22\x69\x73\x6f\x22\x3a\x20\x22\x32\x30\x31\x36\x2d\x31\x32\x2d\x33\x31\x54\x30\x30\x3a\x30\x30\x3a\x30\x30\x2e\x30\x30\x30\x5a\x22\x0a\x20\x20\x20\x20\x7d\x0a\x20\x20\x7d\x2c\x0a\x20\x20\x22\x63\x6c\x6f\x73\x65\x22\x3a\x20\x7b\x0a\x20\x20\x20\x20\x22\x70\x72\x69\x63\x65\x22\x3a\x20\x39\x36\x37\x36\x30\x2c\x0a\x20\x20\x20\x20\x22\x74\x69\x6d\x65\x22\x3a\x20\x7b\x0a\x20\x20\x20\x20\x20\x20\x22\x75\x6e\x69\x78\x22\x3a\x20\x31\x34\x38\x33\x32\x32\x38\x38\x30\x30\x2c\x0a\x20\x20\x20\x20\x20\x20\x22\x69\x73\x6f\x22\x3a\x20\x22\x32\x30\x31\x37\x2d\x30\x31\x2d\x30\x31\x54\x30\x30\x3a\x30\x30\x3a\x30\x30\x2e\x30\x30\x30\x5a\x22\x0a\x20\x20\x20\x20\x7d\x0a\x20\x20\x7d\x2c\x0a\x20\x20\x22\x6c\x6f\x6f\x6b\x75\x70\x22\x3a\x20\x7b\x0a\x20\x20\x20\x20\x22\x70\x72\x69\x63\x65\x22\x3a\x20\x39\x36\x37\x36\x30\x2c\x0a\x20\x20\x20\x20\x22\x6b\x22\x3a\x20\x31\x2c\x0a\x20\x20\x20\x20\x22\x74\x69\x6d\x65\x22\x3a\x20\x7b\x0a\x20\x20\x20\x20\x20\x20\x22\x75\x6e\x69\x78\x22\x3a\x20\x31\x34\x38\x33\x32\x32\x38\x38\x30\x30\x2c\x0a\x20\x20\x20\x20\x20\x20\x22\x69\x73\x6f\x22\x3a\x20\x22\x32\x30\x31\x37\x2d\x30\x31\x2d\x30\x31\x54\x30\x30\x3a\x30\x30\x3a\x30\x30\x2e\x30\x30\x30\x5a\x22\x0a\x20\x20\x20\x20\x7d\x0a\x20\x20\x7d\x0a\x7d";
	return meta.parseBitcoinComFeed.call(json);
    }).then(function(result) {
//	  console.log(result);
//	  console.log(result[0].valueOf());
	  assert.equal(result[0].valueOf(), 1483142400);
	  assert.equal(result[1].valueOf(), 95917);
	  assert.equal(result[2].valueOf(), 1483228800);
	  assert.equal(result[3].valueOf(), 96760);
	});
  });

  // Test complete proof parsing
  it("Proof parsing", function() {
    var meta;
    return BTCPriceFeed.deployed().then(function(instance) {
      meta = instance;
       var proof = "\x20\x00\x10\x00\xff\xff\x03\x00\x03\x53\xaf\xfd\x9b\x54\x05\x00\xa6\x22\xb7\xfd\x9b\x54\x05\x00\x40\x00\x00\x00\x04\x00\x00\x00\x7f\x16\x0c\x7d\xa5\xbb\xa3\xe0\x1e\x38\xbd\xe7\x27\x86\x9b\x9c\xf4\xd0\x6a\x43\xae\x31\x77\x07\x3c\x1b\x3f\x2b\x83\x41\xd5\xa0\xe9\xe9\xba\xb4\xf7\x08\x4d\x8f\xd9\x71\xd3\x70\x79\x39\x9c\x66\xb1\xc6\x7f\x52\xc8\x78\xcd\x4d\xf6\xb4\xe5\xdf\x61\x97\xce\xa6\x02\x85\x00\x00\x47\x45\x54\x20\x2f\x70\x72\x6f\x78\x79\x2e\x70\x79\x3f\x75\x72\x6c\x3d\x68\x74\x74\x70\x73\x25\x33\x41\x2f\x2f\x69\x6e\x64\x65\x78\x2e\x62\x69\x74\x63\x6f\x69\x6e\x2e\x63\x6f\x6d\x2f\x61\x70\x69\x2f\x76\x30\x2f\x6c\x6f\x6f\x6b\x75\x70\x25\x33\x46\x74\x69\x6d\x65\x25\x33\x44\x31\x34\x38\x33\x32\x35\x30\x34\x30\x30\x20\x48\x54\x54\x50\x2f\x31\x2e\x31\x0d\x0a\x48\x6f\x73\x74\x3a\x20\x74\x6c\x73\x2d\x6e\x2e\x6f\x72\x67\x0d\x0a\x43\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e\x3a\x20\x6b\x65\x65\x70\x2d\x61\x6c\x69\x76\x65\x0d\x0a\x0d\x0a\x0c\x77\x28\x7d\x95\x2b\x6a\x9b\x82\x23\xb5\x40\x41\xc3\xb2\xf1\x02\x7e\x01\x01\x48\x54\x54\x50\x2f\x31\x2e\x31\x20\x32\x30\x30\x20\x4f\x4b\x0d\x0a\x44\x61\x74\x65\x3a\x20\x54\x75\x65\x2c\x20\x31\x38\x20\x4a\x75\x6c\x20\x32\x30\x31\x37\x20\x31\x38\x3a\x35\x30\x3a\x33\x36\x20\x47\x4d\x54\x0d\x0a\x53\x65\x72\x76\x65\x72\x3a\x20\x41\x70\x61\x63\x68\x65\x2f\x32\x2e\x34\x2e\x36\x20\x28\x52\x65\x64\x20\x48\x61\x74\x20\x45\x6e\x74\x65\x72\x70\x72\x69\x73\x65\x20\x4c\x69\x6e\x75\x78\x29\x20\x4f\x70\x65\x6e\x53\x53\x4c\x2f\x31\x2e\x30\x2e\x31\x65\x2d\x66\x69\x70\x73\x20\x50\x48\x50\x2f\x35\x2e\x34\x2e\x31\x36\x20\x6d\x6f\x64\x5f\x6e\x73\x73\x2f\x31\x2e\x30\x2e\x31\x34\x20\x4e\x53\x53\x2f\x33\x2e\x33\x30\x2e\x31\x0d\x0a\x43\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e\x3a\x20\x63\x6c\x6f\x73\x65\x0d\x0a\x58\x2d\x50\x6f\x77\x65\x72\x65\x64\x2d\x42\x79\x3a\x20\x45\x78\x70\x72\x65\x73\x73\x0d\x0a\x41\x63\x63\x65\x73\x73\x2d\x43\x6f\x6e\x74\x72\x6f\x6c\x2d\x41\x6c\x6c\x6f\x77\x2d\x4f\x72\x69\x67\x69\x6e\x3a\x20\x2a\x0d\x0a\x45\x78\x70\x69\x72\x65\x73\x3a\x20\x57\x65\x64\x2c\x20\x31\x39\x20\x4a\x75\x6c\x20\x32\x30\x31\x37\x20\x30\x30\x3a\x31\x35\x3a\x30\x30\x20\x47\x4d\x54\x0d\x0a\x43\x6f\x6e\x74\x65\x6e\x74\x2d\x4c\x65\x6e\x67\x74\x68\x3a\x20\x33\x38\x39\x0d\x0a\x45\x54\x61\x67\x3a\x20\x57\x2f\x22\x31\x38\x35\x2d\x72\x77\x4e\x59\x75\x41\x79\x31\x77\x37\x37\x65\x54\x49\x61\x38\x79\x51\x2b\x37\x46\x51\x22\x0d\x0a\x43\x6f\x6e\x74\x65\x6e\x74\x2d\x54\x79\x70\x65\x3a\x20\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6a\x73\x6f\x6e\x3b\x20\x63\x68\x61\x72\x73\x65\x74\x3d\x75\x74\x66\x2d\x38\x0d\x0a\x0d\x0a\x7e\x9c\x76\x11\x31\x3b\x82\x2b\x8f\x66\xe9\x90\xd2\x86\x9c\x3d\x02\x85\x01\x01\x7b\x0a\x20\x20\x22\x6f\x70\x65\x6e\x22\x3a\x20\x7b\x0a\x20\x20\x20\x20\x22\x70\x72\x69\x63\x65\x22\x3a\x20\x39\x36\x37\x36\x30\x2c\x0a\x20\x20\x20\x20\x22\x74\x69\x6d\x65\x22\x3a\x20\x7b\x0a\x20\x20\x20\x20\x20\x20\x22\x75\x6e\x69\x78\x22\x3a\x20\x31\x34\x38\x33\x32\x32\x38\x38\x30\x30\x2c\x0a\x20\x20\x20\x20\x20\x20\x22\x69\x73\x6f\x22\x3a\x20\x22\x32\x30\x31\x37\x2d\x30\x31\x2d\x30\x31\x54\x30\x30\x3a\x30\x30\x3a\x30\x30\x2e\x30\x30\x30\x5a\x22\x0a\x20\x20\x20\x20\x7d\x0a\x20\x20\x7d\x2c\x0a\x20\x20\x22\x63\x6c\x6f\x73\x65\x22\x3a\x20\x7b\x0a\x20\x20\x20\x20\x22\x70\x72\x69\x63\x65\x22\x3a\x20\x39\x39\x38\x34\x37\x2c\x0a\x20\x20\x20\x20\x22\x74\x69\x6d\x65\x22\x3a\x20\x7b\x0a\x20\x20\x20\x20\x20\x20\x22\x75\x6e\x69\x78\x22\x3a\x20\x31\x34\x38\x33\x33\x31\x35\x32\x30\x30\x2c\x0a\x20\x20\x20\x20\x20\x20\x22\x69\x73\x6f\x22\x3a\x20\x22\x32\x30\x31\x37\x2d\x30\x31\x2d\x30\x32\x54\x30\x30\x3a\x30\x30\x3a\x30\x30\x2e\x30\x30\x30\x5a\x22\x0a\x20\x20\x20\x20\x7d\x0a\x20\x20\x7d\x2c\x0a\x20\x20\x22\x6c\x6f\x6f\x6b\x75\x70\x22\x3a\x20\x7b\x0a\x20\x20\x20\x20\x22\x70\x72\x69\x63\x65\x22\x3a\x20\x39\x37\x35\x33\x32\x2c\x0a\x20\x20\x20\x20\x22\x6b\x22\x3a\x20\x30\x2e\x32\x35\x2c\x0a\x20\x20\x20\x20\x22\x74\x69\x6d\x65\x22\x3a\x20\x7b\x0a\x20\x20\x20\x20\x20\x20\x22\x75\x6e\x69\x78\x22\x3a\x20\x31\x34\x38\x33\x32\x35\x30\x34\x30\x30\x2c\x0a\x20\x20\x20\x20\x20\x20\x22\x69\x73\x6f\x22\x3a\x20\x22\x32\x30\x31\x37\x2d\x30\x31\x2d\x30\x31\x54\x30\x36\x3a\x30\x30\x3a\x30\x30\x2e\x30\x30\x30\x5a\x22\x0a\x20\x20\x20\x20\x7d\x0a\x20\x20\x7d\x0a\x7d\xf4\xd8\x87\x5f\x0b\xd6\xc1\x87\xb0\xc3\xda\xb7\xc0\x10\xa3\x04";
	return meta.submitProofOfPrice(proof);
    }).then(function(result) {
    return meta.getPrice.call(1483228800);
    }).then(function(price) {
 //     console.log(price);
      assert.equal(price.valueOf(), 96760);
    }).then(function(result) {
    return meta.getPrice.call(1483315200);
    }).then(function(price) {
//      console.log(price);
      assert.equal(price.valueOf(), 99847);
    });
  });
});
