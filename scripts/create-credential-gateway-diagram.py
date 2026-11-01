"""Render the credential flow with the blog's font and colours.

uv run --with fonttools python scripts/create-credential-gateway-diagram.py
"""
from html import escape
from pathlib import Path

from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.ttLib import TTFont

ROOT = Path(__file__).resolve().parents[1]
FONT = TTFont(ROOT / "scripts/assets/microvm-figures/SpaceGrotesk-Regular.ttf")
GLYPHS, CMAP = FONT.getGlyphSet(), FONT.getBestCmap()
INK, PAPER, ORANGE = "#000000", "#fffde7", "#b42318"
parts = [f'''<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="360" viewBox="0 0 1200 360" role="img" aria-labelledby="title desc">
<title id="title">Adding credentials outside the MicroVM</title>
<desc id="desc">The unprivileged runner and root supervisor proxy are inside the MicroVM. Requests pass through the supervisor to the Autohive gateway outside the VM. The gateway checks access and adds the connection credential before forwarding to GitHub.</desc>
<defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M1 1 L9 5 L1 9" fill="none" stroke="context-stroke" stroke-width="1.4"/></marker></defs>
<rect width="1200" height="360" fill="{PAPER}"/>
''']


def text(x, y, value, size=23, colour=INK):
    scale = size / FONT["head"].unitsPerEm
    names = [CMAP.get(ord(c), ".notdef") for c in value]
    width = sum(FONT["hmtx"][n][0] for n in names) * scale
    assert x - width / 2 >= 0 and x + width / 2 <= 1200, value
    parts.append(f'<g fill="{colour}" aria-label="{escape(value)}" transform="translate({x-width/2} {y}) scale({scale} {-scale})">')
    pos = 0
    for name in names:
        pen = SVGPathPen(GLYPHS)
        GLYPHS[name].draw(pen)
        parts.append(f'<path transform="translate({pos} 0)" d="{pen.getCommands()}"/>')
        pos += FONT["hmtx"][name][0]
    parts.append("</g>")


def rect(x, y, w, h, colour=INK):
    parts.append(f'<rect x="{x}" y="{y}" width="{w}" height="{h}" fill="none" stroke="{colour}" stroke-width="1.8"/>')


def arrow(d, colour=INK):
    parts.append(f'<path d="{d}" fill="none" stroke="{colour}" stroke-width="1.8" marker-end="url(#arrow)"/>')


rect(25, 115, 545, 215)
text(297, 153, "MicroVM", 26)
rect(50, 190, 195, 95)
text(147, 225, "Command runner", 21)
text(147, 257, "Unprivileged", 19)
arrow("M245 237 H315")
rect(315, 190, 230, 95)
text(430, 225, "Supervisor proxy")
text(430, 257, "Root", 19)

arrow("M545 237 H690")
rect(690, 190, 220, 95)
text(800, 225, "Autohive gateway", 22)
text(800, 257, "Checks access", 19)
rect(690, 35, 220, 75, ORANGE)
text(800, 66, "Connection", 23, ORANGE)
text(800, 94, "credential", 23, ORANGE)
arrow("M800 110 V190", ORANGE)
text(845, 158, "Inject", 19, ORANGE)

arrow("M910 237 H1035", ORANGE)
rect(1035, 190, 140, 95)
text(1105, 246, "GitHub", 25)

parts.append("</svg>")
(ROOT / "public/blog/lambda-microvm-runtime/credential-gateway-flow.svg").write_text("\n".join(parts) + "\n")
