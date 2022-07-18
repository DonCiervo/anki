# FEN in sequence

Anki Template that takes [Forsyth–Edwards Notation](https://en.wikipedia.org/wiki/Forsyth%E2%80%93Edwards_Notation) (FEN) and turns it into a sequence of clickable chess positions.

Particularly useful to study openings and main defenses.

Using FEN instead of images guarantees performance and small file sizes.

***

### Usage
 - On Anki desktop: 
   - Using the arrow keys to go back and forward
   - Using the mouse to click through the positions
   
 - On AnkiMobile and AnkiDroid:
   - Tapping the rendered chess board to cycle through the positions

&nsbp;

### Demonstration

From this:

```
rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR,
rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR,
rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR,
rnbqkbnr/pppp1ppp/8/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R,
r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R,
r1bqkbnr/pppp1ppp/2n5/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R
```

To this:

![fen-sequence-rendered](images/FEN-sequence.gif?raw=true "Rendered FEN Sequence in Anki")


***

### Attribution

Originally inspired by @MNandor's sequence template.

Using the HTMLTTCHESS renderer engine by @xeyownt.

Thank you very much to them for their work!
