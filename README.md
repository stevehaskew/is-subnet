# is-subnet


> Check if a string is an IP subnet in CIDR notation. Specifically, validating that the network address matches the given mask.

## Install

```
npm i is-subnet
```

## Usage

```js
const isSubnet = require("is-subnet");

isSubnet("192.168.0.0/24"); //=> true
isSubnet("192.168.0.1/24"); //=> false
isSubnet("192.168.0.0"); //=> false
isSubnet("2001:db8::/64"); //=> true;
isSubnet("2001:db8::1/64"); //=> false;
isSubnet("2001:db8::"); //=> false;
```

## API
### isSubnet(input)

Check if `input` is an IP CIDR subnet. Returns either true or false.

## Related

- [is-cidr](https://github.com/silverwind/is-cidr) - Check if a string is an IP address in CIDR notation
- [is-ip](https://github.com/sindresorhus/is-ip) - Check if a string is an IP address

## License

© [stevehaskew](https://github.com/stevehaskew), distributed under BSD licence

Based on previous work by [Felipe Apostol](https://github.com/flipjs) and [silverwind](https://github.com/silverwind)
