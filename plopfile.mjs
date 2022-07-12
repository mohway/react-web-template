import { domain } from './plop/generators/index.mjs';

export default function (plop) {
  // create your generators here
  console.log({ domain });
  plop.setGenerator('domain', domain);
}
