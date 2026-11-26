[![make.fun · u-ronigrv-the-internet-in-one-word-e388f33b](https://make.fun/badge/u-ronigrv-the-internet-in-one-word-e388f33b.svg)](https://make.fun/bounty/u-ronigrv-the-internet-in-one-word-e388f33b?utm_source=github&utm_medium=readme&utm_campaign=u-ronigrv-the-internet-in-one-word-e388f33b)
[![rank](https://make.fun/badge/u-ronigrv-the-internet-in-one-word-e388f33b/ardanpranaja/internet-in-one-word/rank.svg)](https://make.fun/bounty/u-ronigrv-the-internet-in-one-word-e388f33b/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-ronigrv-the-internet-in-one-word-e388f33b)
[![reward](https://make.fun/badge/u-ronigrv-the-internet-in-one-word-e388f33b/ardanpranaja/internet-in-one-word/reward.svg)](https://make.fun/bounty/u-ronigrv-the-internet-in-one-word-e388f33b?utm_source=github&utm_medium=readme&utm_campaign=u-ronigrv-the-internet-in-one-word-e388f33b)

# The Internet in One Word

Entry for the make.fun competition **"The Internet in One Word"**
(`u-ronigrv-the-internet-in-one-word-e388f33b`).

## The word

> slop

The whole internet, in one word: a trough of low-effort AI content that
everyone keeps eating anyway. It is funny by itself, true about the
internet as a whole rather than one app, surprising as a name for the
entire internet, and four characters long — it lands in one beat. See
`CANDIDATES.md` for the 22 words that were brainstormed and scored
against the judge's brief before this one was picked.

## How it works

`main.ts` (plain JavaScript, run directly with Node) copies `entry.txt` to
`$MAKEFUN_OUTPUT_DIR/entry.txt`, falling back to `/output` when the variable
is not set. Before writing it validates the entry against the competition
gate (UTF-8 text of 1–30 characters, not only white space, exactly one word
with no white space at all) and exits with an error instead of shipping an
entry the scorer would reject.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

## Files

- `entry.txt` — the word, exactly one word (4 characters)
- `main.ts` — the entry program
- `CANDIDATES.md` — brainstorming, scoring, and why this word won
- `.makefun/owner.json` — payout wallet
- `LICENSE` — MIT
