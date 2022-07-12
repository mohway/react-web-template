import { feature } from './plop/generators/feature.mjs';
import { domain } from './plop/generators/index.mjs';

export default function (plop) {
  plop.setGenerator('domain', domain);
  plop.setGenerator('feature', feature);
}
