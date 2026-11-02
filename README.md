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

- In an ingredient, tap Scan label, take a photo of the label, then drag the corners of the box around the nutrition table and tap Read this area. A tight box around one table reads best; scan the vitamins table separately if the label has one
- The first scan downloads the text reader with its Romanian and English language files (c.20 MB) and needs an internet connection; after that scanning works offline
- The reader straightens the photo, reads the whole table once, then finds the column of values and reads it again on its own, so a scan takes a few seconds longer than before but gets the small numbers right far more often
- Values found on the label are filled in and marked; check them and correct anything wrong before saving. Values the reader is unsure about are marked Check
- Romanian, English and the other languages found on Lidl labels are supported, with the app staying in English

## Notes

- The code in the repository is public; the log itself never leaves the phone. Never upload a backup file to the repository
- On iPhone, the home-screen app and Safari keep separate data, so load the backup from inside the home-screen app
- Save a backup from Settings every week or two and keep it in Files, iCloud Drive or Google Drive
- To update the app, upload the new files over the old ones; the app shows "A new version is ready" on its next launch

## Version history

- 1.6 (Nov-26): a digit recogniser of its own: a small convolutional network (c.100 KB, built into the app) trained here on c.170,000 glyphs of value strings rendered in 187 fonts under phone-photo conditions, checked on the glyphs of the real labels (207 of 208 right); it reads each digit, comma and unit of the value column and votes with the text reads; also an English sparse read as a third attempt on small or screen-moire tables, names repaired by closeness to known words (Enefgy, Protan), look-alike letters in vitamin names (B6 as BG), several nameless rows placed by table order with the % RI as a check, the last nameless row after protein taken as salt, and a per-portion value scaled up when the per 100 g reading is junk. Real labels: 9 of 10 crops fully right; generated labels: 90% of values (from 74% with 1.4.1 and 87% with 1.5, measured with a corrected score that no longer counts a missing value as right)
- 1.5 (Nov-26): table-aware reading: the photo is straightened, the column of values is located from the positions of the numbers and read again by itself with both language files, and the number of digits, the decimal comma and the unit are taken from the shapes of the glyphs, so a lost comma or a "g" read as "9" no longer changes a value; the energy line gets its own wider read; tested on the six real labels sent so far (every value right) and on 200 generated labels in 11 layouts and 8 fonts under phone-photo conditions (94% of values right, from 82% with 1.4.1)
- 1.4.1 (Nov-26): polyols and starch lines recognised (so they are never mistaken for fibre, and polyols count 2.4 kcal per g in the calorie check), a look-alike letter in front of a number also tried as a digit (Z3,0 is 23,0), stray digits from table borders ignored, 09 read as 0 g
- 1.4 (Nov-26): two image treatments per scan (contrast stretch, then local threshold for dark or uneven photos), light blur against screen moire, nameless values placed by the EU table order, per-portion column used as a fallback reading, joint check of fat, saturates, carbs, sugars and protein against the calories
- 1.3.1 (Nov-26): lost decimal points fixed by checking each value against the per-portion column and the % RI column; fields the label's % RI disagrees with are marked Check
- 1.3 (Nov-26): crop box before reading, multilingual Lidl-style labels (15 languages, stacked or slash-separated names), reference-intake footnotes ignored, lost decimal commas repaired by plausibility, vitamins checked against the % NRV column, calorie consistency warning, Copy scanned text

- 1.2 (Nov-26): exercises arranged as alternating pairs with no rep numbers (Garmin keeps the sets), automatic easy or 60/30/10 long run, full label values, vitamins and minerals, label scanner
- 1.1 (Oct-26): default reps per exercise
- 1.0 (Oct-26): first version
