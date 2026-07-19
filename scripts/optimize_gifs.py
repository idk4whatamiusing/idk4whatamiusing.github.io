#!/usr/bin/env python3
"""Optimize GIFs in public/gifs for web delivery (GitHub Pages).

Reduces file size and playback cost by:
  - capping the number of frames (evenly sampled)
  - capping the max width (downscaled with LANCZOS)
  - reducing colors via adaptive palette
  - keeping the original per-frame duration and looping

Requires Pillow:  python3 -m pip install Pillow
"""

import glob
import os

MAX_FRAMES = 30
MAX_W = 360
COLORS = 64
GIF_DIR = os.path.join(os.path.dirname(__file__), "..", "public", "gifs")


def optimize(src: str) -> None:
    im = Image.open(src)
    frames = getattr(im, "n_frames", 1)
    w, h = im.size
    scale = min(1.0, MAX_W / w)

    if frames > MAX_FRAMES:
        idx = [round(i * (frames - 1) / (MAX_FRAMES - 1)) for i in range(MAX_FRAMES)]
    else:
        idx = list(range(frames))

    out = []
    dur = im.info.get("duration", 80)
    for i in idx:
        im.seek(i)
        f = im.convert("RGB").convert("P", palette=Image.ADAPTIVE, colors=COLORS)
        if scale < 1.0:
            f = f.resize((int(w * scale), int(h * scale)), Image.LANCZOS)
        out.append(f)

    out[0].save(
        src,
        save_all=True,
        append_images=out[1:],
        disposal=2,
        duration=dur,
        loop=0,
        optimize=True,
    )


def main() -> None:
    for f in sorted(glob.glob(os.path.join(GIF_DIR, "*.gif"))):
        optimize(f)
        print("optimized", os.path.basename(f))


if __name__ == "__main__":
    from PIL import Image

    main()
