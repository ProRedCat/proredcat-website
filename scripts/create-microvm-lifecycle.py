"""Render the blog lifecycle diagram as editable SVG with portable outlined text.

uv run --with fonttools python scripts/create-microvm-lifecycle.py
node --input-type=module -e "import sharp from 'sharp'; await sharp('public/blog/lambda-microvm-runtime/microvm-snapshot-lifecycle.svg', {density:144}).png().toFile('/tmp/microvm-snapshot-lifecycle.png')"
"""
from pathlib import Path
from html import escape
from fontTools.ttLib import TTFont
from fontTools.pens.svgPathPen import SVGPathPen

ROOT = Path(__file__).resolve().parents[1]
FONT = TTFont(ROOT / "scripts/assets/microvm-figures/SpaceGrotesk-Regular.ttf")
GLYPHS, CMAP = FONT.getGlyphSet(), FONT.getBestCmap()
INK, BG = "#000000", "#fffde7"
parts = [f'''<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="500" viewBox="0 0 1200 500" role="img" aria-labelledby="title desc">
<title id="title">A build snapshot and the lifecycle of one MicroVM</title>
<desc id="desc">A snapshot captured during the image build supplies the starting state of a new VM. That same VM can suspend and resume with its memory and disk state preserved, or terminate from either state. Termination is final. Provisioning and transitional states are omitted.</desc>
<defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M1 1 L9 5 L1 9" fill="none" stroke="{INK}" stroke-width="1.4"/></marker></defs>
<rect width="1200" height="500" fill="{BG}"/>
''']


def text(x, y, value, size=26, color=INK, anchor="middle"):
    scale = size / FONT["head"].unitsPerEm
    names = [CMAP.get(ord(c), ".notdef") for c in value]
    width = sum(FONT["hmtx"][n][0] for n in names)
    left = x-width*scale/2 if anchor == "middle" else x
    assert left >= 0 and left + width*scale <= 1200
    parts.append(f'<g fill="{color}" aria-label="{escape(value)}" transform="translate({left} {y}) scale({scale} {-scale})">')
    pos = 0
    for name in names:
        pen = SVGPathPen(GLYPHS)
        GLYPHS[name].draw(pen)
        parts.append(f'<path transform="translate({pos} 0)" d="{pen.getCommands()}"/>')
        pos += FONT["hmtx"][name][0]
    parts.append("</g>")


def path(d, arrow=False):
    marker = ' marker-end="url(#arrow)"' if arrow else ""
    parts.append(f'<path d="{d}" fill="none" stroke="{INK}" stroke-width="2"{marker}/>')


def rect(x, y, width, height, fill=BG, stroke=INK):
    parts.append(f'<rect x="{x}" y="{y}" width="{width}" height="{height}" fill="{fill}" stroke="{stroke}" stroke-width="1.6"/>')


def box(x, y, width, label, double=False):
    rect(x, y, width, 80)
    if double:
        rect(x+5, y+5, width-10, 70)
    text(x+width/2, y+49, label)


rect(460, 55, 690, 405, stroke="#c4c4bb")
text(805, 105, "One MicroVM", 25)
box(50, 180, 260, "Build snapshot")
text(180, 300, "Initial memory + disk", 21)
path("M310 220 H520", True)
text(415, 201, "New VM", 22)
box(520, 180, 200, "Running")
box(900, 180, 200, "Suspended")
path("M720 202 H900", True)
text(810, 184, "Suspend", 22)
path("M900 240 H720", True)
text(810, 274, "Resume", 22)
path("M620 260 V325 H805")
path("M1000 260 V325 H805")
path("M805 325 V365", True)
text(875, 353, "Terminate", 21)
box(695, 365, 220, "Terminated", double=True)

parts.append("</svg>")
(ROOT / "public/blog/lambda-microvm-runtime/microvm-snapshot-lifecycle.svg").write_text("\n".join(parts) + "\n")
