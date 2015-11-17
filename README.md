    cd product && npm install
    cd ..
    cd toolkit && npm install
    cd ../product
    npm link ../toolkit && node_modules/.bin/webpack
