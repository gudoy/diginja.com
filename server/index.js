import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import https from 'https';
import fs from 'fs';

const { SSL_PORT = 443 } = process.env;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const certsFolderPath = path.join(__dirname, '../certs/');
const staticFolderPath = path.join(__dirname, 'static');

// Certificates
const key = fs.readFileSync(certsFolderPath + '/privkey.pem');
const cert = fs.readFileSync(certsFolderPath + './fullchain.pem');

// App
const app = express();
app.use(express.static(staticFolderPath));

// Server
const serverOptions = { key, cert };
const server = https.createServer(serverOptions, app);

server.listen(SSL_PORT, () => {
    console.log(`Server HTTPS started on https://localhost:${SSL_PORT}`);
});
