Quickstart:

yarn kbn clean
yarn kbn bootstrap

(se der um erro ERR_SSL_DECRYPTION_FAILED_OR_BAD_RECORD_MAC, pode ser contornado com `npm set strict-ssl false`. Será provavelmente porque a versão no npm é antiga)
(se der um erro Failed to download chromium ... routines:ssl3_get_record:decryption failed or bad record, tentar `yarn config set "strict-ssl" false -g`)

Para correr:
yarn start

Para build:
yarn build --skip-os-packages --release
