`genDoc.js` uses Node atm as some used api's are not available in Bun. The ones I cought in the beginning
was `inspector` and `child_process`.

To run: `npm run genDoc`, or something like `rm -rf ./generated && node genDoc/genDoc.js`.