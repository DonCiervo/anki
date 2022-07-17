# FEN in sequence

Takes [Forsyth–Edwards Notation](https://en.wikipedia.org/wiki/Forsyth%E2%80%93Edwards_Notation) (FEN) and turns it into a sequence of clickable chess positions.

Particularly useful to study openings and main defenses.

Using FEN instead of images guarantees performance and small file sizes.

***

### Demonstration

From this:

```
rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR,
rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR,
rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR,
rnbqkbnr/pppp1ppp/8/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R,
r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R,
r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R
```

To this:

![fen-sequence-rendered](images/FEN-sequence.gif?raw=true "Rendered FEN Sequence in Anki")


***

### Attribution

Originally inspired by @MNandor's sequence template.

Using the HTMLTTCHESS renderer engine by @xeyownt.

Thank you very much to them for their work!
