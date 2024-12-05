import { User } from './User';
import { Company } from './Company';
import { CustomMaps } from "./CustomMaps";

const user = new User();

const company = new Company();

const customMap = new CustomMaps('map');

customMap.addMarker(user);
customMap.addMarker(company);
