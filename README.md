# Casian Fitness Log

Weekly training plan arranged as alternating pairs, personal records and meal tracking with nutrition label scanning. Installs to the home screen, works offline and keeps all data on the phone.

## Put it online (one time, free)

1. Create a free account on github.com
2. Create a new repository called `fitness-log` and set it to Public
3. On the repository page, tap Add file, then Upload files, select all the files from this folder and tap Commit changes
4. Open Settings, then Pages. Under Source choose Deploy from a branch, pick `main` and `/ (root)`, then Save
5. After a minute or two the address appears at the top of the Pages screen, for example `https://your-name.github.io/fitness-log/`

## Install on the phone

- iPhone: open the address in Safari, tap Share, then Add to Home Screen
- Android: open the address in Chrome, tap the menu, then Install app

Then open the app from its new icon and tap Load backup file to bring in the plan and records.

## Label scanning

- In an ingredient, tap Scan label, take a photo of the label, then drag the corners of the box around the nutrition table and tap Read this area. A tight box reads the small numbers far better
- The first scan downloads the text reader (c.10 MB) and needs an internet connection; after that scanning works offline
- Each scan is read up to twice with different image treatments, so a dark or glossy photo can take twice as long
- Values found on the label are filled in and marked; check them and correct anything wrong before saving
- Romanian and English labels are supported, with the app staying in English

## Notes

- The code in the repository is public; the log itself never leaves the phone. Never upload a backup file to the repository
- On iPhone, the home-screen app and Safari keep separate data, so load the backup from inside the home-screen app
- Save a backup from Settings every week or two and keep it in Files, iCloud Drive or Google Drive
- To update the app, upload the new files over the old ones; the app shows "A new version is ready" on its next launch

## Version history

- 1.4 (Nov-26): two image treatments per scan (contrast stretch, then local threshold for dark or uneven photos), light blur against screen moire, nameless values placed by the EU table order, per-portion column used as a fallback reading, joint check of fat, saturates, carbs, sugars and protein against the calories
- 1.3.1 (Nov-26): lost decimal points fixed by checking each value against the per-portion column and the % RI column; fields the label's % RI disagrees with are marked Check
- 1.3 (Nov-26): crop box before reading, multilingual Lidl-style labels (15 languages, stacked or slash-separated names), reference-intake footnotes ignored, lost decimal commas repaired by plausibility, vitamins checked against the % NRV column, calorie consistency warning, Copy scanned text

- 1.2 (Nov-26): exercises arranged as alternating pairs with no rep numbers (Garmin keeps the sets), automatic easy or 60/30/10 long run, full label values, vitamins and minerals, label scanner
- 1.1 (Oct-26): default reps per exercise
- 1.0 (Oct-26): first version
