# Magic ReCollation Helper

## Purpose

This project was created to help me when I wanted to re-collate magic packs from cards I had for sets.  
The process of card collation is the way that a contents of a pack of cards for TCG is determined.

In Magic, a "normal" pack has 10 commons, 3 uncommons, 1 rare, and 1 land.
Within that, there can be more variation within each of those slots depending on the specific card set.

Example Pack:

```
* Blue, Sorcery, Rare
* Red/Green, Creature, Uncommon
* White, Instant, Uncommon
* Black, Enchantment, Uncommon
* Blue, Creature, Common
* Green, Creature, Common
* White, Creature, Common
* Black, Creature, Common
* Colorless, Artifact, Common
* Blue, Instant, Common
* Black, Sorcery, Common
* Red, Creature, Common
* Red, Enchantment, Common
* Green, Creature, Common
```

The questions that arise from this are - What goes in a pack? How many of each type of card? How many packs do you need to get a good card distribution?

These are the things that this project is meant to help answer, and answer with a simple grid layout.

It takes all the cards in a given set, and for the Commons (most important), splits them out such that there are enough packs such that each card gets included.

For the Uncommon and Rare slots, they are taken randomly from cards in those slots, with the caveat that each card combination (by card color and card type) is excluded from being re-picked until all other combinations have been exhausted

## Project Notes

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

The most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## TODO List

_roughly in priority order_

Documentation Work

- README clarify

Phase One

- Fix styling for mobile
  - mobile friendlier layout/styling
- Offload json loading until requested (reduce initial load and data transfer)
  - delay loading sets
- Improve deploy process (did it manually for now)
- Fill-in rest of row for commons with "random card"

Phase Two

- Improve layout / suggestions for Uncommons/Rares
  - something more like "here are some suggestions", or "here are distributions"
- Grown up website address
- Add more set analysis
  - set keyword analysis (ex: flying, trample, double strike, fateseal)
  - dynamic analysis — selectable details sort/search/analysis
- Add more sets
- Explore [bundlers](https://medium.com/js-imaginea/comparing-bundlers-webpack-rollup-parcel-f8f5dc609cfd)
- Set customization/saving — exclude cards that you don’t have available (ex: Emrakul)
- Split set analysis from pack layout functionality into separate webapps
- Add "re-roll" button for uncommons/rares (separate?)
- Multicolor
  - icon - change to something better
