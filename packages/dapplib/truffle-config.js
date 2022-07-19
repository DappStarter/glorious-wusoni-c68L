require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess gloom symptom spot warrior ridge remind upgrade inflict kiwi olympic gas'; 
let testAccounts = [
"0xd30315502c6516e64fb3728651a168bdf4b19901c7866539b63f6066f931009c",
"0xfe6cd6a5b071649b6b76d065435586e2bfa04cce5c5278fbdba6910776f3784c",
"0xd36c53d8533b070696e70acdfc615084752fc31b71b900fea7af1a6d88729d4f",
"0x7a227528d8f89e1042ce5ba503ce71783985b5489537c69d27ea08e8079f85bb",
"0x09f3e8ca07a84fded749b4d1b9b3cc441f6a53246119b66dea8f734c5144e186",
"0x65695e80d9141fdfb2cd7ed4e61d348bfb47c2d9a25b95b4183624cd1a5ea6e9",
"0x6665c0094a3c253a63c4ad2b157c9d818443dfcac7f5e2460bc150e56f21dc5f",
"0x77b276f5d843e99a5f8d8a157a9e1fcc43fa40d92835aaa73edd07248fca31b8",
"0x705dacc3a3e251d5ad5b330f70edd1e00c7b426ea05cb99322e89a1559e00e84",
"0x784067b71fdebe349618ca8749adb7819ee98842543b6915c2c372799a48394f"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

