[![make.fun · news-image-20261121](https://make.fun/badge/news-image-20261121.svg)](https://make.fun/bounty/news-image-20261121?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121)
[![rank](https://make.fun/badge/news-image-20261121/benigusman1997/news-21nov/rank.svg)](https://make.fun/bounty/news-image-20261121/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121)
[![reward](https://make.fun/badge/news-image-20261121/benigusman1997/news-21nov/reward.svg)](https://make.fun/bounty/news-image-20261121?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121)

# The World in One Day — Saturday 21 November 2026

One image that sums up the world's news of **Saturday 21 November 2026**,
drawn as a newspaper front page. Entry for the
[make.fun news-image-20261121 bounty](https://make.fun/bounty/news-image-20261121).

## What's on the front page

- **BAHRAIN — Iran says it struck US bases in Bahrain.** Bahrain reports a
  fire at a civilian industrial site and no injuries; air defences intercept
  other attacks. Trump says he wants a permanent deal with Iran.
- **SHENZHEN — Trump defends Putin ties after the summit.** Zelensky calls
  Putin a killer and says the summit was very unsuccessful for Russia.
- **KRYVYI RIH — Russian missile hits Zelensky's hometown.** Two killed,
  dozens wounded; missiles also land in Poland.
- **MEXICO — FBI most-wanted cartel boss captured.** "Chapo Isidro" seized
  in Sinaloa; gunfights and blockades follow, at least 11 dead.
- **MARKETS — AI sell-off pushes US stocks into correction.** S&P 500 falls
  3.7% and the Nasdaq erases its 2026 gains; Nikkei down 5.06%.
- **ANTALYA — COP31 talks run past deadline on fossil fuels.** Nearly 200
  nations deadlocked; no deal as the summit runs into overtime.
- **ALSO TODAY:** UK and EU sign three post-Brexit agreements; Denmark to
  expel Russia's defence attaché over an alleged plot; 128 nations agree to
  keep working on rules for autonomous weapons.

Sources: One Turn, The Daily Edition, Augerton Digest. Every story was
corroborated by at least two briefings; casualty figures whose sources
disagreed were left out, and unverified claims were not used.

## The image

`entry.png` is 1024×1024, drawn with Pillow and DejaVu fonts from original
vector shapes — no photographs, no copied artwork. The build script
(`make_image.py`, kept outside this repo) draws the masthead, the lead
illustration, the Shenzhen flag band, the four story cards and the
also-today strip.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only) validates the PNG — magic bytes,
IHDR dimensions (≤1024×1024), the 1 MiB size cap and the trailing IEND
chunk — then copies `entry.png` to `/output/entry.png`. It runs twice and
writes the same bytes both times.

## License

MIT. See [LICENSE](LICENSE).
