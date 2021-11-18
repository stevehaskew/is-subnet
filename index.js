"use strict";
const isCidr = require('is-cidr');
const padIpv6 = require('pad-ipv6');

function isSubnet(subnet) {
    let cidrCheck = isCidr(subnet);
    if (cidrCheck === 0) {
        return false;
    }

    let parts = subnet.split('/');

    if (cidrCheck === 4) {
        // Bitwise AND of the IP and the Mask should equal the IP for a Network Address
        let ipLong = parts[0].split('.').reduce((int, oct) => (int << 8) + parseInt(oct, 10), 0) >>> 0;
        let maskLong =  ~(2 ** (32 - parseInt(parts[1])) - 1) >>> 0;

        return (ipLong & maskLong) >>> 0 === ipLong;
    } else if (cidrCheck === 6) {
        if (subnet.indexOf('.') !== -1) {
            return false;
        }
        // All the same logic, but start with hex and break it into 4 x 32bit uints since we can't work with 128bit
        let addrParts = padIpv6(parts[0])
            .replace(/:/g, '')
            .match(/.{8}/g)
            .map((value) => {return parseInt(value, 16) >>> 0});
        let maskParts = v6Mask(parts[1]);
        return addrParts
            .every((value, index) => {return (value & maskParts[index]) >>> 0 === value});
    }
    return false;
}

function v6Mask(maskLen) {
    let fullBlocks = Math.floor(maskLen / 32);
    let maskParts = Array(4).fill(0x00000000).fill(0xffffffff, 0, fullBlocks);
    maskParts[fullBlocks] = ~(2 ** (32 - (maskLen % 32)) - 1) >>> 0;
    return maskParts;
}

module.exports = str => isSubnet(str);
