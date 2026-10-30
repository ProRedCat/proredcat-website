"""Recreate the earlier draft's cache-miss read diagram as a blog-native SVG.

uv run --with fonttools python scripts/create-mounted-read-diagram.py
"""
from html import escape
from pathlib import Path
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.ttLib import TTFont

ROOT = Path(__file__).resolve().parents[1]
FONT = TTFont(ROOT / "scripts/assets/microvm-figures/SpaceGrotesk-Regular.ttf")
GLYPHS, CMAP = FONT.getGlyphSet(), FONT.getBestCmap()
INK, PAPER, ORANGE, RULE = "#000000", "#fffde7", "#b42318", "#bdbbad"
parts = [f'''<svg xmlns="http://www.w3.org/2000/svg" width="1100" height="540" viewBox="0 0 1100 540" role="img" aria-labelledby="title desc">
<title id="title">Reading a content area file through the mount</title>
<desc id="desc">On a cache miss, Python reads through rclone and FUSE. rclone sends a WebDAV GET request. Autohive checks the agent's access and resolves the storage reference before fetching the bytes, which return through rclone to Python. Metadata requests and bind mounts are omitted.</desc>
<defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M1 1 L9 5 L1 9" fill="none" stroke="context-stroke" stroke-width="1.4"/></marker></defs>
<rect width="1100" height="540" fill="{PAPER}"/>
''']

def text(x, y, value, size=23, colour=INK):
    scale = size / FONT["head"].unitsPerEm
    names = [CMAP.get(ord(c), ".notdef") for c in value]
    width = sum(FONT["hmtx"][n][0] for n in names) * scale
    assert x - width / 2 >= 0 and x + width / 2 <= 1100, value
    parts.append(f'<g fill="{colour}" aria-label="{escape(value)}" transform="translate({x-width/2} {y}) scale({scale} {-scale})">')
    pos = 0
    for name in names:
        pen = SVGPathPen(GLYPHS)
        GLYPHS[name].draw(pen)
        parts.append(f'<path transform="translate({pos} 0)" d="{pen.getCommands()}"/>')
        pos += FONT["hmtx"][name][0]
    parts.append("</g>")


def line(d, colour=INK, arrow=False, dashed=False):
    marker = ' marker-end="url(#arrow)"' if arrow else ''
    dash = ' stroke-dasharray="3 5"' if dashed else ''
    parts.append(f'<path d="{d}" fill="none" stroke="{colour}" stroke-width="1.6"{marker}{dash}/>')

text(230, 36, "MicroVM", 23)
text(800, 36, "Autohive", 23)
line("M45 63 V53 H415 V63", RULE)
line("M565 63 V53 H1040 V63", RULE)
for x, label in [(110, "Python"), (355, "rclone / FUSE"), (650, "WebDAV endpoint"), (970, "Storage service")]:
    text(x, 103, label, 22)
    line(f"M{x} 125 V515", RULE, dashed=True)
line("M110 160 H355", arrow=True)
text(232, 146, "Read file", 20)
line("M355 230 H650", arrow=True)
text(502, 216, "GET (cache miss)", 20)
line("M650 245 V310")
text(813, 269, "Check the agent's access", 19)
text(813, 296, "Resolve storage reference", 19)
line("M650 345 H970", arrow=True)
text(810, 331, "Fetch file", 20)
line("M970 397 H650", ORANGE, arrow=True)
text(810, 383, "File bytes", 20, ORANGE)
line("M650 449 H355", ORANGE, arrow=True)
text(502, 435, "HTTP response", 20, ORANGE)
line("M355 501 H110", ORANGE, arrow=True)
text(232, 487, "Read returns", 20, ORANGE)
parts.append("</svg>")
(ROOT / "public/blog/lambda-microvm-runtime/mounted-file-read.svg").write_text("\n".join(parts) + "\n")
