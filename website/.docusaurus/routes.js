
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/',
  component: ComponentCreator('/','deb'),
  exact: true,
},
{
  path: '/__docusaurus/debug',
  component: ComponentCreator('/__docusaurus/debug','3d6'),
  exact: true,
},
{
  path: '/__docusaurus/debug/config',
  component: ComponentCreator('/__docusaurus/debug/config','914'),
  exact: true,
},
{
  path: '/__docusaurus/debug/content',
  component: ComponentCreator('/__docusaurus/debug/content','c28'),
  exact: true,
},
{
  path: '/__docusaurus/debug/globalData',
  component: ComponentCreator('/__docusaurus/debug/globalData','3cf'),
  exact: true,
},
{
  path: '/__docusaurus/debug/metadata',
  component: ComponentCreator('/__docusaurus/debug/metadata','31b'),
  exact: true,
},
{
  path: '/__docusaurus/debug/registry',
  component: ComponentCreator('/__docusaurus/debug/registry','0da'),
  exact: true,
},
{
  path: '/__docusaurus/debug/routes',
  component: ComponentCreator('/__docusaurus/debug/routes','244'),
  exact: true,
},
{
  path: '/search',
  component: ComponentCreator('/search','070'),
  exact: true,
},
{
  path: '/docs',
  component: ComponentCreator('/docs','2d6'),
  
  routes: [
{
  path: '/docs/api/naj-cookbook',
  component: ComponentCreator('/docs/api/naj-cookbook','5e5'),
  exact: true,
},
{
  path: '/docs/api/naj-overview',
  component: ComponentCreator('/docs/api/naj-overview','49b'),
  exact: true,
},
{
  path: '/docs/api/naj-quick-reference',
  component: ComponentCreator('/docs/api/naj-quick-reference','e03'),
  exact: true,
},
{
  path: '/docs/api/near-api-rest-server',
  component: ComponentCreator('/docs/api/near-api-rest-server','5e6'),
  exact: true,
},
{
  path: '/docs/api/rpc',
  component: ComponentCreator('/docs/api/rpc','4bd'),
  exact: true,
},
{
  path: '/docs/community/community-channels',
  component: ComponentCreator('/docs/community/community-channels','8e4'),
  exact: true,
},
{
  path: '/docs/community/community-faq',
  component: ComponentCreator('/docs/community/community-faq','9cc'),
  exact: true,
},
{
  path: '/docs/community/contribute/bounties',
  component: ComponentCreator('/docs/community/contribute/bounties','10c'),
  exact: true,
},
{
  path: '/docs/community/contribute/contribute-faq',
  component: ComponentCreator('/docs/community/contribute/contribute-faq','b81'),
  exact: true,
},
{
  path: '/docs/community/contribute/contribute-nearcore',
  component: ComponentCreator('/docs/community/contribute/contribute-nearcore','2f9'),
  exact: true,
},
{
  path: '/docs/community/contribute/contribute-overview',
  component: ComponentCreator('/docs/community/contribute/contribute-overview','5e5'),
  exact: true,
},
{
  path: '/docs/community/contribute/how-to-contribute',
  component: ComponentCreator('/docs/community/contribute/how-to-contribute','bf9'),
  exact: true,
},
{
  path: '/docs/concepts/account',
  component: ComponentCreator('/docs/concepts/account','bc4'),
  exact: true,
},
{
  path: '/docs/concepts/architecture/papers',
  component: ComponentCreator('/docs/concepts/architecture/papers','08d'),
  exact: true,
},
{
  path: '/docs/concepts/architecture/specification',
  component: ComponentCreator('/docs/concepts/architecture/specification','098'),
  exact: true,
},
{
  path: '/docs/concepts/data-storage',
  component: ComponentCreator('/docs/concepts/data-storage','e5f'),
  exact: true,
},
{
  path: '/docs/concepts/epoch',
  component: ComponentCreator('/docs/concepts/epoch','120'),
  exact: true,
},
{
  path: '/docs/concepts/gas',
  component: ComponentCreator('/docs/concepts/gas','901'),
  exact: true,
},
{
  path: '/docs/concepts/indexer',
  component: ComponentCreator('/docs/concepts/indexer','6e9'),
  exact: true,
},
{
  path: '/docs/concepts/networks',
  component: ComponentCreator('/docs/concepts/networks','9f7'),
  exact: true,
},
{
  path: '/docs/concepts/new-to-near',
  component: ComponentCreator('/docs/concepts/new-to-near','3d0'),
  exact: true,
},
{
  path: '/docs/concepts/overview',
  component: ComponentCreator('/docs/concepts/overview','1d5'),
  exact: true,
},
{
  path: '/docs/concepts/storage-staking',
  component: ComponentCreator('/docs/concepts/storage-staking','37c'),
  exact: true,
},
{
  path: '/docs/concepts/transaction',
  component: ComponentCreator('/docs/concepts/transaction','a80'),
  exact: true,
},
{
  path: '/docs/develop/basics/create-account',
  component: ComponentCreator('/docs/develop/basics/create-account','73b'),
  exact: true,
},
{
  path: '/docs/develop/basics/getting-started',
  component: ComponentCreator('/docs/develop/basics/getting-started','916'),
  exact: true,
},
{
  path: '/docs/develop/basics/hackathon-startup-guide',
  component: ComponentCreator('/docs/develop/basics/hackathon-startup-guide','fbe'),
  exact: true,
},
{
  path: '/docs/develop/contracts/as/intro',
  component: ComponentCreator('/docs/develop/contracts/as/intro','7d0'),
  exact: true,
},
{
  path: '/docs/develop/contracts/as/near-sdk-as',
  component: ComponentCreator('/docs/develop/contracts/as/near-sdk-as','165'),
  exact: true,
},
{
  path: '/docs/develop/contracts/as/testing-as-contracts',
  component: ComponentCreator('/docs/develop/contracts/as/testing-as-contracts','504'),
  exact: true,
},
{
  path: '/docs/develop/contracts/overview',
  component: ComponentCreator('/docs/develop/contracts/overview','8f6'),
  exact: true,
},
{
  path: '/docs/develop/contracts/rust/intro',
  component: ComponentCreator('/docs/develop/contracts/rust/intro','5cb'),
  exact: true,
},
{
  path: '/docs/develop/contracts/rust/near-sdk-rs',
  component: ComponentCreator('/docs/develop/contracts/rust/near-sdk-rs','429'),
  exact: true,
},
{
  path: '/docs/develop/contracts/rust/testing-rust-contracts',
  component: ComponentCreator('/docs/develop/contracts/rust/testing-rust-contracts','e83'),
  exact: true,
},
{
  path: '/docs/develop/front-end/calling-smart-contracts',
  component: ComponentCreator('/docs/develop/front-end/calling-smart-contracts','a63'),
  exact: true,
},
{
  path: '/docs/develop/front-end/introduction',
  component: ComponentCreator('/docs/develop/front-end/introduction','ff5'),
  exact: true,
},
{
  path: '/docs/develop/front-end/near-api-js',
  component: ComponentCreator('/docs/develop/front-end/near-api-js','30b'),
  exact: true,
},
{
  path: '/docs/develop/node/compile-and-run-a-node',
  component: ComponentCreator('/docs/develop/node/compile-and-run-a-node','7d0'),
  exact: true,
},
{
  path: '/docs/develop/node/running-a-node',
  component: ComponentCreator('/docs/develop/node/running-a-node','4b0'),
  exact: true,
},
{
  path: '/docs/develop/node/running-a-node-windows',
  component: ComponentCreator('/docs/develop/node/running-a-node-windows','bad'),
  exact: true,
},
{
  path: '/docs/faq/developer-faq',
  component: ComponentCreator('/docs/faq/developer-faq','148'),
  exact: true,
},
{
  path: '/docs/faq/economics-faq',
  component: ComponentCreator('/docs/faq/economics-faq','c91'),
  exact: true,
},
{
  path: '/docs/faq/general-faq',
  component: ComponentCreator('/docs/faq/general-faq','5a8'),
  exact: true,
},
{
  path: '/docs/faq/naj-faq',
  component: ComponentCreator('/docs/faq/naj-faq','750'),
  exact: true,
},
{
  path: '/docs/faq/technical-faq',
  component: ComponentCreator('/docs/faq/technical-faq','8c4'),
  exact: true,
},
{
  path: '/docs/roles/integrator/errors/error-implementation',
  component: ComponentCreator('/docs/roles/integrator/errors/error-implementation','55b'),
  exact: true,
},
{
  path: '/docs/roles/integrator/errors/introduction',
  component: ComponentCreator('/docs/roles/integrator/errors/introduction','17f'),
  exact: true,
},
{
  path: '/docs/roles/integrator/exchange-integration',
  component: ComponentCreator('/docs/roles/integrator/exchange-integration','c96'),
  exact: true,
},
{
  path: '/docs/roles/integrator/faq',
  component: ComponentCreator('/docs/roles/integrator/faq','767'),
  exact: true,
},
{
  path: '/docs/roles/integrator/implicit-accounts',
  component: ComponentCreator('/docs/roles/integrator/implicit-accounts','07e'),
  exact: true,
},
{
  path: '/docs/roles/integrator/token-loss',
  component: ComponentCreator('/docs/roles/integrator/token-loss','b56'),
  exact: true,
},
{
  path: '/docs/roles/validator/hardware',
  component: ComponentCreator('/docs/roles/validator/hardware','e22'),
  exact: true,
},
{
  path: '/docs/tokens/lockup',
  component: ComponentCreator('/docs/tokens/lockup','ffd'),
  exact: true,
},
{
  path: '/docs/tokens/token-custody',
  component: ComponentCreator('/docs/tokens/token-custody','4b1'),
  exact: true,
},
{
  path: '/docs/tools/near-cli',
  component: ComponentCreator('/docs/tools/near-cli','7b7'),
  exact: true,
},
{
  path: '/docs/tools/near-explorer',
  component: ComponentCreator('/docs/tools/near-explorer','d7e'),
  exact: true,
},
{
  path: '/docs/tools/near-indexer',
  component: ComponentCreator('/docs/tools/near-indexer','3fe'),
  exact: true,
},
{
  path: '/docs/tools/near-wallet',
  component: ComponentCreator('/docs/tools/near-wallet','2ee'),
  exact: true,
},
{
  path: '/docs/tutorials/contracts/as-workshop',
  component: ComponentCreator('/docs/tutorials/contracts/as-workshop','692'),
  exact: true,
},
{
  path: '/docs/tutorials/contracts/cross-contract-calls',
  component: ComponentCreator('/docs/tutorials/contracts/cross-contract-calls','a1f'),
  exact: true,
},
{
  path: '/docs/tutorials/contracts/intro-to-rust',
  component: ComponentCreator('/docs/tutorials/contracts/intro-to-rust','083'),
  exact: true,
},
{
  path: '/docs/tutorials/contracts/token',
  component: ComponentCreator('/docs/tutorials/contracts/token','92f'),
  exact: true,
},
{
  path: '/docs/tutorials/create-transactions',
  component: ComponentCreator('/docs/tutorials/create-transactions','795'),
  exact: true,
},
{
  path: '/docs/tutorials/figment',
  component: ComponentCreator('/docs/tutorials/figment','5db'),
  exact: true,
},
{
  path: '/docs/tutorials/front-end/naj-examples',
  component: ComponentCreator('/docs/tutorials/front-end/naj-examples','a6f'),
  exact: true,
},
{
  path: '/docs/tutorials/front-end/naj-workshop',
  component: ComponentCreator('/docs/tutorials/front-end/naj-workshop','d5f'),
  exact: true,
},
{
  path: '/docs/tutorials/ledger',
  component: ComponentCreator('/docs/tutorials/ledger','368'),
  exact: true,
},
{
  path: '/docs/tutorials/rainbow-bridge-frontend-mainnet',
  component: ComponentCreator('/docs/tutorials/rainbow-bridge-frontend-mainnet','411'),
  exact: true,
},
{
  path: '/docs/tutorials/rainbow-bridge-frontend-testnet',
  component: ComponentCreator('/docs/tutorials/rainbow-bridge-frontend-testnet','1e9'),
  exact: true,
},
{
  path: '/docs/validator/delegation',
  component: ComponentCreator('/docs/validator/delegation','0b4'),
  exact: true,
},
{
  path: '/docs/validator/deploy-on-mainnet',
  component: ComponentCreator('/docs/validator/deploy-on-mainnet','688'),
  exact: true,
},
{
  path: '/docs/validator/economics',
  component: ComponentCreator('/docs/validator/economics','380'),
  exact: true,
},
{
  path: '/docs/validator/keys',
  component: ComponentCreator('/docs/validator/keys','303'),
  exact: true,
},
{
  path: '/docs/validator/maintenance',
  component: ComponentCreator('/docs/validator/maintenance','e57'),
  exact: true,
},
{
  path: '/docs/validator/staking',
  component: ComponentCreator('/docs/validator/staking','bcc'),
  exact: true,
},
{
  path: '/docs/validator/staking-faq',
  component: ComponentCreator('/docs/validator/staking-faq','9c4'),
  exact: true,
},
{
  path: '/docs/validator/staking-kr',
  component: ComponentCreator('/docs/validator/staking-kr','655'),
  exact: true,
},
{
  path: '/docs/validator/staking-overview',
  component: ComponentCreator('/docs/validator/staking-overview','e7a'),
  exact: true,
},
{
  path: '/docs/videos/accounts-keys',
  component: ComponentCreator('/docs/videos/accounts-keys','b13'),
  exact: true,
},
{
  path: '/docs/videos/collections-u128-etc',
  component: ComponentCreator('/docs/videos/collections-u128-etc','e98'),
  exact: true,
},
{
  path: '/docs/videos/contract-reviews',
  component: ComponentCreator('/docs/videos/contract-reviews','9d1'),
  exact: true,
},
{
  path: '/docs/videos/live-app-review',
  component: ComponentCreator('/docs/videos/live-app-review','ffc'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
