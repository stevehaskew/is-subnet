declare const isSubnet: {
  /**
  Check if `string` is an IPv4 or IPv6 subnet in CIDR notation.
  @returns boolean representing whether the network address and mask match.
  @example
  ```
  import isSubnet = require('is-subnet');

  isSubnet("192.168.0.0/24"); //=> true
  isSubnet("192.168.0.1/24"); //=> false
  isSubnet("192.168.0.0"); //=> false
  isSubnet("2001:db8::/64"); //=> true;
  isSubnet("2001:db8::1/64"); //=> false;
  isSubnet("2001:db8::"); //=> false;
  ```
  */
  (string: string): boolean;
};

export = isSubnet;
