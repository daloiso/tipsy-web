# Quasar App (tipsy-version2)

A Quasar Project

## Install the dependencies
```bash
yarn
# or
npm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
quasar dev
```


### Lint the files
```bash
yarn lint
# or
npm run lint
```

### Build the app for production
```bash
quasar build
```

### Customize the configuration
See [Configuring quasar.conf.js](https://v1.quasar.dev/quasar-cli/quasar-conf-js).


# tipsy-service
docker image list
docker image rm unito/tipsy-web
docker build -t unito/tipsy-web .
minikube image load unito/tipsy-web

kubectl port-forward tipsy-web-svc-756664b47f-7mfvk  3000:3000
