    cd product && npm install
    cd ..
    cd toolkit && npm install
    cd ../product
    npm link ../toolkit && node_modules/.bin/webpack
    python -m SimpleHTTPServer 9003
    open http://localhost:9003