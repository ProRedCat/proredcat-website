"""Create the illustrative session-lifetime diagram, not measured timing data.

uv run --with fonttools python scripts/create-sandbox-session-lifetimes.py
node --input-type=module -e "import sharp from 'sharp'; await sharp('public/blog/lambda-microvm-runtime/sandbox-session-lifetimes-v3.svg', {density:144}).png().toFile('/tmp/sandbox-session-lifetimes-v3.png')"
"""
from pathlib import Path
from html import escape
from fontTools.ttLib import TTFont
from fontTools.pens.svgPathPen import SVGPathPen

ROOT = Path(__file__).resolve().parents[1]
FONT = TTFont(ROOT / "scripts/assets/microvm-figures/SpaceGrotesk-Regular.ttf")
GLYPHS, CMAP = FONT.getGlyphSet(), FONT.getBestCmap()
INK, BG = "#000000", "#fffde7"
parts = [f'''<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="550" viewBox="0 0 1200 550" role="img" aria-labelledby="title desc">
<title id="title">Separate agent sandboxes within a conversation</title>
<desc id="desc">Illustrative lifetimes, not measured durations. Agent A uses VM 1 until it terminates, then gets VM 2 with fresh local state on its next command. Agent B has a separate VM. Uploaded files and saved outputs persist in Autohive storage and remain accessible subject to each agent's permissions.</desc>
<defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M1 1 L9 5 L1 9" fill="none" stroke="{INK}" stroke-width="1.4"/></marker></defs>
<rect width="1200" height="550" fill="{BG}"/>
''']


def text(x, y, value, size=24, anchor="middle"):
    scale = size / FONT["head"].unitsPerEm
    names = [CMAP.get(ord(c), ".notdef") for c in value]
    width = sum(FONT["hmtx"][n][0] for n in names) * scale
    left = x-width/2 if anchor == "middle" else x
    assert left >= 0 and left + width <= 1200, value
    parts.append(f'<g fill="{INK}" aria-label="{escape(value)}" transform="translate({left} {y}) scale({scale} {-scale})">')
    pos = 0
    for name in names:
        pen = SVGPathPen(GLYPHS)
        GLYPHS[name].draw(pen)
        parts.append(f'<path transform="translate({pos} 0)" d="{pen.getCommands()}"/>')
        pos += FONT["hmtx"][name][0]
    parts.append("</g>")


def path(d, arrow=False):
    marker = ' marker-end="url(#arrow)"' if arrow else ""
    parts.append(f'<path d="{d}" fill="none" stroke="{INK}" stroke-width="1.8"{marker}/>')


def rect(x, y, w, h):
    parts.append(f'<rect x="{x}" y="{y}" width="{w}" height="{h}" fill="{BG}" stroke="{INK}" stroke-width="1.8"/>')


def vm(x, y, w, name, state):
    rect(x, y, w, 100)
    text(x+w/2, y+39, name, 27)
    text(x+w/2, y+75, state, 21)


text(50, 77, "One conversation", 25, "start")
path("M280 70 H1150", True)
text(1115, 50, "Time", 20)

text(50, 196, "Agent A", 26, "start")
vm(280, 140, 240, "VM 1", "Files + processes")
path("M520 190 H575", True)
path("M590 160 H710 L725 175 V205 L710 220 H590 L575 205 V175 Z")
text(650, 198, "Terminates", 22)
path("M725 190 H875", True)
text(800, 173, "Next call", 20)
vm(875, 140, 275, "VM 2", "Fresh local state")

text(50, 366, "Agent B", 26, "start")
vm(280, 310, 870, "Separate VM", "Files + processes")

text(50, 489, "Autohive storage", 24, "start")
rect(280, 450, 870, 64)
text(715, 490, "Uploaded files + saved outputs", 25)

parts.append("</svg>")
(ROOT / "public/blog/lambda-microvm-runtime/sandbox-session-lifetimes-v3.svg").write_text("\n".join(parts) + "\n")
