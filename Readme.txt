Utviklet med node version: v18.13.0

Install:
npm i -g json-server
npm i --force

Start json server:
json-server --watch --port=5001 --delay=1000 db2.json

JSON server trenger -h option for å nås utenfor docker containeren

json-server --watch --port=5001 -H 0.0.0.0 --delay=1000 db2.json


start app:
npm run dev     

Kjøre tester:
npm testComponents


For å kjøre mot json server:
kommenter ut i main.tsx:

if (env === "development") {
  await worker.start({
    onUnhandledRequest: ({ method, url }) => {
      if (!url.pathname.match(/\.(tsx|ts|css|woff|woff2|ttf)/)) {
        throw new Error(`Unhandled ${method} request to ${url}`);
      }
    },
  });
}