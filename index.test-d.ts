import {expectType} from 'tsd';
import isSubnet = require('.');

expectType<boolean>(isSubnet('foo'));
